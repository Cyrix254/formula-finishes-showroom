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
    "description": "Vertical fluted panelling cut to height, adding rhythm and warmth to a feature wall or reception desk."
  },
  {
    "id": "WPN-002",
    "name": "PU stone cladding WPN-002",
    "category": "wall-panels",
    "collection": "PU stone panels",
    "image": "/images/wall-panels/pu-stone-panel.jpg",
    "description": "Lightweight PU panels with convincing stone relief — the look of masonry without the weight or wet work."
  },
  {
    "id": "WPN-003",
    "name": "Box design panels WPN-003",
    "category": "wall-panels",
    "collection": "Box & concave designs",
    "image": "/images/wall-panels/concave-box-panel.jpg",
    "description": "Sculpted box and concave panelling that plays with light and shadow across a plain wall."
  },

  {
    "id": "WP-001",
    "name": "Suede-look plain roll",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-0956.jpg",
    "description": "A suede-look plain roll with a soft, matt surface that reads as fine fabric on the wall."
  },
  {
    "id": "WP-002",
    "name": "Silver grasscloth stripe",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-0963.jpg",
    "description": "Stone-grey plain paper — a calm, architectural backdrop for art and timber furniture."
  },
  {
    "id": "WP-003",
    "name": "Ivory smooth plain",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-0978.jpg",
    "description": "Silver grasscloth stripe with a fine natural weave that catches light along its length."
  },
  {
    "id": "WP-004",
    "name": "Blush linen texture",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-0987.jpg",
    "description": "Ivory smooth plain, the quiet choice for rooms where the furnishings should lead."
  },
  {
    "id": "WP-005",
    "name": "Warm grey linen weave",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-1007.jpg",
    "description": "Blush linen texture that warms bedrooms and dressing rooms with a gentle, powdery tone."
  },
  {
    "id": "WP-006",
    "name": "Pale rose striated",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-1016.jpg",
    "description": "Warm grey linen weave — a versatile neutral that flatters both cream and charcoal schemes."
  },
  {
    "id": "WP-007",
    "name": "Stone-grey plain roll",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-1025.jpg",
    "description": "Pale rose striated paper with a soft vertical grain for an elegant, restful finish."
  },
  {
    "id": "WP-008",
    "name": "Cream textured trio",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/whatsapp-image-2026-06-29-at-12-01-33-1.jpg",
    "description": "Cream textured trio: three closely related finishes for layering panels and alcoves."
  },
  {
    "id": "WP-009",
    "name": "Colour range selection",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/whatsapp-image-2026-07-11-at-15-01-06.jpg",
    "description": "A full colour range in one texture, so you can match adjoining rooms without changing paper."
  },
  {
    "id": "CP-001",
    "name": "Contact papers CP-001",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/0a409a39-a68d-45dd-b12e-a6aaf7233298.jpg",
    "description": "Self-adhesive finish that transforms tired cabinet doors in an afternoon, with no dust and no repainting."
  },
  {
    "id": "CP-002",
    "name": "Contact papers CP-002",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/71-lsgpctel-ac-uf894-1000-ql80-fmwebp.jpg",
    "description": "A convincing stone-look surface for kitchen fronts, worktop facings and island panels."
  },
  {
    "id": "CP-003",
    "name": "Contact papers CP-003",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/71bybimykgl-ac-uf894-1000-ql80-fmwebp.jpg",
    "description": "Warm timber grain that brings quiet character to wardrobes, doors and shelving."
  },
  {
    "id": "CP-004",
    "name": "Contact papers CP-004",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/71cu1wabekl-ac-uf894-1000-ql80-fmwebp.jpg",
    "description": "Wipe-clean vinyl designed for splash-prone areas around sinks and worktops."
  },
  {
    "id": "CP-005",
    "name": "Contact papers CP-005",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/71jmarbzqsl-ac-uf894-1000-ql80-fmwebp.jpg",
    "description": "A smooth, matt finish that reads as sprayed paint once smoothed into place."
  },
  {
    "id": "CP-006",
    "name": "Contact papers CP-006",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/71x8j9ldhpl-ac-uf894-1000-ql80-fmwebp.jpg",
    "description": "Subtle sheen that catches light gently across drawer fronts and side panels."
  },
  {
    "id": "CP-007",
    "name": "Contact papers CP-007",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/81anj6thvml-ac-uf894-1000-ql80-fmwebp.jpg",
    "description": "Ideal for refreshing rental kitchens — a clean new look that lifts away when you leave."
  },
  {
    "id": "CP-008",
    "name": "Contact papers CP-008",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/81khwlnvdtl-ac-uf894-1000-ql80-fmwebp.jpg",
    "description": "Fine marble veining that adds a sense of luxury to small surfaces at modest cost."
  },
  {
    "id": "CP-009",
    "name": "Contact papers CP-009",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/619h9x3xbwl-ac-uf894-1000-ql80-fmwebp.jpg",
    "description": "A crisp, contemporary facing for study desks, sideboards and built-in units."
  },
  {
    "id": "CP-010",
    "name": "Contact papers CP-010",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/711sueviwml-ac-uf894-1000-ql80-fmwebp.jpg",
    "description": "Hard-wearing surface that resists everyday knocks in busy family kitchens."
  },
  {
    "id": "CP-011",
    "name": "Contact papers CP-011",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/d6687c76-6957-4325-97a7-6dcc9370329f.jpg",
    "description": "Deep tone that grounds pale rooms when used on lower cabinets and plinths."
  },
  {
    "id": "CP-012",
    "name": "Contact papers CP-012",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/e71e0c16-f17e-496d-af60-ab3d84569269.jpg",
    "description": "Bright, light-reflecting finish that helps compact kitchens feel more open."
  },
  {
    "id": "CP-013",
    "name": "Contact papers CP-013",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/img-20250123-194928-0515.jpg",
    "description": "Textured grain you can feel underhand, giving flat-pack furniture a solid, made feel."
  },
  {
    "id": "CP-014",
    "name": "Contact papers CP-014",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/img-20240525-wa0001.jpg",
    "description": "A neat facing for fridge sides, cupboard interiors and other awkward surfaces."
  },
  {
    "id": "CP-015",
    "name": "Contact papers CP-015",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/img-20250220-wa0017.jpg",
    "description": "Understated pattern that mixes easily with brass, black or brushed steel handles."
  },
  {
    "id": "CP-016",
    "name": "Contact papers CP-016",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/img-20250221-wa0039.jpg",
    "description": "Soft, chalky tone that pairs beautifully with terrazzo and natural stone."
  },
  {
    "id": "CP-017",
    "name": "Contact papers CP-017",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/mmexport1734180900180.jpg",
    "description": "A quick, low-mess upgrade for bathroom vanities and storage units."
  },
  {
    "id": "CP-018",
    "name": "Contact papers CP-018",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/mmexport1741702068216.jpg",
    "description": "Classic finish that keeps kitchens looking timeless rather than trend-led."
  },
  {
    "id": "CP-019",
    "name": "Contact papers CP-019",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/mmexport1751371510911.jpg",
    "description": "Contrasting tone made for two-tone cabinetry schemes."
  },
  {
    "id": "CP-020",
    "name": "Contact papers CP-020",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/mmexport1751371513211.jpg",
    "description": "A clean cover for wall niches, headboards and shelving edges."
  },
  {
    "id": "CF-001",
    "name": "Artificial grass turf CF-001",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/30mm-grass-2.jpg",
    "description": "Soft-blade turf that keeps balconies and terraces green all year with no watering."
  },
  {
    "id": "CF-002",
    "name": "Artificial grass turf CF-002",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/30mm-grass-3.jpg",
    "description": "Dense pile with a natural spring underfoot, laid for rooftop lounging areas."
  },
  {
    "id": "CF-003",
    "name": "Artificial grass turf CF-003",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/40mm-grass-1.jpg",
    "description": "Hard-wearing turf for play areas, staying level and tidy through daily use."
  },
  {
    "id": "CF-004",
    "name": "Artificial grass turf CF-004",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/40mm-grass-2.jpg",
    "description": "A realistic two-tone blade mix that avoids the flat look of cheaper turf."
  },
  {
    "id": "CF-005",
    "name": "Artificial grass turf CF-005",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/artificial-grass-1.jpg",
    "description": "Fine, short pile that suits pathways, poolside edges and tight courtyards."
  },
  {
    "id": "CF-006",
    "name": "Artificial grass turf CF-006",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/artificial-grass-2.jpg",
    "description": "Free-draining backing that handles heavy rain without pooling."
  },
  {
    "id": "CF-007",
    "name": "Artificial grass turf CF-007",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/artificial-grass-3.jpg",
    "description": "Deep green tones that hold their colour under strong sun."
  },
  {
    "id": "CF-008",
    "name": "Artificial grass turf CF-008",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/artificial-grass-6.jpg",
    "description": "A neat finish for shopfronts, stands and event spaces needing instant greenery."
  },
  {
    "id": "CF-009",
    "name": "Artificial grass turf CF-009",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/artificial-grass-7.jpg",
    "description": "Comfortable enough for bare feet, making it a favourite for children's rooms and dens."
  },
  {
    "id": "CF-010",
    "name": "Artificial grass turf CF-010",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/artificial-grass-9.jpg",
    "description": "Low-profile turf for stairs, ledges and vertical detailing."
  },
  {
    "id": "CF-011",
    "name": "Artificial grass turf CF-011",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/artificial-grass-10.jpg",
    "description": "Lush, longer blades for gardens where a soft, meadow-like look is wanted."
  },
  {
    "id": "CF-012",
    "name": "Artificial grass turf CF-012",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/artificial-grass-11.jpg",
    "description": "Cut to shape around planters and paving for a seamless finish."
  },
  {
    "id": "CF-013",
    "name": "Artificial grass turf CF-013",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/factory-material-pp.jpg",
    "description": "Pet-friendly surface that rinses clean and dries quickly."
  },
  {
    "id": "CF-014",
    "name": "Artificial grass turf CF-014",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/grass-backer.jpg",
    "description": "A tidy, maintenance-free alternative for shaded courtyards where grass struggles."
  },
  {
    "id": "CF-015",
    "name": "Artificial grass turf CF-015",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/grass-roll-1.jpg",
    "description": "Springy pile that softens hard concrete surfaces on balconies."
  },
  {
    "id": "CF-016",
    "name": "Artificial grass turf CF-016",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/grass-roll-2.jpg",
    "description": "Consistent colour across large runs, ideal for offices and showrooms."
  },
  {
    "id": "CF-017",
    "name": "Artificial grass turf CF-017",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/img-0754.jpg",
    "description": "A resilient choice for gyms and studios needing a warmer floor."
  },
  {
    "id": "CF-018",
    "name": "Artificial grass turf CF-018",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/img-0760.jpg",
    "description": "Neat green framing for decking, patios and rooftop bars."
  },
  {
    "id": "CF-019",
    "name": "Wall-to-wall carpets CF-019",
    "category": "carpets",
    "collection": "Wall-to-wall carpets",
    "image": "/images/carpets/mmexport1750486440229.jpg",
    "description": "Dense broadloom carpet laid wall to wall for warmth and quiet underfoot."
  },
  {
    "id": "CF-021",
    "name": "Wall-to-wall carpets CF-021",
    "category": "carpets",
    "collection": "Wall-to-wall carpets",
    "image": "/images/carpets/mmexport1750486444587.jpg",
    "description": "A hard-wearing pile in a neutral tone that suits bedrooms, offices and stairs."
  },
  {
    "id": "WB-001",
    "name": "Window blinds WB-001",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/1-1.jpg",
    "description": "Made-to-measure blinds that filter harsh sunlight into a soft, even glow — ideal for living rooms that face the afternoon sun."
  },
  {
    "id": "WB-002",
    "name": "Window blinds WB-002",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/3.jpg",
    "description": "A crisp roller finish that draws up cleanly out of sight, keeping window lines uncluttered in compact rooms."
  },
  {
    "id": "WB-003",
    "name": "Window blinds WB-003",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/4.jpg",
    "description": "Sheer double-layer blinds that let you dial daylight up or down without losing your view."
  },
  {
    "id": "WB-004",
    "name": "Window blinds WB-004",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/5.jpg",
    "description": "Vertical louvres that sweep smoothly across wide glazing and sliding doors, giving privacy on demand."
  },
  {
    "id": "WB-005",
    "name": "Window blinds WB-005",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/6.jpg",
    "description": "A quiet, tailored screen for bedrooms — gentle light by day, close coverage by night."
  },
  {
    "id": "WB-006",
    "name": "Window blinds WB-006",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/7.jpg",
    "description": "Neutral fabric with a fine weave that flatters both warm timber and cool grey interiors."
  },
  {
    "id": "WB-007",
    "name": "Window blinds WB-007",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/8.jpg",
    "description": "Blackout-weighted cloth for media rooms and nurseries where true darkness matters."
  },
  {
    "id": "WB-008",
    "name": "Window blinds WB-008",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/9.jpg",
    "description": "A slim, contemporary blind that suits offices and reception areas needing glare control at the desk."
  },
  {
    "id": "WB-009",
    "name": "Window blinds WB-009",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/10.jpg",
    "description": "Textured cloth that adds subtle depth to plain walls while keeping the room feeling calm."
  },
  {
    "id": "WB-010",
    "name": "Window blinds WB-010",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/11.jpg",
    "description": "Cut precisely to the reveal for a flush, built-in look on kitchen and bathroom windows."
  },
  {
    "id": "WB-011",
    "name": "Window blinds WB-011",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/12.jpg",
    "description": "Soft light diffusion that protects furniture and finishes from direct sun without darkening the room."
  },
  {
    "id": "WB-012",
    "name": "Window blinds WB-012",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/13.jpg",
    "description": "A refined pairing of sheer and opaque bands for dining spaces that shift from bright brunch to low-lit evenings."
  },
  {
    "id": "WB-013",
    "name": "Window blinds WB-013",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/14.jpg",
    "description": "Clean-lined coverage for stairwells and landings, where fuss-free operation counts."
  },
  {
    "id": "WB-014",
    "name": "Window blinds WB-014",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/15.jpg",
    "description": "Warm-toned fabric that lifts north-facing rooms with a gentle, sunlit cast."
  },
  {
    "id": "WB-015",
    "name": "Window blinds WB-015",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/18.jpg",
    "description": "Deep, saturated cloth for a more dramatic window treatment in studies and lounges."
  },
  {
    "id": "WB-016",
    "name": "Window blinds WB-016",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/19.jpg",
    "description": "An easy-care surface that wipes clean, made for busy family rooms and kitchens."
  },
  {
    "id": "WB-017",
    "name": "Window blinds WB-017",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/21.jpg",
    "description": "Fine perforation that keeps the outlook visible while cutting heat and glare."
  },
  {
    "id": "WB-018",
    "name": "Window blinds WB-018",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/22.jpg",
    "description": "A tailored finish for tall windows, hanging straight and true along the full drop."
  },
  {
    "id": "WB-019",
    "name": "Window blinds WB-019",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/25.jpg",
    "description": "Understated pattern that reads as texture from across the room — quietly elegant."
  },
  {
    "id": "WB-020",
    "name": "Window blinds WB-020",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/26.jpg",
    "description": "Sleek hardware and a low-profile headrail keep the focus on the glass, not the fitting."
  },
  {
    "id": "WB-021",
    "name": "Window blinds WB-021",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/27.jpg",
    "description": "A dependable choice for rentals and offices: durable, neutral and simple to operate."
  },
  {
    "id": "WB-022",
    "name": "Window blinds WB-022",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/28.jpg",
    "description": "Layered light control that suits open-plan spaces where one window serves several zones."
  },
  {
    "id": "WF-001",
    "name": "Window films WF-001",
    "category": "window-films",
    "collection": "Window films",
    "image": "/images/window-films/img-0155.jpg",
    "description": "Frosted film that brings privacy to bathroom and street-facing glass while keeping the daylight."
  },
  {
    "id": "WF-002",
    "name": "Window films WF-002",
    "category": "window-films",
    "collection": "Window films",
    "image": "/images/window-films/img-5579.jpg",
    "description": "Tinted film that cuts glare and heat on sun-facing windows and glass doors."
  },
  {
    "id": "WF-003",
    "name": "Window films WF-003",
    "category": "window-films",
    "collection": "Window films",
    "image": "/images/window-films/img-5584.jpg",
    "description": "A decorative pattern that turns plain partitions into a designed feature."
  },
  {
    "id": "WF-004",
    "name": "Window films WF-004",
    "category": "window-films",
    "collection": "Window films",
    "image": "/images/window-films/img-6079.jpg",
    "description": "Fine-line film for offices needing privacy at seated height without darkening the room."
  },
  {
    "id": "WF-005",
    "name": "Window films WF-005",
    "category": "window-films",
    "collection": "Window films",
    "image": "/images/window-films/img-6621.jpg",
    "description": "Mirror-effect film for daytime privacy on ground-floor glazing."
  },
  {
    "id": "MU-001",
    "name": "Art, lines & patterns MU-001",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-121942.jpg",
    "description": "Flowing line work printed large, giving plain walls a gallery-like presence."
  },
  {
    "id": "MU-002",
    "name": "Art, lines & patterns MU-002",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122013.jpg",
    "description": "Abstract brushwork in muted tones — art for the wall without the framing."
  },
  {
    "id": "MU-003",
    "name": "Art, lines & patterns MU-003",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122038.jpg",
    "description": "Geometric repeat that adds rhythm to hallways and stair walls."
  },
  {
    "id": "MU-004",
    "name": "Art, lines & patterns MU-004",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122127.jpg",
    "description": "Soft marbled swirls that read as luxury behind a bed or sofa."
  },
  {
    "id": "MU-005",
    "name": "Art, lines & patterns MU-005",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122141.jpg",
    "description": "Fine gold-toned linework on a deep ground, made for dining rooms."
  },
  {
    "id": "MU-006",
    "name": "Art, lines & patterns MU-006",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122200.jpg",
    "description": "A textured plaster effect that gives new-build walls character."
  },
  {
    "id": "MU-007",
    "name": "Art, lines & patterns MU-007",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122213.jpg",
    "description": "Minimal arcs and curves for calm, contemporary interiors."
  },
  {
    "id": "MU-008",
    "name": "Art, lines & patterns MU-008",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122302.jpg",
    "description": "Bold colour blocking that anchors an open-plan seating area."
  },
  {
    "id": "MU-009",
    "name": "Art, lines & patterns MU-009",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122319.jpg",
    "description": "Delicate botanical linework, elegant in bathrooms and dressing rooms."
  },
  {
    "id": "MU-010",
    "name": "Art, lines & patterns MU-010",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122342.jpg",
    "description": "A large-scale abstract that stands in for a statement artwork."
  },
  {
    "id": "MU-011",
    "name": "Art, lines & patterns MU-011",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122419.jpg",
    "description": "Layered tonal washes that shift as the light moves through the room."
  },
  {
    "id": "MU-012",
    "name": "Art, lines & patterns MU-012",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122444.jpg",
    "description": "Graphic repeat that suits offices, salons and reception walls."
  },
  {
    "id": "MU-013",
    "name": "Art, lines & patterns MU-013",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122506.jpg",
    "description": "Subtle metallic detailing that catches lamplight in the evening."
  },
  {
    "id": "MU-014",
    "name": "Art, lines & patterns MU-014",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122522.jpg",
    "description": "Ink-like strokes on a pale ground — quiet, confident and easy to live with."
  },
  {
    "id": "MU-015",
    "name": "Broken wall 3D MU-015",
    "category": "murals",
    "collection": "Broken wall 3D",
    "image": "/images/murals-broken-wall/screenshot-2025-04-07-111248.jpg",
    "description": "A trompe-l'oeil break in the wall that opens onto a view beyond — most effective on a single feature wall."
  },
  {
    "id": "MU-016",
    "name": "Broken wall 3D MU-016",
    "category": "murals",
    "collection": "Broken wall 3D",
    "image": "/images/murals-broken-wall/screenshot-2025-04-07-111353.jpg",
    "description": "Cracked concrete revealing greenery, giving flat walls striking depth."
  },
  {
    "id": "MU-017",
    "name": "Broken wall 3D MU-017",
    "category": "murals",
    "collection": "Broken wall 3D",
    "image": "/images/murals-broken-wall/screenshot-2025-04-07-111439.jpg",
    "description": "Stone breaking away to open sky, printed large for a lounge."
  },
  {
    "id": "MU-019",
    "name": "Broken wall 3D MU-019",
    "category": "murals",
    "collection": "Broken wall 3D",
    "image": "/images/murals-broken-wall/screenshot-2025-04-07-111511.jpg",
    "description": "A 3D archway effect that makes narrow hallways feel longer."
  },
  {
    "id": "MU-020",
    "name": "Broken wall 3D MU-020",
    "category": "murals",
    "collection": "Broken wall 3D",
    "image": "/images/murals-broken-wall/screenshot-2025-04-07-111525.jpg",
    "description": "Broken brick with light spilling through, bold in a dining room."
  },
  {
    "id": "MU-021",
    "name": "Broken wall 3D MU-021",
    "category": "murals",
    "collection": "Broken wall 3D",
    "image": "/images/murals-broken-wall/screenshot-2025-04-07-111545.jpg",
    "description": "Torn wall opening onto water — dramatic behind a sofa."
  },
  {
    "id": "MU-022",
    "name": "Broken wall 3D MU-022",
    "category": "murals",
    "collection": "Broken wall 3D",
    "image": "/images/murals-broken-wall/screenshot-2025-04-07-111601.jpg",
    "description": "An illusion of depth that suits offices wanting a talking point."
  },
  {
    "id": "MU-023",
    "name": "Broken wall 3D MU-023",
    "category": "murals",
    "collection": "Broken wall 3D",
    "image": "/images/murals-broken-wall/screenshot-2025-04-07-111616.jpg",
    "description": "Rugged stone edges framing a distant landscape."
  },
  {
    "id": "MU-024",
    "name": "Broken wall 3D MU-024",
    "category": "murals",
    "collection": "Broken wall 3D",
    "image": "/images/murals-broken-wall/screenshot-2025-04-07-111631.jpg",
    "description": "A dimensional effect printed sharply so the illusion holds up close."
  },
  {
    "id": "MU-025",
    "name": "Cityscapes MU-025",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-113701.jpg",
    "description": "A city skyline printed wide — it gives apartments and offices an outward view where there isn't one."
  },
  {
    "id": "MU-026",
    "name": "Cityscapes MU-026",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-120009.jpg",
    "description": "Night-time streets and lights for a bold lounge or bar wall."
  },
  {
    "id": "MU-027",
    "name": "Cityscapes MU-027",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-120826.jpg",
    "description": "Monochrome architecture that suits sharp, modern interiors."
  },
  {
    "id": "MU-028",
    "name": "Cityscapes MU-028",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-120839.jpg",
    "description": "Bridges and river in soft haze, calm enough for a bedroom."
  },
  {
    "id": "MU-029",
    "name": "Cityscapes MU-029",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-120916.jpg",
    "description": "A famous skyline at dusk, printed to your exact wall size."
  },
  {
    "id": "MU-030",
    "name": "Cityscapes MU-030",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-120930.jpg",
    "description": "Aerial city detail that rewards a closer look in a hallway."
  },
  {
    "id": "MU-031",
    "name": "Cityscapes MU-031",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-120943.jpg",
    "description": "Warm-lit streets that make dining rooms feel intimate."
  },
  {
    "id": "MU-032",
    "name": "Cityscapes MU-032",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-120957.jpg",
    "description": "Sleek towers and glass, well matched to corporate reception walls."
  },
  {
    "id": "MU-033",
    "name": "Cityscapes MU-033",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-121015.jpg",
    "description": "A vintage-toned cityscape for interiors leaning traditional."
  },
  {
    "id": "MU-034",
    "name": "Cityscapes MU-034",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-121033.jpg",
    "description": "Rooftops and sky, giving depth to a small study."
  },
  {
    "id": "MU-035",
    "name": "Cityscapes MU-035",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-121047.jpg",
    "description": "Neon-lit streets for games rooms and teenage bedrooms."
  },
  {
    "id": "MU-036",
    "name": "Cityscapes MU-036",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-121110.jpg",
    "description": "A quiet morning skyline in pale greys and blues."
  },
  {
    "id": "MU-037",
    "name": "Clouds & universe MU-037",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124627.jpg",
    "description": "Deep space printed across the ceiling or wall — a favourite for children's rooms and cinema spaces."
  },
  {
    "id": "MU-038",
    "name": "Clouds & universe MU-038",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124659.jpg",
    "description": "Soft cloudscape that makes low ceilings feel higher."
  },
  {
    "id": "MU-039",
    "name": "Clouds & universe MU-039",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124713.jpg",
    "description": "Nebula colour in violets and blues for a dramatic bedroom wall."
  },
  {
    "id": "MU-040",
    "name": "Clouds & universe MU-040",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124728.jpg",
    "description": "A pale sky wash that lightens interior rooms without windows."
  },
  {
    "id": "MU-041",
    "name": "Clouds & universe MU-041",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124743.jpg",
    "description": "Stars and planets arranged for a child's room they can name."
  },
  {
    "id": "MU-042",
    "name": "Clouds & universe MU-042",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124756.jpg",
    "description": "Moonlit cloud in muted greys, calm rather than theatrical."
  },
  {
    "id": "MU-043",
    "name": "Clouds & universe MU-043",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124812.jpg",
    "description": "Sunset cloud tones that warm a neutral living room."
  },
  {
    "id": "MU-044",
    "name": "Clouds & universe MU-044",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124826.jpg",
    "description": "A galaxy print that turns a media wall into the main event."
  },
  {
    "id": "MU-045",
    "name": "Clouds & universe MU-045",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124840.jpg",
    "description": "Gentle blue sky with drifting cloud, lovely on a nursery ceiling."
  },
  {
    "id": "MU-046",
    "name": "Clouds & universe MU-046",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124932.jpg",
    "description": "Cosmic detail printed sharply enough to hold up close."
  },
  {
    "id": "MU-047",
    "name": "Clouds & universe MU-047",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124946.jpg",
    "description": "Dawn sky gradients that pair beautifully with brass and cream."
  },
  {
    "id": "MU-048",
    "name": "Clouds & universe MU-048",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-125000.jpg",
    "description": "Night sky in deep indigo for a cocooning bedroom."
  },
  {
    "id": "MU-049",
    "name": "Kids MU-049",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-104706.jpg",
    "description": "A playful scene printed to your wall size, sized so favourite characters sit at a child's eye level."
  },
  {
    "id": "MU-050",
    "name": "Kids MU-050",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-104706s.jpg",
    "description": "Gentle pastel storytelling that grows well with a nursery."
  },
  {
    "id": "MU-051",
    "name": "Kids MU-051",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-104732.jpg",
    "description": "Bright, friendly artwork that turns a plain bedroom into an adventure."
  },
  {
    "id": "MU-052",
    "name": "Kids MU-052",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-104809.jpg",
    "description": "A calm woodland cast in soft tones — cheerful without being overstimulating at bedtime."
  },
  {
    "id": "MU-053",
    "name": "Kids MU-053",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-104825.jpg",
    "description": "Sky, clouds and flight for children who love aeroplanes and rockets."
  },
  {
    "id": "MU-054",
    "name": "Kids MU-054",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-104840.jpg",
    "description": "An underwater world in cool blues, lovely behind a low bed."
  },
  {
    "id": "MU-055",
    "name": "Kids MU-055",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-104854.jpg",
    "description": "Safari friends arranged across the wall for a shared children's room."
  },
  {
    "id": "MU-056",
    "name": "Kids MU-056",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-104918.jpg",
    "description": "A fairytale castle scene that makes a small room feel magical."
  },
  {
    "id": "MU-057",
    "name": "Kids MU-057",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-104936.jpg",
    "description": "Sweet, hand-drawn detail that suits cots and changing corners."
  },
  {
    "id": "MU-058",
    "name": "Kids MU-058",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-105314.jpg",
    "description": "Cars and roads printed low so play can happen along the wall."
  },
  {
    "id": "MU-059",
    "name": "Kids MU-059",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-105329.jpg",
    "description": "Dinosaurs at scale — a favourite for older children's rooms."
  },
  {
    "id": "MU-060",
    "name": "Kids MU-060",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-105342.jpg",
    "description": "Soft balloons and stars for a gentle, dreamy nursery."
  },
  {
    "id": "MU-061",
    "name": "Kids MU-061",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-105355.jpg",
    "description": "A colourful learning wall for playrooms and daycare spaces."
  },
  {
    "id": "MU-062",
    "name": "Kids MU-062",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-105411.jpg",
    "description": "Whimsical animals in muted colours that still work as a child grows."
  },
  {
    "id": "MU-063",
    "name": "Landscapes & seascapes MU-063",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-113519.jpg",
    "description": "A wide, open horizon printed to your wall size — it gives small rooms a sense of depth and distance."
  },
  {
    "id": "MU-064",
    "name": "Landscapes & seascapes MU-064",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-113635.jpg",
    "description": "Misty hills and layered light that bring a calm, restful mood to bedrooms."
  },
  {
    "id": "MU-065",
    "name": "Landscapes & seascapes MU-065",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-113732.jpg",
    "description": "Coastal water and soft sky, printed large for a serene feature wall."
  },
  {
    "id": "MU-066",
    "name": "Landscapes & seascapes MU-066",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-113754.jpg",
    "description": "Golden-hour tones that warm living rooms without dominating the furniture."
  },
  {
    "id": "MU-067",
    "name": "Landscapes & seascapes MU-067",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-113850.jpg",
    "description": "A quiet forest scene that suits studies and reading corners."
  },
  {
    "id": "MU-068",
    "name": "Landscapes & seascapes MU-068",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-113907.jpg",
    "description": "Mountain ridges in cool blues, pairing well with grey and timber interiors."
  },
  {
    "id": "MU-069",
    "name": "Landscapes & seascapes MU-069",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114000.jpg",
    "description": "Sunlit fields that lift windowless hallways and stairwells."
  },
  {
    "id": "MU-070",
    "name": "Landscapes & seascapes MU-070",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114019.jpg",
    "description": "A gentle sea view for bathrooms and spa rooms, printed on moisture-tolerant material."
  },
  {
    "id": "MU-071",
    "name": "Landscapes & seascapes MU-071",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114033.jpg",
    "description": "Wide sky and still water — a restful backdrop behind a bed or sofa."
  },
  {
    "id": "MU-072",
    "name": "Landscapes & seascapes MU-072",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114053.jpg",
    "description": "Dramatic cliffs and surf for a bolder statement in dining rooms."
  },
  {
    "id": "MU-073",
    "name": "Landscapes & seascapes MU-073",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114108.jpg",
    "description": "Soft dawn light that makes north-facing rooms feel warmer."
  },
  {
    "id": "MU-074",
    "name": "Landscapes & seascapes MU-074",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114128.jpg",
    "description": "Layered valleys that give a long wall a real sense of perspective."
  },
  {
    "id": "MU-075",
    "name": "Landscapes & seascapes MU-075",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114151.jpg",
    "description": "Autumn tones for rooms styled in rust, cream and brass."
  },
  {
    "id": "MU-076",
    "name": "Landscapes & seascapes MU-076",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114226.jpg",
    "description": "Tranquil lakeside scene, well suited to clinics and waiting areas."
  },
  {
    "id": "MU-077",
    "name": "Landscapes & seascapes MU-077",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114242.jpg",
    "description": "A pale, hazy landscape that acts almost as texture rather than picture."
  },
  {
    "id": "MU-078",
    "name": "Landscapes & seascapes MU-078",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114306.jpg",
    "description": "Green terraces and open sky, printed to fit wall to wall."
  },
  {
    "id": "MU-079",
    "name": "Maps MU-079",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-123853.jpg",
    "description": "A world map printed to your wall size — decorative in a study and genuinely useful in a child's room."
  },
  {
    "id": "MU-080",
    "name": "Maps MU-080",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-123933.jpg",
    "description": "Vintage cartography in sepia tones for a library or home office."
  },
  {
    "id": "MU-081",
    "name": "Maps MU-081",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-123953.jpg",
    "description": "A clean, modern map in muted colour that works in open-plan living."
  },
  {
    "id": "MU-082",
    "name": "Maps MU-082",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-124012.jpg",
    "description": "Ocean-blue detailing that makes a long wall feel considered."
  },
  {
    "id": "MU-083",
    "name": "Maps MU-083",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-124026.jpg",
    "description": "A political map with legible place names at reading distance."
  },
  {
    "id": "MU-084",
    "name": "Maps MU-084",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-124042.jpg",
    "description": "Antique-style chart with compass detail for traditional interiors."
  },
  {
    "id": "MU-085",
    "name": "Maps MU-085",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-124057.jpg",
    "description": "Continental outlines in soft neutrals — map as pattern rather than reference."
  },
  {
    "id": "MU-086",
    "name": "Maps MU-086",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-124110.jpg",
    "description": "A monochrome map for offices and boardrooms."
  },
  {
    "id": "MU-087",
    "name": "Maps MU-087",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-124124.jpg",
    "description": "Warm parchment tones that pair well with leather and dark timber."
  },
  {
    "id": "MU-088",
    "name": "Maps MU-088",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-124139.jpg",
    "description": "A bold, high-contrast map for classrooms and learning spaces."
  },
  {
    "id": "MU-089",
    "name": "Waterfalls MU-089",
    "category": "murals",
    "collection": "Waterfalls",
    "image": "/images/murals-waterfalls/screenshot-2025-04-07-114419.jpg",
    "description": "Falling water printed at scale — the movement brings a sense of freshness to still rooms."
  },
  {
    "id": "MU-090",
    "name": "Waterfalls MU-090",
    "category": "murals",
    "collection": "Waterfalls",
    "image": "/images/murals-waterfalls/screenshot-2025-04-07-114442.jpg",
    "description": "A misty cascade in soft greens, calming in bedrooms and spas."
  },
  {
    "id": "MU-091",
    "name": "Waterfalls MU-091",
    "category": "murals",
    "collection": "Waterfalls",
    "image": "/images/murals-waterfalls/screenshot-2025-04-07-114458.jpg",
    "description": "Rock, spray and light for a bold feature wall in a lounge."
  },
  {
    "id": "MU-092",
    "name": "Waterfalls MU-092",
    "category": "murals",
    "collection": "Waterfalls",
    "image": "/images/murals-waterfalls/screenshot-2025-04-07-114717.jpg",
    "description": "A gentle forest fall, well suited to bathrooms and wet rooms."
  },
  {
    "id": "MU-093",
    "name": "Waterfalls MU-093",
    "category": "murals",
    "collection": "Waterfalls",
    "image": "/images/murals-waterfalls/screenshot-2025-04-07-115348.jpg",
    "description": "Tiered water and pools that give a long wall real depth."
  },
  {
    "id": "MU-094",
    "name": "Waterfalls MU-094",
    "category": "murals",
    "collection": "Waterfalls",
    "image": "/images/murals-waterfalls/screenshot-2025-04-07-115441.jpg",
    "description": "Sunlit spray in warm tones for a brighter, uplifting scheme."
  },
  {
    "id": "MU-095",
    "name": "Wildlife MU-095",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/633d420b-ccda-4848-9533-afdaab8107be.jpg",
    "description": "A close-up animal portrait printed at scale for a striking feature wall."
  },
  {
    "id": "MU-096",
    "name": "Wildlife MU-096",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112257.jpg",
    "description": "Savannah wildlife in warm, dusty tones that suit leather and timber."
  },
  {
    "id": "MU-097",
    "name": "Wildlife MU-097",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112327.jpg",
    "description": "Birds in flight across a pale ground, light enough for a bedroom."
  },
  {
    "id": "MU-098",
    "name": "Wildlife MU-098",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112341.jpg",
    "description": "A powerful big-cat study for lounges and studies wanting real presence."
  },
  {
    "id": "MU-099",
    "name": "Wildlife MU-099",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112400.jpg",
    "description": "Elephants at the waterhole, printed wide for a long living-room wall."
  },
  {
    "id": "MU-100",
    "name": "Wildlife MU-100",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112415.jpg",
    "description": "Tropical birds and foliage that bring colour to a dining space."
  },
  {
    "id": "MU-101",
    "name": "Wildlife MU-101",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112430.jpg",
    "description": "A monochrome animal study for interiors kept deliberately restrained."
  },
  {
    "id": "MU-102",
    "name": "Wildlife MU-102",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112503.jpg",
    "description": "Grazing herds under open sky, giving a wall genuine depth."
  },
  {
    "id": "MU-103",
    "name": "Wildlife MU-103",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112518.jpg",
    "description": "Underwater life in cool blues, a favourite for bathrooms."
  },
  {
    "id": "MU-104",
    "name": "Wildlife MU-104",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112532.jpg",
    "description": "A single bold portrait that works well in a narrow hallway."
  },
  {
    "id": "MU-105",
    "name": "Wildlife MU-105",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112552.jpg",
    "description": "Forest wildlife in soft greens for calm, natural schemes."
  },
  {
    "id": "MU-106",
    "name": "Wildlife MU-106",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112812.jpg",
    "description": "Detailed feather and fur texture that rewards a closer look."
  }
];

export const featuredProducts: Product[] = products.filter((_, i) => i % 11 === 0).slice(0, 8);
