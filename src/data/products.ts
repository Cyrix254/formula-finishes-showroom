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
  { "category": "wall-panels", "label": "Fluted WPC panels" },
  { "category": "wall-panels", "label": "PU stone panels" },
  { "category": "wall-panels", "label": "Box & concave designs" },
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
    "id": "WPN-001",
    "name": "Fluted panels WPN-001",
    "category": "wall-panels",
    "collection": "Fluted WPC panels",
    "image": "/images/wall-panels/fluted-oak-panel.jpg",
    "description": "Vertical fluted WPC panel, cut to height and mounted on feature walls."
  },
  {
    "id": "WPN-002",
    "name": "PU stone cladding WPN-002",
    "category": "wall-panels",
    "collection": "PU stone panels",
    "image": "/images/wall-panels/pu-stone-panel.jpg",
    "description": "Lightweight PU faux-stone cladding for interior and exterior feature walls."
  },
  {
    "id": "WPN-003",
    "name": "Box design panels WPN-003",
    "category": "wall-panels",
    "collection": "Box & concave designs",
    "image": "/images/wall-panels/concave-box-panel.jpg",
    "description": "Concave and box-profile panels for reception and lobby walls."
  },

  {
    "id": "WP-001",
    "name": "Suede-look plain roll",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-0956.jpg",
    "description": "Warm beige suede-effect roll with a soft mottled matte finish — a calm backdrop for living rooms and bedrooms."
  },
  {
    "id": "WP-002",
    "name": "Silver grasscloth stripe",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-0963.jpg",
    "description": "Silver-grey roll with a vertical grasscloth weave that catches light along the wall."
  },
  {
    "id": "WP-003",
    "name": "Ivory smooth plain",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-0978.jpg",
    "description": "Clean ivory roll with a barely-there sheen — the safe choice when the furniture is doing the talking."
  },
  {
    "id": "WP-004",
    "name": "Blush linen texture",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-0987.jpg",
    "description": "Blush-beige roll with a fine linen weave that softens bedroom and nursery walls."
  },
  {
    "id": "WP-005",
    "name": "Warm grey linen weave",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-1007.jpg",
    "description": "Warm grey woven texture that hides small wall imperfections and reads beautifully in daylight."
  },
  {
    "id": "WP-006",
    "name": "Pale rose striated",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-1016.jpg",
    "description": "Pale rose-beige roll with a subtle vertical striation for a gentle, tone-on-tone finish."
  },
  {
    "id": "WP-007",
    "name": "Stone-grey plain roll",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-1025.jpg",
    "description": "Cool grey mottled roll with a fine stone-like grain — pairs well with dark timber and matt black fittings."
  },
  {
    "id": "WP-008",
    "name": "Cream textured trio",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/whatsapp-image-2026-06-29-at-12-01-33-1.jpg",
    "description": "Three cream and pearl textured rolls from current stock — bring a sample home before you commit."
  },
  {
    "id": "WP-009",
    "name": "Colour range selection",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/whatsapp-image-2026-07-11-at-15-01-06.jpg",
    "description": "Part of our colour range: terracotta, mint, mustard, plum, sand and pearl textured rolls."
  },
  {
    "id": "CP-001",
    "name": "Contact papers CP-001",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/0a409a39-a68d-45dd-b12e-a6aaf7233298.jpg",
    "description": "Self-adhesive marble film for counters and cabinet doors — wipe clean, no demolition."
  },
  {
    "id": "CP-002",
    "name": "Contact papers CP-002",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/71-lsgpctel-ac-uf894-1000-ql80-fmwebp.jpg",
    "description": "Wood-grain adhesive paper to refresh tired doors and wardrobes in an afternoon."
  },
  {
    "id": "CP-003",
    "name": "Contact papers CP-003",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/71bybimykgl-ac-uf894-1000-ql80-fmwebp.jpg",
    "description": "Matte solid colour that hides fingerprints on kitchen cupboards."
  },
  {
    "id": "CP-004",
    "name": "Contact papers CP-004",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/71cu1wabekl-ac-uf894-1000-ql80-fmwebp.jpg",
    "description": "Glossy finish that bounces light around small kitchens and bathrooms."
  },
  {
    "id": "CP-005",
    "name": "Contact papers CP-005",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/71jmarbzqsl-ac-uf894-1000-ql80-fmwebp.jpg",
    "description": "Textured embossed film that feels closer to real stone than a flat print."
  },
  {
    "id": "CP-006",
    "name": "Contact papers CP-006",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/71x8j9ldhpl-ac-uf894-1000-ql80-fmwebp.jpg",
    "description": "Repositionable while fitting, so corners and edges come out crisp."
  },
  {
    "id": "CP-007",
    "name": "Contact papers CP-007",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/81anj6thvml-ac-uf894-1000-ql80-fmwebp.jpg",
    "description": "Water-resistant surface suited to splash zones behind sinks."
  },
  {
    "id": "CP-008",
    "name": "Contact papers CP-008",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/81khwlnvdtl-ac-uf894-1000-ql80-fmwebp.jpg",
    "description": "Great for refacing shelving, side tables and drawer fronts on a budget."
  },
  {
    "id": "CP-009",
    "name": "Contact papers CP-009",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/619h9x3xbwl-ac-uf894-1000-ql80-fmwebp.jpg",
    "description": "Heat-tolerant film for cabinet fronts near cooking areas."
  },
  {
    "id": "CP-010",
    "name": "Contact papers CP-010",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/711sueviwml-ac-uf894-1000-ql80-fmwebp.jpg",
    "description": "Neutral stone print that works with almost any worktop colour."
  },
  {
    "id": "CP-011",
    "name": "Contact papers CP-011",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/d6687c76-6957-4325-97a7-6dcc9370329f.jpg",
    "description": "Self-adhesive marble film for counters and cabinet doors — wipe clean, no demolition."
  },
  {
    "id": "CP-012",
    "name": "Contact papers CP-012",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/e71e0c16-f17e-496d-af60-ab3d84569269.jpg",
    "description": "Wood-grain adhesive paper to refresh tired doors and wardrobes in an afternoon."
  },
  {
    "id": "CP-013",
    "name": "Contact papers CP-013",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/img-20250123-194928-0515.jpg",
    "description": "Matte solid colour that hides fingerprints on kitchen cupboards."
  },
  {
    "id": "CP-014",
    "name": "Contact papers CP-014",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/img-20240525-wa0001.jpg",
    "description": "Glossy finish that bounces light around small kitchens and bathrooms."
  },
  {
    "id": "CP-015",
    "name": "Contact papers CP-015",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/img-20250220-wa0017.jpg",
    "description": "Textured embossed film that feels closer to real stone than a flat print."
  },
  {
    "id": "CP-016",
    "name": "Contact papers CP-016",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/img-20250221-wa0039.jpg",
    "description": "Repositionable while fitting, so corners and edges come out crisp."
  },
  {
    "id": "CP-017",
    "name": "Contact papers CP-017",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/mmexport1734180900180.jpg",
    "description": "Water-resistant surface suited to splash zones behind sinks."
  },
  {
    "id": "CP-018",
    "name": "Contact papers CP-018",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/mmexport1741702068216.jpg",
    "description": "Great for refacing shelving, side tables and drawer fronts on a budget."
  },
  {
    "id": "CP-019",
    "name": "Contact papers CP-019",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/mmexport1751371510911.jpg",
    "description": "Heat-tolerant film for cabinet fronts near cooking areas."
  },
  {
    "id": "CP-020",
    "name": "Contact papers CP-020",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/mmexport1751371513211.jpg",
    "description": "Neutral stone print that works with almost any worktop colour."
  },
  {
    "id": "CF-001",
    "name": "Artificial grass turf CF-001",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/30mm-grass-2.jpg",
    "description": "Soft-pile turf that stays green year-round with no watering or mowing."
  },
  {
    "id": "CF-002",
    "name": "Artificial grass turf CF-002",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/30mm-grass-3.jpg",
    "description": "Dense 30mm pile with a natural two-tone blade for a realistic lawn look."
  },
  {
    "id": "CF-003",
    "name": "Artificial grass turf CF-003",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/40mm-grass-1.jpg",
    "description": "Hard-wearing 40mm pile for busy family gardens and play areas."
  },
  {
    "id": "CF-004",
    "name": "Artificial grass turf CF-004",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/40mm-grass-2.jpg",
    "description": "UV-stable fibres that resist fading under strong Nairobi sun."
  },
  {
    "id": "CF-005",
    "name": "Artificial grass turf CF-005",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/artificial-grass-1.jpg",
    "description": "Perforated backing that drains quickly after heavy rain."
  },
  {
    "id": "CF-006",
    "name": "Artificial grass turf CF-006",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/artificial-grass-2.jpg",
    "description": "Great for balconies, rooftops and terraces where soil is not an option."
  },
  {
    "id": "CF-007",
    "name": "Artificial grass turf CF-007",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/artificial-grass-3.jpg",
    "description": "Pet-friendly turf that rinses clean and dries fast."
  },
  {
    "id": "CF-008",
    "name": "Artificial grass turf CF-008",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/artificial-grass-6.jpg",
    "description": "Short pile suited to event spaces, showrooms and display areas."
  },
  {
    "id": "CF-009",
    "name": "Artificial grass turf CF-009",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/artificial-grass-7.jpg",
    "description": "Comfortable underfoot for barefoot poolside and patio edges."
  },
  {
    "id": "CF-010",
    "name": "Artificial grass turf CF-010",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/artificial-grass-9.jpg",
    "description": "Supplied by the roll and trimmed to your exact garden shape."
  },
  {
    "id": "CF-011",
    "name": "Artificial grass turf CF-011",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/artificial-grass-10.jpg",
    "description": "Soft-pile turf that stays green year-round with no watering or mowing."
  },
  {
    "id": "CF-012",
    "name": "Artificial grass turf CF-012",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/artificial-grass-11.jpg",
    "description": "Dense 30mm pile with a natural two-tone blade for a realistic lawn look."
  },
  {
    "id": "CF-013",
    "name": "Artificial grass turf CF-013",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/factory-material-pp.jpg",
    "description": "Hard-wearing 40mm pile for busy family gardens and play areas."
  },
  {
    "id": "CF-014",
    "name": "Artificial grass turf CF-014",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/grass-backer.jpg",
    "description": "UV-stable fibres that resist fading under strong Nairobi sun."
  },
  {
    "id": "CF-015",
    "name": "Artificial grass turf CF-015",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/grass-roll-1.jpg",
    "description": "Perforated backing that drains quickly after heavy rain."
  },
  {
    "id": "CF-016",
    "name": "Artificial grass turf CF-016",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/grass-roll-2.jpg",
    "description": "Great for balconies, rooftops and terraces where soil is not an option."
  },
  {
    "id": "CF-017",
    "name": "Artificial grass turf CF-017",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/img-0754.jpg",
    "description": "Pet-friendly turf that rinses clean and dries fast."
  },
  {
    "id": "CF-018",
    "name": "Artificial grass turf CF-018",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/img-0760.jpg",
    "description": "Short pile suited to event spaces, showrooms and display areas."
  },
  {
    "id": "CF-019",
    "name": "Wall-to-wall carpets CF-019",
    "category": "carpets",
    "collection": "Wall-to-wall carpets",
    "image": "/images/carpets/mmexport1750486440229.jpg",
    "description": "Wall-to-wall carpet fitted edge to edge for a warm, seamless floor."
  },
  {
    "id": "CF-021",
    "name": "Wall-to-wall carpets CF-021",
    "category": "carpets",
    "collection": "Wall-to-wall carpets",
    "image": "/images/carpets/mmexport1750486444587.jpg",
    "description": "Hard-wearing carpet tiles that can be swapped out individually if stained."
  },
  {
    "id": "WB-001",
    "name": "Window blinds WB-001",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/1-1.jpg",
    "description": "Made-to-measure sheer roller that softens harsh afternoon sun."
  },
  {
    "id": "WB-002",
    "name": "Window blinds WB-002",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/3.jpg",
    "description": "Blackout roller for bedrooms and nurseries where sleep comes first."
  },
  {
    "id": "WB-003",
    "name": "Window blinds WB-003",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/4.jpg",
    "description": "Vertical blind that lets you angle light across wide living-room glass."
  },
  {
    "id": "WB-004",
    "name": "Window blinds WB-004",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/5.jpg",
    "description": "Day-and-night double roller — privacy by day, view by evening."
  },
  {
    "id": "WB-005",
    "name": "Window blinds WB-005",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/6.jpg",
    "description": "Slim cassette headrail that sits neatly against modern window frames."
  },
  {
    "id": "WB-006",
    "name": "Window blinds WB-006",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/7.jpg",
    "description": "Moisture-friendly fabric suited to kitchens and bathrooms."
  },
  {
    "id": "WB-007",
    "name": "Window blinds WB-007",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/8.jpg",
    "description": "Office-grade screen fabric that cuts glare on computer screens."
  },
  {
    "id": "WB-008",
    "name": "Window blinds WB-008",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/9.jpg",
    "description": "Chain or spring control, fitted to your preferred side."
  },
  {
    "id": "WB-009",
    "name": "Window blinds WB-009",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/10.jpg",
    "description": "Wide-span solution for sliding doors and balcony openings."
  },
  {
    "id": "WB-010",
    "name": "Window blinds WB-010",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/11.jpg",
    "description": "Textured weave that adds a little warmth to plain window walls."
  },
  {
    "id": "WB-011",
    "name": "Window blinds WB-011",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/12.jpg",
    "description": "Light-filtering fabric for rooms that need brightness without exposure."
  },
  {
    "id": "WB-012",
    "name": "Window blinds WB-012",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/13.jpg",
    "description": "Made-to-measure sheer roller that softens harsh afternoon sun."
  },
  {
    "id": "WB-013",
    "name": "Window blinds WB-013",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/14.jpg",
    "description": "Blackout roller for bedrooms and nurseries where sleep comes first."
  },
  {
    "id": "WB-014",
    "name": "Window blinds WB-014",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/15.jpg",
    "description": "Vertical blind that lets you angle light across wide living-room glass."
  },
  {
    "id": "WB-015",
    "name": "Window blinds WB-015",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/18.jpg",
    "description": "Day-and-night double roller — privacy by day, view by evening."
  },
  {
    "id": "WB-016",
    "name": "Window blinds WB-016",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/19.jpg",
    "description": "Slim cassette headrail that sits neatly against modern window frames."
  },
  {
    "id": "WB-017",
    "name": "Window blinds WB-017",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/21.jpg",
    "description": "Moisture-friendly fabric suited to kitchens and bathrooms."
  },
  {
    "id": "WB-018",
    "name": "Window blinds WB-018",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/22.jpg",
    "description": "Office-grade screen fabric that cuts glare on computer screens."
  },
  {
    "id": "WB-019",
    "name": "Window blinds WB-019",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/25.jpg",
    "description": "Chain or spring control, fitted to your preferred side."
  },
  {
    "id": "WB-020",
    "name": "Window blinds WB-020",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/26.jpg",
    "description": "Wide-span solution for sliding doors and balcony openings."
  },
  {
    "id": "WB-021",
    "name": "Window blinds WB-021",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/27.jpg",
    "description": "Textured weave that adds a little warmth to plain window walls."
  },
  {
    "id": "WB-022",
    "name": "Window blinds WB-022",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/28.jpg",
    "description": "Light-filtering fabric for rooms that need brightness without exposure."
  },
  {
    "id": "WF-001",
    "name": "Window films WF-001",
    "category": "window-films",
    "collection": "Window films",
    "image": "/images/window-films/img-0155.jpg",
    "description": "Frosted privacy film for bathrooms, meeting rooms and glass partitions."
  },
  {
    "id": "WF-002",
    "name": "Window films WF-002",
    "category": "window-films",
    "collection": "Window films",
    "image": "/images/window-films/img-5579.jpg",
    "description": "One-way reflective film that cuts heat and keeps daytime privacy."
  },
  {
    "id": "WF-003",
    "name": "Window films WF-003",
    "category": "window-films",
    "collection": "Window films",
    "image": "/images/window-films/img-5584.jpg",
    "description": "Decorative patterned film that turns plain glass into a design feature."
  },
  {
    "id": "WF-004",
    "name": "Window films WF-004",
    "category": "window-films",
    "collection": "Window films",
    "image": "/images/window-films/img-6079.jpg",
    "description": "Safety film that holds glass together if it is ever knocked or cracked."
  },
  {
    "id": "WF-005",
    "name": "Window films WF-005",
    "category": "window-films",
    "collection": "Window films",
    "image": "/images/window-films/img-6621.jpg",
    "description": "Tinted film that lowers glare and helps keep interiors cooler."
  },
  {
    "id": "MU-001",
    "name": "Art, lines & patterns MU-001",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-121942.jpg",
    "description": "Abstract line art for a modern hallway or stairwell."
  },
  {
    "id": "MU-002",
    "name": "Art, lines & patterns MU-002",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122013.jpg",
    "description": "Bold graphic pattern that gives a plain office wall a point of view."
  },
  {
    "id": "MU-003",
    "name": "Art, lines & patterns MU-003",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122038.jpg",
    "description": "Brushed textures that read as artwork rather than wallpaper."
  },
  {
    "id": "MU-004",
    "name": "Art, lines & patterns MU-004",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122127.jpg",
    "description": "Geometric repeat scaled to your wall so nothing is cut awkwardly."
  },
  {
    "id": "MU-005",
    "name": "Art, lines & patterns MU-005",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122141.jpg",
    "description": "Muted palette that lets furniture and art stay the focus."
  },
  {
    "id": "MU-006",
    "name": "Art, lines & patterns MU-006",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122200.jpg",
    "description": "Contemporary composition for reception and lobby walls."
  },
  {
    "id": "MU-007",
    "name": "Art, lines & patterns MU-007",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122213.jpg",
    "description": "Abstract line art for a modern hallway or stairwell."
  },
  {
    "id": "MU-008",
    "name": "Art, lines & patterns MU-008",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122302.jpg",
    "description": "Bold graphic pattern that gives a plain office wall a point of view."
  },
  {
    "id": "MU-009",
    "name": "Art, lines & patterns MU-009",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122319.jpg",
    "description": "Brushed textures that read as artwork rather than wallpaper."
  },
  {
    "id": "MU-010",
    "name": "Art, lines & patterns MU-010",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122342.jpg",
    "description": "Geometric repeat scaled to your wall so nothing is cut awkwardly."
  },
  {
    "id": "MU-011",
    "name": "Art, lines & patterns MU-011",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122419.jpg",
    "description": "Muted palette that lets furniture and art stay the focus."
  },
  {
    "id": "MU-012",
    "name": "Art, lines & patterns MU-012",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122444.jpg",
    "description": "Contemporary composition for reception and lobby walls."
  },
  {
    "id": "MU-013",
    "name": "Art, lines & patterns MU-013",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122506.jpg",
    "description": "Abstract line art for a modern hallway or stairwell."
  },
  {
    "id": "MU-014",
    "name": "Art, lines & patterns MU-014",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122522.jpg",
    "description": "Bold graphic pattern that gives a plain office wall a point of view."
  },
  {
    "id": "MU-015",
    "name": "Broken wall 3D MU-015",
    "category": "murals",
    "collection": "Broken wall 3D",
    "image": "/images/murals-broken-wall/screenshot-2025-04-07-111248.jpg",
    "description": "3D broken-wall effect that appears to open the room up."
  },
  {
    "id": "MU-016",
    "name": "Broken wall 3D MU-016",
    "category": "murals",
    "collection": "Broken wall 3D",
    "image": "/images/murals-broken-wall/screenshot-2025-04-07-111353.jpg",
    "description": "Trompe-l'oeil depth that reads best on a wall you see head-on."
  },
  {
    "id": "MU-017",
    "name": "Broken wall 3D MU-017",
    "category": "murals",
    "collection": "Broken wall 3D",
    "image": "/images/murals-broken-wall/screenshot-2025-04-07-111439.jpg",
    "description": "Stone-and-crack detail for a bold living-room statement."
  },
  {
    "id": "MU-019",
    "name": "Broken wall 3D MU-019",
    "category": "murals",
    "collection": "Broken wall 3D",
    "image": "/images/murals-broken-wall/screenshot-2025-04-07-111511.jpg",
    "description": "Layered perspective that adds drama to a narrow space."
  },
  {
    "id": "MU-020",
    "name": "Broken wall 3D MU-020",
    "category": "murals",
    "collection": "Broken wall 3D",
    "image": "/images/murals-broken-wall/screenshot-2025-04-07-111525.jpg",
    "description": "3D broken-wall effect that appears to open the room up."
  },
  {
    "id": "MU-021",
    "name": "Broken wall 3D MU-021",
    "category": "murals",
    "collection": "Broken wall 3D",
    "image": "/images/murals-broken-wall/screenshot-2025-04-07-111545.jpg",
    "description": "Trompe-l'oeil depth that reads best on a wall you see head-on."
  },
  {
    "id": "MU-022",
    "name": "Broken wall 3D MU-022",
    "category": "murals",
    "collection": "Broken wall 3D",
    "image": "/images/murals-broken-wall/screenshot-2025-04-07-111601.jpg",
    "description": "Stone-and-crack detail for a bold living-room statement."
  },
  {
    "id": "MU-023",
    "name": "Broken wall 3D MU-023",
    "category": "murals",
    "collection": "Broken wall 3D",
    "image": "/images/murals-broken-wall/screenshot-2025-04-07-111616.jpg",
    "description": "Layered perspective that adds drama to a narrow space."
  },
  {
    "id": "MU-024",
    "name": "Broken wall 3D MU-024",
    "category": "murals",
    "collection": "Broken wall 3D",
    "image": "/images/murals-broken-wall/screenshot-2025-04-07-111631.jpg",
    "description": "3D broken-wall effect that appears to open the room up."
  },
  {
    "id": "MU-025",
    "name": "Cityscapes MU-025",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-113701.jpg",
    "description": "City skyline mural for offices, bars and study walls."
  },
  {
    "id": "MU-026",
    "name": "Cityscapes MU-026",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-120009.jpg",
    "description": "Night-city lights that look striking against dark furniture."
  },
  {
    "id": "MU-027",
    "name": "Cityscapes MU-027",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-120826.jpg",
    "description": "Aerial street view with plenty of fine detail up close."
  },
  {
    "id": "MU-028",
    "name": "Cityscapes MU-028",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-120839.jpg",
    "description": "Monochrome cityscape that suits a minimal scheme."
  },
  {
    "id": "MU-029",
    "name": "Cityscapes MU-029",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-120916.jpg",
    "description": "Landmark scene printed to your exact wall dimensions."
  },
  {
    "id": "MU-030",
    "name": "Cityscapes MU-030",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-120930.jpg",
    "description": "City skyline mural for offices, bars and study walls."
  },
  {
    "id": "MU-031",
    "name": "Cityscapes MU-031",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-120943.jpg",
    "description": "Night-city lights that look striking against dark furniture."
  },
  {
    "id": "MU-032",
    "name": "Cityscapes MU-032",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-120957.jpg",
    "description": "Aerial street view with plenty of fine detail up close."
  },
  {
    "id": "MU-033",
    "name": "Cityscapes MU-033",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-121015.jpg",
    "description": "Monochrome cityscape that suits a minimal scheme."
  },
  {
    "id": "MU-034",
    "name": "Cityscapes MU-034",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-121033.jpg",
    "description": "Landmark scene printed to your exact wall dimensions."
  },
  {
    "id": "MU-035",
    "name": "Cityscapes MU-035",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-121047.jpg",
    "description": "City skyline mural for offices, bars and study walls."
  },
  {
    "id": "MU-036",
    "name": "Cityscapes MU-036",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-121110.jpg",
    "description": "Night-city lights that look striking against dark furniture."
  },
  {
    "id": "MU-037",
    "name": "Clouds & universe MU-037",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124627.jpg",
    "description": "Cloudscape mural often used on ceilings as well as walls."
  },
  {
    "id": "MU-038",
    "name": "Clouds & universe MU-038",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124659.jpg",
    "description": "Deep night-sky print for a dramatic bedroom feature."
  },
  {
    "id": "MU-039",
    "name": "Clouds & universe MU-039",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124713.jpg",
    "description": "Soft cloud tones that make low rooms feel taller."
  },
  {
    "id": "MU-040",
    "name": "Clouds & universe MU-040",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124728.jpg",
    "description": "Galaxy scene that turns a kids' ceiling into a night sky."
  },
  {
    "id": "MU-041",
    "name": "Clouds & universe MU-041",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124743.jpg",
    "description": "Sunset cloud palette for a warm, calming backdrop."
  },
  {
    "id": "MU-042",
    "name": "Clouds & universe MU-042",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124756.jpg",
    "description": "Cloudscape mural often used on ceilings as well as walls."
  },
  {
    "id": "MU-043",
    "name": "Clouds & universe MU-043",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124812.jpg",
    "description": "Deep night-sky print for a dramatic bedroom feature."
  },
  {
    "id": "MU-044",
    "name": "Clouds & universe MU-044",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124826.jpg",
    "description": "Soft cloud tones that make low rooms feel taller."
  },
  {
    "id": "MU-045",
    "name": "Clouds & universe MU-045",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124840.jpg",
    "description": "Galaxy scene that turns a kids' ceiling into a night sky."
  },
  {
    "id": "MU-046",
    "name": "Clouds & universe MU-046",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124932.jpg",
    "description": "Sunset cloud palette for a warm, calming backdrop."
  },
  {
    "id": "MU-047",
    "name": "Clouds & universe MU-047",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124946.jpg",
    "description": "Cloudscape mural often used on ceilings as well as walls."
  },
  {
    "id": "MU-048",
    "name": "Clouds & universe MU-048",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-125000.jpg",
    "description": "Deep night-sky print for a dramatic bedroom feature."
  },
  {
    "id": "MU-049",
    "name": "Kids MU-049",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-104706.jpg",
    "description": "Playful mural sized for a child's bedroom or play corner."
  },
  {
    "id": "MU-050",
    "name": "Kids MU-050",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-104706s.jpg",
    "description": "Wipe-clean surface that survives sticky hands and crayons."
  },
  {
    "id": "MU-051",
    "name": "Kids MU-051",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-104732.jpg",
    "description": "Storybook scene that grows with a toddler's imagination."
  },
  {
    "id": "MU-052",
    "name": "Kids MU-052",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-104809.jpg",
    "description": "Soft pastel palette that keeps the room easy to sleep in."
  },
  {
    "id": "MU-053",
    "name": "Kids MU-053",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-104825.jpg",
    "description": "Adventure theme for a shared kids' room or nursery."
  },
  {
    "id": "MU-054",
    "name": "Kids MU-054",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-104840.jpg",
    "description": "Bright characters that make a play area feel like its own world."
  },
  {
    "id": "MU-055",
    "name": "Kids MU-055",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-104854.jpg",
    "description": "Playful mural sized for a child's bedroom or play corner."
  },
  {
    "id": "MU-056",
    "name": "Kids MU-056",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-104918.jpg",
    "description": "Wipe-clean surface that survives sticky hands and crayons."
  },
  {
    "id": "MU-057",
    "name": "Kids MU-057",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-104936.jpg",
    "description": "Storybook scene that grows with a toddler's imagination."
  },
  {
    "id": "MU-058",
    "name": "Kids MU-058",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-105314.jpg",
    "description": "Soft pastel palette that keeps the room easy to sleep in."
  },
  {
    "id": "MU-059",
    "name": "Kids MU-059",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-105329.jpg",
    "description": "Adventure theme for a shared kids' room or nursery."
  },
  {
    "id": "MU-060",
    "name": "Kids MU-060",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-105342.jpg",
    "description": "Bright characters that make a play area feel like its own world."
  },
  {
    "id": "MU-061",
    "name": "Kids MU-061",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-105355.jpg",
    "description": "Playful mural sized for a child's bedroom or play corner."
  },
  {
    "id": "MU-062",
    "name": "Kids MU-062",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-105411.jpg",
    "description": "Wipe-clean surface that survives sticky hands and crayons."
  },
  {
    "id": "MU-063",
    "name": "Landscapes & seascapes MU-063",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-113519.jpg",
    "description": "Wide landscape mural that visually pushes the back wall outwards."
  },
  {
    "id": "MU-064",
    "name": "Landscapes & seascapes MU-064",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-113635.jpg",
    "description": "Calm seascape tones that suit bedrooms and quiet reading corners."
  },
  {
    "id": "MU-065",
    "name": "Landscapes & seascapes MU-065",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-113732.jpg",
    "description": "Misty mountain scene printed at your exact wall height."
  },
  {
    "id": "MU-066",
    "name": "Landscapes & seascapes MU-066",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-113754.jpg",
    "description": "Golden-hour horizon that warms up north-facing rooms."
  },
  {
    "id": "MU-067",
    "name": "Landscapes & seascapes MU-067",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-113850.jpg",
    "description": "Forest depth for a restful bedroom headboard wall."
  },
  {
    "id": "MU-068",
    "name": "Landscapes & seascapes MU-068",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-113907.jpg",
    "description": "Open plains scene with plenty of sky for a lofty feel."
  },
  {
    "id": "MU-069",
    "name": "Landscapes & seascapes MU-069",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114000.jpg",
    "description": "Wide landscape mural that visually pushes the back wall outwards."
  },
  {
    "id": "MU-070",
    "name": "Landscapes & seascapes MU-070",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114019.jpg",
    "description": "Calm seascape tones that suit bedrooms and quiet reading corners."
  },
  {
    "id": "MU-071",
    "name": "Landscapes & seascapes MU-071",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114033.jpg",
    "description": "Misty mountain scene printed at your exact wall height."
  },
  {
    "id": "MU-072",
    "name": "Landscapes & seascapes MU-072",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114053.jpg",
    "description": "Golden-hour horizon that warms up north-facing rooms."
  },
  {
    "id": "MU-073",
    "name": "Landscapes & seascapes MU-073",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114108.jpg",
    "description": "Forest depth for a restful bedroom headboard wall."
  },
  {
    "id": "MU-074",
    "name": "Landscapes & seascapes MU-074",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114128.jpg",
    "description": "Open plains scene with plenty of sky for a lofty feel."
  },
  {
    "id": "MU-075",
    "name": "Landscapes & seascapes MU-075",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114151.jpg",
    "description": "Wide landscape mural that visually pushes the back wall outwards."
  },
  {
    "id": "MU-076",
    "name": "Landscapes & seascapes MU-076",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114226.jpg",
    "description": "Calm seascape tones that suit bedrooms and quiet reading corners."
  },
  {
    "id": "MU-077",
    "name": "Landscapes & seascapes MU-077",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114242.jpg",
    "description": "Misty mountain scene printed at your exact wall height."
  },
  {
    "id": "MU-078",
    "name": "Landscapes & seascapes MU-078",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114306.jpg",
    "description": "Golden-hour horizon that warms up north-facing rooms."
  },
  {
    "id": "MU-079",
    "name": "Maps MU-079",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-123853.jpg",
    "description": "World map mural for studies, boardrooms and kids' rooms."
  },
  {
    "id": "MU-080",
    "name": "Maps MU-080",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-123933.jpg",
    "description": "Vintage-tone cartography that works as artwork in its own right."
  },
  {
    "id": "MU-081",
    "name": "Maps MU-081",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-123953.jpg",
    "description": "Detailed labelling that stays legible at full wall scale."
  },
  {
    "id": "MU-082",
    "name": "Maps MU-082",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-124012.jpg",
    "description": "Muted map palette that blends with neutral interiors."
  },
  {
    "id": "MU-083",
    "name": "Maps MU-083",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-124026.jpg",
    "description": "Regional map option if you want a specific country centred."
  },
  {
    "id": "MU-084",
    "name": "Maps MU-084",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-124042.jpg",
    "description": "World map mural for studies, boardrooms and kids' rooms."
  },
  {
    "id": "MU-085",
    "name": "Maps MU-085",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-124057.jpg",
    "description": "Vintage-tone cartography that works as artwork in its own right."
  },
  {
    "id": "MU-086",
    "name": "Maps MU-086",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-124110.jpg",
    "description": "Detailed labelling that stays legible at full wall scale."
  },
  {
    "id": "MU-087",
    "name": "Maps MU-087",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-124124.jpg",
    "description": "Muted map palette that blends with neutral interiors."
  },
  {
    "id": "MU-088",
    "name": "Maps MU-088",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-124139.jpg",
    "description": "Regional map option if you want a specific country centred."
  },
  {
    "id": "MU-089",
    "name": "Waterfalls MU-089",
    "category": "murals",
    "collection": "Waterfalls",
    "image": "/images/murals-waterfalls/screenshot-2025-04-07-114419.jpg",
    "description": "Waterfall scene with real sense of movement and cool depth."
  },
  {
    "id": "MU-090",
    "name": "Waterfalls MU-090",
    "category": "murals",
    "collection": "Waterfalls",
    "image": "/images/murals-waterfalls/screenshot-2025-04-07-114442.jpg",
    "description": "Lush greens and spray for a spa-like bathroom or bedroom wall."
  },
  {
    "id": "MU-091",
    "name": "Waterfalls MU-091",
    "category": "murals",
    "collection": "Waterfalls",
    "image": "/images/murals-waterfalls/screenshot-2025-04-07-114458.jpg",
    "description": "Tall composition that suits double-height and stairwell walls."
  },
  {
    "id": "MU-092",
    "name": "Waterfalls MU-092",
    "category": "murals",
    "collection": "Waterfalls",
    "image": "/images/murals-waterfalls/screenshot-2025-04-07-114717.jpg",
    "description": "Soft mist tones that keep the room feeling fresh."
  },
  {
    "id": "MU-093",
    "name": "Waterfalls MU-093",
    "category": "murals",
    "collection": "Waterfalls",
    "image": "/images/murals-waterfalls/screenshot-2025-04-07-115348.jpg",
    "description": "Waterfall scene with real sense of movement and cool depth."
  },
  {
    "id": "MU-094",
    "name": "Waterfalls MU-094",
    "category": "murals",
    "collection": "Waterfalls",
    "image": "/images/murals-waterfalls/screenshot-2025-04-07-115441.jpg",
    "description": "Lush greens and spray for a spa-like bathroom or bedroom wall."
  },
  {
    "id": "MU-095",
    "name": "Wildlife MU-095",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/633d420b-ccda-4848-9533-afdaab8107be.jpg",
    "description": "Wildlife scene printed large for a striking living-room wall."
  },
  {
    "id": "MU-096",
    "name": "Wildlife MU-096",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112257.jpg",
    "description": "Safari imagery that suits lodges, offices and family rooms."
  },
  {
    "id": "MU-097",
    "name": "Wildlife MU-097",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112327.jpg",
    "description": "Close-up detail that holds up even at full wall size."
  },
  {
    "id": "MU-098",
    "name": "Wildlife MU-098",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112341.jpg",
    "description": "Earthy tones that sit well with wood and leather furniture."
  },
  {
    "id": "MU-099",
    "name": "Wildlife MU-099",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112400.jpg",
    "description": "Savannah composition with room for furniture in front."
  },
  {
    "id": "MU-100",
    "name": "Wildlife MU-100",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112415.jpg",
    "description": "Wildlife scene printed large for a striking living-room wall."
  },
  {
    "id": "MU-101",
    "name": "Wildlife MU-101",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112430.jpg",
    "description": "Safari imagery that suits lodges, offices and family rooms."
  },
  {
    "id": "MU-102",
    "name": "Wildlife MU-102",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112503.jpg",
    "description": "Close-up detail that holds up even at full wall size."
  },
  {
    "id": "MU-103",
    "name": "Wildlife MU-103",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112518.jpg",
    "description": "Earthy tones that sit well with wood and leather furniture."
  },
  {
    "id": "MU-104",
    "name": "Wildlife MU-104",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112532.jpg",
    "description": "Savannah composition with room for furniture in front."
  },
  {
    "id": "MU-105",
    "name": "Wildlife MU-105",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112552.jpg",
    "description": "Wildlife scene printed large for a striking living-room wall."
  },
  {
    "id": "MU-106",
    "name": "Wildlife MU-106",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112812.jpg",
    "description": "Safari imagery that suits lodges, offices and family rooms."
  }
];

export const featuredProducts: Product[] = products.filter((_, i) => i % 11 === 0).slice(0, 8);
