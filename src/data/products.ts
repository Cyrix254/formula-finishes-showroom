// AUTO-GENERATED from the client Google Drive catalogue. Safe to edit by hand.
export type ProductCategoryId =

  "wallpapers" | 
  "contact-papers" | 
  "murals" | 
  "window-blinds" | 
  "window-films" | 
  "carpets" | 
  "wall-panels";

export type Product = {
  id: string;
  name: string;
  category: ProductCategoryId;
  collection: string;
  image: string;
  description: string;
};

export type ProductCategory = {
  id: ProductCategoryId;
  label: string;
  description: string;
};

export const productCategories: ProductCategory[] = [
  {
    "id": "wallpapers",
    "label": "Wallpapers",
    "description": "1-metre rolls, 3D embossed, damask, marble, brick and plain wallpapers."
  },
  {
    "id": "contact-papers",
    "label": "Contact Papers",
    "description": "Self-adhesive marble, wood and textured papers for cabinets, doors and furniture."
  },
  {
    "id": "murals",
    "label": "Wall Murals",
    "description": "Custom-printed murals sized to your wall \u2014 art, landscapes, kids, maps and more."
  },
  {
    "id": "window-blinds",
    "label": "Window Blinds",
    "description": "Sheer roller, single roller and vertical blinds cut to your window."
  },
  {
    "id": "window-films",
    "label": "Window Films",
    "description": "Privacy, frosted, tinted and decorative films for glass."
  },
  {
    "id": "carpets",
    "label": "Carpets & Flooring",
    "description": "Wall-to-wall carpets, carpet tiles, vinyl, SPC flooring and grass turf."
  },
  {
    "id": "wall-panels",
    "label": "Wall Panels",
    "description": "Fluted WPC panels, concave profiles, box designs and PU stone cladding."
  }
];

export const collections: { category: ProductCategoryId; label: string }[] = [
  {
    "category": "carpets",
    "label": "Artificial grass turf"
  },
  {
    "category": "carpets",
    "label": "Wall-to-wall carpets"
  },
  {
    "category": "contact-papers",
    "label": "Contact papers"
  },
  {
    "category": "murals",
    "label": "Art, lines & patterns"
  },
  {
    "category": "murals",
    "label": "Broken wall 3D"
  },
  {
    "category": "murals",
    "label": "Cityscapes"
  },
  {
    "category": "murals",
    "label": "Clouds & universe"
  },
  {
    "category": "murals",
    "label": "Kids"
  },
  {
    "category": "murals",
    "label": "Landscapes & seascapes"
  },
  {
    "category": "murals",
    "label": "Maps"
  },
  {
    "category": "murals",
    "label": "Waterfalls"
  },
  {
    "category": "murals",
    "label": "Wildlife"
  },
  {
    "category": "wallpapers",
    "label": "Wallpaper rolls"
  },
  {
    "category": "window-blinds",
    "label": "Window blinds"
  },
  {
    "category": "window-films",
    "label": "Window films"
  }
];

export const products: Product[] = [
  {
    "id": "WP-001",
    "name": "Wallpaper rolls WP-001",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-0956.jpg",
    "description": "Textured wallpaper roll, 1m width. Supplied and installed."
  },
  {
    "id": "WP-002",
    "name": "Wallpaper rolls WP-002",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-0957.jpg",
    "description": "Textured wallpaper roll, 1m width. Supplied and installed."
  },
  {
    "id": "WP-003",
    "name": "Wallpaper rolls WP-003",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-0958.jpg",
    "description": "Textured wallpaper roll, 1m width. Supplied and installed."
  },
  {
    "id": "WP-004",
    "name": "Wallpaper rolls WP-004",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-0959.jpg",
    "description": "Textured wallpaper roll, 1m width. Supplied and installed."
  },
  {
    "id": "WP-005",
    "name": "Wallpaper rolls WP-005",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-0963.jpg",
    "description": "Textured wallpaper roll, 1m width. Supplied and installed."
  },
  {
    "id": "WP-006",
    "name": "Wallpaper rolls WP-006",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-0967.jpg",
    "description": "Textured wallpaper roll, 1m width. Supplied and installed."
  },
  {
    "id": "WP-007",
    "name": "Wallpaper rolls WP-007",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-0968.jpg",
    "description": "Textured wallpaper roll, 1m width. Supplied and installed."
  },
  {
    "id": "WP-008",
    "name": "Wallpaper rolls WP-008",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-0970.jpg",
    "description": "Textured wallpaper roll, 1m width. Supplied and installed."
  },
  {
    "id": "WP-009",
    "name": "Wallpaper rolls WP-009",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-0978.jpg",
    "description": "Textured wallpaper roll, 1m width. Supplied and installed."
  },
  {
    "id": "WP-010",
    "name": "Wallpaper rolls WP-010",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-0979.jpg",
    "description": "Textured wallpaper roll, 1m width. Supplied and installed."
  },
  {
    "id": "WP-011",
    "name": "Wallpaper rolls WP-011",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-0982.jpg",
    "description": "Textured wallpaper roll, 1m width. Supplied and installed."
  },
  {
    "id": "WP-012",
    "name": "Wallpaper rolls WP-012",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-0987.jpg",
    "description": "Textured wallpaper roll, 1m width. Supplied and installed."
  },
  {
    "id": "WP-013",
    "name": "Wallpaper rolls WP-013",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-0988.jpg",
    "description": "Textured wallpaper roll, 1m width. Supplied and installed."
  },
  {
    "id": "WP-014",
    "name": "Wallpaper rolls WP-014",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-0991.jpg",
    "description": "Textured wallpaper roll, 1m width. Supplied and installed."
  },
  {
    "id": "WP-015",
    "name": "Wallpaper rolls WP-015",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-1007.jpg",
    "description": "Textured wallpaper roll, 1m width. Supplied and installed."
  },
  {
    "id": "WP-016",
    "name": "Wallpaper rolls WP-016",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-1008.jpg",
    "description": "Textured wallpaper roll, 1m width. Supplied and installed."
  },
  {
    "id": "WP-017",
    "name": "Wallpaper rolls WP-017",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-1010.jpg",
    "description": "Textured wallpaper roll, 1m width. Supplied and installed."
  },
  {
    "id": "WP-018",
    "name": "Wallpaper rolls WP-018",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-1016.jpg",
    "description": "Textured wallpaper roll, 1m width. Supplied and installed."
  },
  {
    "id": "WP-019",
    "name": "Wallpaper rolls WP-019",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-1017.jpg",
    "description": "Textured wallpaper roll, 1m width. Supplied and installed."
  },
  {
    "id": "WP-020",
    "name": "Wallpaper rolls WP-020",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-1018.jpg",
    "description": "Textured wallpaper roll, 1m width. Supplied and installed."
  },
  {
    "id": "WP-021",
    "name": "Wallpaper rolls WP-021",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-1022.jpg",
    "description": "Textured wallpaper roll, 1m width. Supplied and installed."
  },
  {
    "id": "WP-022",
    "name": "Wallpaper rolls WP-022",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-1025.jpg",
    "description": "Textured wallpaper roll, 1m width. Supplied and installed."
  },
  {
    "id": "WP-023",
    "name": "Wallpaper rolls WP-023",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-1028.jpg",
    "description": "Textured wallpaper roll, 1m width. Supplied and installed."
  },
  {
    "id": "WP-024",
    "name": "Wallpaper rolls WP-024",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-1031.jpg",
    "description": "Textured wallpaper roll, 1m width. Supplied and installed."
  },
  {
    "id": "WP-025",
    "name": "Wallpaper rolls WP-025",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/whatsapp-image-2026-06-29-at-12-01-33-1.jpg",
    "description": "Textured wallpaper roll, 1m width. Supplied and installed."
  },
  {
    "id": "WP-026",
    "name": "Wallpaper rolls WP-026",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/whatsapp-image-2026-06-30-at-09-22-49.jpg",
    "description": "Textured wallpaper roll, 1m width. Supplied and installed."
  },
  {
    "id": "WP-027",
    "name": "Wallpaper rolls WP-027",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/whatsapp-image-2026-07-11-at-15-01-06.jpg",
    "description": "Textured wallpaper roll, 1m width. Supplied and installed."
  },
  {
    "id": "WP-028",
    "name": "Wallpaper rolls WP-028",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/whatsapp-image-2026-07-11-at-15-01-08.jpg",
    "description": "Textured wallpaper roll, 1m width. Supplied and installed."
  },
  {
    "id": "CP-001",
    "name": "Contact papers CP-001",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/0a409a39-a68d-45dd-b12e-a6aaf7233298.jpg",
    "description": "Self-adhesive contact paper. Wipe-clean, easy to reposition."
  },
  {
    "id": "CP-002",
    "name": "Contact papers CP-002",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/71-lsgpctel-ac-uf894-1000-ql80-fmwebp.jpg",
    "description": "Self-adhesive contact paper. Wipe-clean, easy to reposition."
  },
  {
    "id": "CP-003",
    "name": "Contact papers CP-003",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/71bybimykgl-ac-uf894-1000-ql80-fmwebp.jpg",
    "description": "Self-adhesive contact paper. Wipe-clean, easy to reposition."
  },
  {
    "id": "CP-004",
    "name": "Contact papers CP-004",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/71cu1wabekl-ac-uf894-1000-ql80-fmwebp.jpg",
    "description": "Self-adhesive contact paper. Wipe-clean, easy to reposition."
  },
  {
    "id": "CP-005",
    "name": "Contact papers CP-005",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/71jmarbzqsl-ac-uf894-1000-ql80-fmwebp.jpg",
    "description": "Self-adhesive contact paper. Wipe-clean, easy to reposition."
  },
  {
    "id": "CP-006",
    "name": "Contact papers CP-006",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/71x8j9ldhpl-ac-uf894-1000-ql80-fmwebp.jpg",
    "description": "Self-adhesive contact paper. Wipe-clean, easy to reposition."
  },
  {
    "id": "CP-007",
    "name": "Contact papers CP-007",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/81anj6thvml-ac-uf894-1000-ql80-fmwebp.jpg",
    "description": "Self-adhesive contact paper. Wipe-clean, easy to reposition."
  },
  {
    "id": "CP-008",
    "name": "Contact papers CP-008",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/81khwlnvdtl-ac-uf894-1000-ql80-fmwebp.jpg",
    "description": "Self-adhesive contact paper. Wipe-clean, easy to reposition."
  },
  {
    "id": "CP-009",
    "name": "Contact papers CP-009",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/619h9x3xbwl-ac-uf894-1000-ql80-fmwebp.jpg",
    "description": "Self-adhesive contact paper. Wipe-clean, easy to reposition."
  },
  {
    "id": "CP-010",
    "name": "Contact papers CP-010",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/711sueviwml-ac-uf894-1000-ql80-fmwebp.jpg",
    "description": "Self-adhesive contact paper. Wipe-clean, easy to reposition."
  },
  {
    "id": "CP-011",
    "name": "Contact papers CP-011",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/d6687c76-6957-4325-97a7-6dcc9370329f.jpg",
    "description": "Self-adhesive contact paper. Wipe-clean, easy to reposition."
  },
  {
    "id": "CP-012",
    "name": "Contact papers CP-012",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/e71e0c16-f17e-496d-af60-ab3d84569269.jpg",
    "description": "Self-adhesive contact paper. Wipe-clean, easy to reposition."
  },
  {
    "id": "CP-013",
    "name": "Contact papers CP-013",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/img-20250123-194928-0515.jpg",
    "description": "Self-adhesive contact paper. Wipe-clean, easy to reposition."
  },
  {
    "id": "CP-014",
    "name": "Contact papers CP-014",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/img-20240525-wa0001.jpg",
    "description": "Self-adhesive contact paper. Wipe-clean, easy to reposition."
  },
  {
    "id": "CP-015",
    "name": "Contact papers CP-015",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/img-20250220-wa0017.jpg",
    "description": "Self-adhesive contact paper. Wipe-clean, easy to reposition."
  },
  {
    "id": "CP-016",
    "name": "Contact papers CP-016",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/img-20250221-wa0039.jpg",
    "description": "Self-adhesive contact paper. Wipe-clean, easy to reposition."
  },
  {
    "id": "CP-017",
    "name": "Contact papers CP-017",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/mmexport1734180900180.jpg",
    "description": "Self-adhesive contact paper. Wipe-clean, easy to reposition."
  },
  {
    "id": "CP-018",
    "name": "Contact papers CP-018",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/mmexport1741702068216.jpg",
    "description": "Self-adhesive contact paper. Wipe-clean, easy to reposition."
  },
  {
    "id": "CP-019",
    "name": "Contact papers CP-019",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/mmexport1751371510911.jpg",
    "description": "Self-adhesive contact paper. Wipe-clean, easy to reposition."
  },
  {
    "id": "CP-020",
    "name": "Contact papers CP-020",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/mmexport1751371513211.jpg",
    "description": "Self-adhesive contact paper. Wipe-clean, easy to reposition."
  },
  {
    "id": "CF-001",
    "name": "Artificial grass turf CF-001",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/30mm-grass-2.jpg",
    "description": "Supplied by the roll or tile and fitted wall-to-wall."
  },
  {
    "id": "CF-002",
    "name": "Artificial grass turf CF-002",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/30mm-grass-3.jpg",
    "description": "Supplied by the roll or tile and fitted wall-to-wall."
  },
  {
    "id": "CF-003",
    "name": "Artificial grass turf CF-003",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/40mm-grass-1.jpg",
    "description": "Supplied by the roll or tile and fitted wall-to-wall."
  },
  {
    "id": "CF-004",
    "name": "Artificial grass turf CF-004",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/40mm-grass-2.jpg",
    "description": "Supplied by the roll or tile and fitted wall-to-wall."
  },
  {
    "id": "CF-005",
    "name": "Artificial grass turf CF-005",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/artificial-grass-1.jpg",
    "description": "Supplied by the roll or tile and fitted wall-to-wall."
  },
  {
    "id": "CF-006",
    "name": "Artificial grass turf CF-006",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/artificial-grass-2.jpg",
    "description": "Supplied by the roll or tile and fitted wall-to-wall."
  },
  {
    "id": "CF-007",
    "name": "Artificial grass turf CF-007",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/artificial-grass-3.jpg",
    "description": "Supplied by the roll or tile and fitted wall-to-wall."
  },
  {
    "id": "CF-008",
    "name": "Artificial grass turf CF-008",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/artificial-grass-6.jpg",
    "description": "Supplied by the roll or tile and fitted wall-to-wall."
  },
  {
    "id": "CF-009",
    "name": "Artificial grass turf CF-009",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/artificial-grass-7.jpg",
    "description": "Supplied by the roll or tile and fitted wall-to-wall."
  },
  {
    "id": "CF-010",
    "name": "Artificial grass turf CF-010",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/artificial-grass-9.jpg",
    "description": "Supplied by the roll or tile and fitted wall-to-wall."
  },
  {
    "id": "CF-011",
    "name": "Artificial grass turf CF-011",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/artificial-grass-10.jpg",
    "description": "Supplied by the roll or tile and fitted wall-to-wall."
  },
  {
    "id": "CF-012",
    "name": "Artificial grass turf CF-012",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/artificial-grass-11.jpg",
    "description": "Supplied by the roll or tile and fitted wall-to-wall."
  },
  {
    "id": "CF-013",
    "name": "Artificial grass turf CF-013",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/factory-material-pp.jpg",
    "description": "Supplied by the roll or tile and fitted wall-to-wall."
  },
  {
    "id": "CF-014",
    "name": "Artificial grass turf CF-014",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/grass-backer.jpg",
    "description": "Supplied by the roll or tile and fitted wall-to-wall."
  },
  {
    "id": "CF-015",
    "name": "Artificial grass turf CF-015",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/grass-roll-1.jpg",
    "description": "Supplied by the roll or tile and fitted wall-to-wall."
  },
  {
    "id": "CF-016",
    "name": "Artificial grass turf CF-016",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/grass-roll-2.jpg",
    "description": "Supplied by the roll or tile and fitted wall-to-wall."
  },
  {
    "id": "CF-017",
    "name": "Artificial grass turf CF-017",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/img-0754.jpg",
    "description": "Supplied by the roll or tile and fitted wall-to-wall."
  },
  {
    "id": "CF-018",
    "name": "Artificial grass turf CF-018",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/img-0760.jpg",
    "description": "Supplied by the roll or tile and fitted wall-to-wall."
  },
  {
    "id": "CF-019",
    "name": "Wall-to-wall carpets CF-019",
    "category": "carpets",
    "collection": "Wall-to-wall carpets",
    "image": "/images/carpets/mmexport1750486440229.jpg",
    "description": "Supplied by the roll or tile and fitted wall-to-wall."
  },
  {
    "id": "CF-020",
    "name": "Wall-to-wall carpets CF-020",
    "category": "carpets",
    "collection": "Wall-to-wall carpets",
    "image": "/images/carpets/mmexport1750486441687.jpg",
    "description": "Supplied by the roll or tile and fitted wall-to-wall."
  },
  {
    "id": "CF-021",
    "name": "Wall-to-wall carpets CF-021",
    "category": "carpets",
    "collection": "Wall-to-wall carpets",
    "image": "/images/carpets/mmexport1750486444587.jpg",
    "description": "Supplied by the roll or tile and fitted wall-to-wall."
  },
  {
    "id": "WB-001",
    "name": "Window blinds WB-001",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/1-1.jpg",
    "description": "Made-to-measure blind, fitted to your window opening."
  },
  {
    "id": "WB-002",
    "name": "Window blinds WB-002",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/3.jpg",
    "description": "Made-to-measure blind, fitted to your window opening."
  },
  {
    "id": "WB-003",
    "name": "Window blinds WB-003",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/4.jpg",
    "description": "Made-to-measure blind, fitted to your window opening."
  },
  {
    "id": "WB-004",
    "name": "Window blinds WB-004",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/5.jpg",
    "description": "Made-to-measure blind, fitted to your window opening."
  },
  {
    "id": "WB-005",
    "name": "Window blinds WB-005",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/6.jpg",
    "description": "Made-to-measure blind, fitted to your window opening."
  },
  {
    "id": "WB-006",
    "name": "Window blinds WB-006",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/7.jpg",
    "description": "Made-to-measure blind, fitted to your window opening."
  },
  {
    "id": "WB-007",
    "name": "Window blinds WB-007",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/8.jpg",
    "description": "Made-to-measure blind, fitted to your window opening."
  },
  {
    "id": "WB-008",
    "name": "Window blinds WB-008",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/9.jpg",
    "description": "Made-to-measure blind, fitted to your window opening."
  },
  {
    "id": "WB-009",
    "name": "Window blinds WB-009",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/10.jpg",
    "description": "Made-to-measure blind, fitted to your window opening."
  },
  {
    "id": "WB-010",
    "name": "Window blinds WB-010",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/11.jpg",
    "description": "Made-to-measure blind, fitted to your window opening."
  },
  {
    "id": "WB-011",
    "name": "Window blinds WB-011",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/12.jpg",
    "description": "Made-to-measure blind, fitted to your window opening."
  },
  {
    "id": "WB-012",
    "name": "Window blinds WB-012",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/13.jpg",
    "description": "Made-to-measure blind, fitted to your window opening."
  },
  {
    "id": "WB-013",
    "name": "Window blinds WB-013",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/14.jpg",
    "description": "Made-to-measure blind, fitted to your window opening."
  },
  {
    "id": "WB-014",
    "name": "Window blinds WB-014",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/15.jpg",
    "description": "Made-to-measure blind, fitted to your window opening."
  },
  {
    "id": "WB-015",
    "name": "Window blinds WB-015",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/18.jpg",
    "description": "Made-to-measure blind, fitted to your window opening."
  },
  {
    "id": "WB-016",
    "name": "Window blinds WB-016",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/19.jpg",
    "description": "Made-to-measure blind, fitted to your window opening."
  },
  {
    "id": "WB-017",
    "name": "Window blinds WB-017",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/21.jpg",
    "description": "Made-to-measure blind, fitted to your window opening."
  },
  {
    "id": "WB-018",
    "name": "Window blinds WB-018",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/22.jpg",
    "description": "Made-to-measure blind, fitted to your window opening."
  },
  {
    "id": "WB-019",
    "name": "Window blinds WB-019",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/25.jpg",
    "description": "Made-to-measure blind, fitted to your window opening."
  },
  {
    "id": "WB-020",
    "name": "Window blinds WB-020",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/26.jpg",
    "description": "Made-to-measure blind, fitted to your window opening."
  },
  {
    "id": "WB-021",
    "name": "Window blinds WB-021",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/27.jpg",
    "description": "Made-to-measure blind, fitted to your window opening."
  },
  {
    "id": "WB-022",
    "name": "Window blinds WB-022",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/28.jpg",
    "description": "Made-to-measure blind, fitted to your window opening."
  },
  {
    "id": "WF-001",
    "name": "Window films WF-001",
    "category": "window-films",
    "collection": "Window films",
    "image": "/images/window-films/img-0155.jpg",
    "description": "Adhesive window film applied to glass for privacy or effect."
  },
  {
    "id": "WF-002",
    "name": "Window films WF-002",
    "category": "window-films",
    "collection": "Window films",
    "image": "/images/window-films/img-5579.jpg",
    "description": "Adhesive window film applied to glass for privacy or effect."
  },
  {
    "id": "WF-003",
    "name": "Window films WF-003",
    "category": "window-films",
    "collection": "Window films",
    "image": "/images/window-films/img-5584.jpg",
    "description": "Adhesive window film applied to glass for privacy or effect."
  },
  {
    "id": "WF-004",
    "name": "Window films WF-004",
    "category": "window-films",
    "collection": "Window films",
    "image": "/images/window-films/img-6079.jpg",
    "description": "Adhesive window film applied to glass for privacy or effect."
  },
  {
    "id": "WF-005",
    "name": "Window films WF-005",
    "category": "window-films",
    "collection": "Window films",
    "image": "/images/window-films/img-6621.jpg",
    "description": "Adhesive window film applied to glass for privacy or effect."
  },
  {
    "id": "MU-001",
    "name": "Art, lines & patterns MU-001",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-121942.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-002",
    "name": "Art, lines & patterns MU-002",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122013.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-003",
    "name": "Art, lines & patterns MU-003",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122038.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-004",
    "name": "Art, lines & patterns MU-004",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122127.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-005",
    "name": "Art, lines & patterns MU-005",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122141.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-006",
    "name": "Art, lines & patterns MU-006",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122200.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-007",
    "name": "Art, lines & patterns MU-007",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122213.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-008",
    "name": "Art, lines & patterns MU-008",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122302.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-009",
    "name": "Art, lines & patterns MU-009",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122319.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-010",
    "name": "Art, lines & patterns MU-010",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122342.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-011",
    "name": "Art, lines & patterns MU-011",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122419.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-012",
    "name": "Art, lines & patterns MU-012",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122444.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-013",
    "name": "Art, lines & patterns MU-013",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122506.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-014",
    "name": "Art, lines & patterns MU-014",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122522.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-015",
    "name": "Broken wall 3D MU-015",
    "category": "murals",
    "collection": "Broken wall 3D",
    "image": "/images/murals-broken-wall/screenshot-2025-04-07-111248.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-016",
    "name": "Broken wall 3D MU-016",
    "category": "murals",
    "collection": "Broken wall 3D",
    "image": "/images/murals-broken-wall/screenshot-2025-04-07-111353.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-017",
    "name": "Broken wall 3D MU-017",
    "category": "murals",
    "collection": "Broken wall 3D",
    "image": "/images/murals-broken-wall/screenshot-2025-04-07-111439.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-018",
    "name": "Broken wall 3D MU-018",
    "category": "murals",
    "collection": "Broken wall 3D",
    "image": "/images/murals-broken-wall/screenshot-2025-04-07-111439s.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-019",
    "name": "Broken wall 3D MU-019",
    "category": "murals",
    "collection": "Broken wall 3D",
    "image": "/images/murals-broken-wall/screenshot-2025-04-07-111511.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-020",
    "name": "Broken wall 3D MU-020",
    "category": "murals",
    "collection": "Broken wall 3D",
    "image": "/images/murals-broken-wall/screenshot-2025-04-07-111525.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-021",
    "name": "Broken wall 3D MU-021",
    "category": "murals",
    "collection": "Broken wall 3D",
    "image": "/images/murals-broken-wall/screenshot-2025-04-07-111545.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-022",
    "name": "Broken wall 3D MU-022",
    "category": "murals",
    "collection": "Broken wall 3D",
    "image": "/images/murals-broken-wall/screenshot-2025-04-07-111601.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-023",
    "name": "Broken wall 3D MU-023",
    "category": "murals",
    "collection": "Broken wall 3D",
    "image": "/images/murals-broken-wall/screenshot-2025-04-07-111616.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-024",
    "name": "Broken wall 3D MU-024",
    "category": "murals",
    "collection": "Broken wall 3D",
    "image": "/images/murals-broken-wall/screenshot-2025-04-07-111631.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-025",
    "name": "Cityscapes MU-025",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-113701.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-026",
    "name": "Cityscapes MU-026",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-120009.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-027",
    "name": "Cityscapes MU-027",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-120826.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-028",
    "name": "Cityscapes MU-028",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-120839.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-029",
    "name": "Cityscapes MU-029",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-120916.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-030",
    "name": "Cityscapes MU-030",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-120930.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-031",
    "name": "Cityscapes MU-031",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-120943.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-032",
    "name": "Cityscapes MU-032",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-120957.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-033",
    "name": "Cityscapes MU-033",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-121015.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-034",
    "name": "Cityscapes MU-034",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-121033.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-035",
    "name": "Cityscapes MU-035",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-121047.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-036",
    "name": "Cityscapes MU-036",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-121110.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-037",
    "name": "Clouds & universe MU-037",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124627.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-038",
    "name": "Clouds & universe MU-038",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124659.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-039",
    "name": "Clouds & universe MU-039",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124713.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-040",
    "name": "Clouds & universe MU-040",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124728.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-041",
    "name": "Clouds & universe MU-041",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124743.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-042",
    "name": "Clouds & universe MU-042",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124756.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-043",
    "name": "Clouds & universe MU-043",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124812.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-044",
    "name": "Clouds & universe MU-044",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124826.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-045",
    "name": "Clouds & universe MU-045",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124840.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-046",
    "name": "Clouds & universe MU-046",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124932.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-047",
    "name": "Clouds & universe MU-047",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124946.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-048",
    "name": "Clouds & universe MU-048",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-125000.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-049",
    "name": "Kids MU-049",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-104706.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-050",
    "name": "Kids MU-050",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-104706s.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-051",
    "name": "Kids MU-051",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-104732.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-052",
    "name": "Kids MU-052",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-104809.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-053",
    "name": "Kids MU-053",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-104825.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-054",
    "name": "Kids MU-054",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-104840.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-055",
    "name": "Kids MU-055",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-104854.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-056",
    "name": "Kids MU-056",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-104918.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-057",
    "name": "Kids MU-057",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-104936.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-058",
    "name": "Kids MU-058",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-105314.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-059",
    "name": "Kids MU-059",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-105329.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-060",
    "name": "Kids MU-060",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-105342.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-061",
    "name": "Kids MU-061",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-105355.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-062",
    "name": "Kids MU-062",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-105411.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-063",
    "name": "Landscapes & seascapes MU-063",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-113519.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-064",
    "name": "Landscapes & seascapes MU-064",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-113635.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-065",
    "name": "Landscapes & seascapes MU-065",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-113732.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-066",
    "name": "Landscapes & seascapes MU-066",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-113754.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-067",
    "name": "Landscapes & seascapes MU-067",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-113850.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-068",
    "name": "Landscapes & seascapes MU-068",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-113907.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-069",
    "name": "Landscapes & seascapes MU-069",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114000.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-070",
    "name": "Landscapes & seascapes MU-070",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114019.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-071",
    "name": "Landscapes & seascapes MU-071",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114033.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-072",
    "name": "Landscapes & seascapes MU-072",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114053.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-073",
    "name": "Landscapes & seascapes MU-073",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114108.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-074",
    "name": "Landscapes & seascapes MU-074",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114128.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-075",
    "name": "Landscapes & seascapes MU-075",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114151.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-076",
    "name": "Landscapes & seascapes MU-076",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114226.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-077",
    "name": "Landscapes & seascapes MU-077",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114242.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-078",
    "name": "Landscapes & seascapes MU-078",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114306.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-079",
    "name": "Maps MU-079",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-123853.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-080",
    "name": "Maps MU-080",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-123933.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-081",
    "name": "Maps MU-081",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-123953.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-082",
    "name": "Maps MU-082",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-124012.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-083",
    "name": "Maps MU-083",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-124026.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-084",
    "name": "Maps MU-084",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-124042.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-085",
    "name": "Maps MU-085",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-124057.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-086",
    "name": "Maps MU-086",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-124110.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-087",
    "name": "Maps MU-087",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-124124.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-088",
    "name": "Maps MU-088",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-124139.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-089",
    "name": "Waterfalls MU-089",
    "category": "murals",
    "collection": "Waterfalls",
    "image": "/images/murals-waterfalls/screenshot-2025-04-07-114419.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-090",
    "name": "Waterfalls MU-090",
    "category": "murals",
    "collection": "Waterfalls",
    "image": "/images/murals-waterfalls/screenshot-2025-04-07-114442.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-091",
    "name": "Waterfalls MU-091",
    "category": "murals",
    "collection": "Waterfalls",
    "image": "/images/murals-waterfalls/screenshot-2025-04-07-114458.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-092",
    "name": "Waterfalls MU-092",
    "category": "murals",
    "collection": "Waterfalls",
    "image": "/images/murals-waterfalls/screenshot-2025-04-07-114717.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-093",
    "name": "Waterfalls MU-093",
    "category": "murals",
    "collection": "Waterfalls",
    "image": "/images/murals-waterfalls/screenshot-2025-04-07-115348.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-094",
    "name": "Waterfalls MU-094",
    "category": "murals",
    "collection": "Waterfalls",
    "image": "/images/murals-waterfalls/screenshot-2025-04-07-115441.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-095",
    "name": "Wildlife MU-095",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/633d420b-ccda-4848-9533-afdaab8107be.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-096",
    "name": "Wildlife MU-096",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112257.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-097",
    "name": "Wildlife MU-097",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112327.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-098",
    "name": "Wildlife MU-098",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112341.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-099",
    "name": "Wildlife MU-099",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112400.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-100",
    "name": "Wildlife MU-100",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112415.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-101",
    "name": "Wildlife MU-101",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112430.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-102",
    "name": "Wildlife MU-102",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112503.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-103",
    "name": "Wildlife MU-103",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112518.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-104",
    "name": "Wildlife MU-104",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112532.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-105",
    "name": "Wildlife MU-105",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112552.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  },
  {
    "id": "MU-106",
    "name": "Wildlife MU-106",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112812.jpg",
    "description": "Custom-printed wall mural, produced to your exact wall size."
  }
];

export const featuredProducts: Product[] = products.filter((_, i) => i % 11 === 0).slice(0, 8);
