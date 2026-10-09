import os
import re

root_dir = os.getcwd()
public_dir = os.path.join(root_dir, 'public')
images_dir = os.path.join(public_dir, 'images')

report_lines = ["# Media & Image Asset Audit Report\n"]

images_data = []
total_bytes = 0

for root, dirs, files in os.walk(images_dir):
    for f in files:
        if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp', '.gif')):
            full_path = os.path.join(root, f)
            rel_path = '/' + os.path.relpath(full_path, public_dir).replace('\\', '/')
            size = os.path.getsize(full_path)
            total_bytes += size
            
            images_data.append({
                'rel': rel_path,
                'full': full_path,
                'size_kb': round(size / 1024, 1),
                'size_mb': round(size / (1024 * 1024), 2),
                'bytes': size,
                'dim': "N/A"
            })

report_lines.append(f"**Total Images Found**: {len(images_data)}")
report_lines.append(f"**Total Images Disk Weight**: {round(total_bytes / (1024*1024), 2)} MB\n")

# Top 20 largest images
images_data.sort(key=lambda x: x['bytes'], reverse=True)

report_lines.append("## Top Largest Images (> 300KB)\n")
report_lines.append("| Image Path | Dimensions | File Size |")
report_lines.append("| --- | --- | --- |")

heavy_count = 0
for item in images_data:
    if item['bytes'] > 200 * 1024: # >200KB
        report_lines.append(f"| `{item['rel']}` | {item['dim']} | {item['size_mb']} MB ({item['size_kb']} KB) |")
        heavy_count += 1

report_lines.append(f"\n**Total Heavy Images (>200KB)**: {heavy_count}\n")

# Check broken references in products.ts and gallery.ts
with open(os.path.join(root_dir, 'src/data/products.ts'), 'r', encoding='utf-8') as f:
    products_code = f.read()

with open(os.path.join(root_dir, 'src/data/gallery.ts'), 'r', encoding='utf-8') as f:
    gallery_code = f.read()

img_regex = re.compile(r'/images/[^\s\'"`,\}\]]+')
all_refs = set(img_regex.findall(products_code) + img_regex.findall(gallery_code))

existing_set = set(x['rel'] for x in images_data)

missing_refs = []
for ref in all_refs:
    if ref not in existing_set:
        missing_refs.append(ref)

report_lines.append("## Missing / Broken Image References\n")
if missing_refs:
    report_lines.append(f"Found {len(missing_refs)} missing image references in data files:\n")
    for m in missing_refs:
        report_lines.append(f"- ❌ `{m}`")
else:
    report_lines.append("✅ All 100+ referenced images exist on disk!")

with open(os.path.join(root_dir, 'media_report.md'), 'w', encoding='utf-8') as f:
    f.write('\n'.join(report_lines))

print("MEDIA_REPORT_GENERATED")
