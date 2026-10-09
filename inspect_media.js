const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
const publicDir = path.join(rootDir, 'public');
const imagesDir = path.join(publicDir, 'images');

function getFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      getFiles(full, files);
    } else {
      files.push({
        rel: '/' + path.relative(publicDir, full).replace(/\\/g, '/'),
        sizeMB: (fs.statSync(full).size / (1024 * 1024)).toFixed(2),
        sizeKB: (fs.statSync(full).size / 1024).toFixed(1),
        bytes: fs.statSync(full).size
      });
    }
  }
  return files;
}

const allImages = getFiles(imagesDir);
let totalBytes = allImages.reduce((sum, i) => sum + i.bytes, 0);

allImages.sort((a, b) => b.bytes - a.bytes);

let report = `# Media & Image Asset Audit Report\n\n`;
report += `**Total Images Found**: ${allImages.length}\n`;
report += `**Total Disk Weight**: ${(totalBytes / (1024 * 1024)).toFixed(2)} MB\n\n`;

report += `## Top Largest Images (> 200KB)\n\n`;
report += `| Image Path | File Size |\n`;
report += `| --- | --- |\n`;

let heavyCount = 0;
for (const img of allImages) {
  if (img.bytes > 200 * 1024) {
    report += `| \`${img.rel}\` | ${img.sizeMB} MB (${img.sizeKB} KB) |\n`;
    heavyCount++;
  }
}

report += `\n**Total Heavy Images (>200KB)**: ${heavyCount}\n\n`;

const productsCode = fs.readFileSync(path.join(rootDir, 'src/data/products.ts'), 'utf8');
const galleryCode = fs.readFileSync(path.join(rootDir, 'src/data/gallery.ts'), 'utf8');

const regex = /\/images\/[^\s'"`,\}\]]+/g;
const allRefs = Array.from(new Set([...productsCode.matchAll(regex), ...galleryCode.matchAll(regex)].map(m => m[0])));

const diskSet = new Set(allImages.map(i => i.rel));

const missing = [];
for (const ref of allRefs) {
  if (!diskSet.has(ref)) {
    missing.push(ref);
  }
}

report += `## Missing / Broken Image References\n\n`;
if (missing.length > 0) {
  report += `Found ${missing.length} missing image references:\n\n`;
  for (const m of missing) {
    report += `- ❌ \`${m}\`\n`;
  }
} else {
  report += `✅ All ${allRefs.length} referenced images exist on disk!\n`;
}

fs.writeFileSync(path.join(rootDir, 'media_report.md'), report, 'utf8');
console.log('MEDIA_REPORT_WRITTEN');
