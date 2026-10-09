// AUTO-GENERATED from the client Google Drive catalogue. Safe to edit by hand.
export type ProductCategoryId =
  "wallpapers" | 
  "contact-papers" | 
  "murals" | 
  "window-blinds" | 
  "window-films" | 
  "carpets" | 
  "wall-panels" |
  "media-wall";

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
  },
  {
    "id": "media-wall",
    "label": "Media Wall",
    "description": "Bespoke TV feature walls, LED backlit slat panels, marble porcelain slabs, and acoustic fireplace media units."
  }
];

export const collections: { category: ProductCategoryId; label: string }[] = [
  { "category": "media-wall", "label": "Slat & Fluted Media Walls" },
  { "category": "media-wall", "label": "Marble & Stone Media Walls" },
  { "category": "media-wall", "label": "Fireplace & Acoustic Media Walls" },
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
    "description": "Precision-cut vertical fluted wainscoting designed to introduce architectural texture and warmth to interior spaces. Ideal for crafting sophisticated feature walls, defining reception areas, or structurally enhancing contemporary living rooms."
  },
  {
    "id": "WPN-002",
    "name": "PU stone cladding WPN-002",
    "category": "wall-panels",
    "collection": "PU stone panels",
    "image": "/images/wall-panels/pu-stone-panel.jpg",
    "description": "Premium polyurethane stone veneer offering the authentic, rugged aesthetic of natural masonry. Engineered for lightweight installation without the structural load or complex wet-work associated with traditional stone cladding."
  },
  {
    "id": "WPN-003",
    "name": "Box design panels WPN-003",
    "category": "wall-panels",
    "collection": "Box & concave designs",
    "image": "/images/wall-panels/concave-box-panel.jpg",
    "description": "Sculptural concave and box panelling designed to interact dynamically with ambient lighting. A bold, geometric solution that adds distinctive character and dimension to minimalist architectural environments."
  },
  {
    "id": "WP-001",
    "name": "Suede-look plain roll",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-0956.jpg",
    "description": "A refined, tactile wallcovering offering the rich, matte appearance of fine suede. Carefully balanced to function as an understated yet luxurious backdrop that does not overpower existing interior furnishings."
  },
  {
    "id": "WP-002",
    "name": "Silver grasscloth stripe",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-0963.jpg",
    "description": "Sophisticated natural grasscloth texture layered with a subtle silver stripe. This elegant design captures ambient light beautifully along its vertical weave, expanding the visual height of any room."
  },
  {
    "id": "WP-003",
    "name": "Ivory smooth plain",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-0978.jpg",
    "description": "A pristine, smooth ivory wallcovering designed to reflect maximum natural light. Perfect for illuminating darker spaces and serving as a crisp canvas for statement art and dark timber elements."
  },
  {
    "id": "WP-004",
    "name": "Blush linen texture",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-0987.jpg",
    "description": "A delicate blush wallcovering featuring a convincing linen weave. Formulated to introduce a soft, powdery warmth to bedrooms and private dressing areas while maintaining a highly tailored finish."
  },
  {
    "id": "WP-005",
    "name": "Warm grey linen weave",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-1007.jpg",
    "description": "Highly versatile warm grey wallcovering with a subtle, structured linen texture. Specially tinted to coordinate effortlessly with both cool charcoal accents and warm cream interior palettes."
  },
  {
    "id": "WP-006",
    "name": "Pale rose striated",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-1016.jpg",
    "description": "A delicate, striated wallcovering in muted rose. The gentle vertical grain adds elegant height to the room while establishing a calm, restful atmosphere suited for master suites and quiet snugs."
  },
  {
    "id": "WP-007",
    "name": "Stone-grey plain roll",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/img-1025.jpg",
    "description": "A clean, architectural stone-grey wallcovering optimized for modern spaces. Engineered to provide a robust, unified background that allows furniture and curated art pieces to take centre stage."
  },
  {
    "id": "WP-008",
    "name": "Cream textured trio",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/whatsapp-image-2026-06-29-at-12-01-33-1.jpg",
    "description": "A collection of three complementary cream textures. Designed to be layered across adjoining walls, alcoves, and panels, delivering subtle variations that create a cohesive, custom-designed interior."
  },
  {
    "id": "WP-009",
    "name": "Colour range selection",
    "category": "wallpapers",
    "collection": "Wallpaper rolls",
    "image": "/images/wallpapers/whatsapp-image-2026-07-11-at-15-01-06.jpg",
    "description": "A comprehensive palette selection of high-quality textured papers. Developed to ensure seamless colour flow between adjoining rooms while maintaining a consistent tactile quality throughout the property."
  },
  {
    "id": "CP-001",
    "name": "Contact papers CP-001",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/0a409a39-a68d-45dd-b12e-a6aaf7233298.jpg",
    "description": "High-grade, self-adhesive architectural film designed to seamlessly resurface aging cabinetry. An efficient, dust-free alternative to repainting that guarantees a flawless, factory-quality finish."
  },
  {
    "id": "CP-002",
    "name": "Contact papers CP-002",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/71-lsgpctel-ac-uf894-1000-ql80-fmwebp.jpg",
    "description": "A robust architectural film featuring an incredibly convincing stone finish. Ideal for instantly upgrading kitchen worktop facings, island panels, and utility room surfaces with a premium aesthetic."
  },
  {
    "id": "CP-003",
    "name": "Contact papers CP-003",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/71bybimykgl-ac-uf894-1000-ql80-fmwebp.jpg",
    "description": "Engineered timber-grain adhesive film offering natural warmth and realistic texture. Perfectly suited for restoring built-in wardrobes, interior doors, and custom shelving units to a pristine wood finish."
  },
  {
    "id": "CP-004",
    "name": "Contact papers CP-004",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/71cu1wabekl-ac-uf894-1000-ql80-fmwebp.jpg",
    "description": "Heavy-duty, wipe-clean vinyl surface designed specifically for high-moisture environments. Provides excellent resistance against spills and splashes around kitchen sinks and laundry worktops."
  },
  {
    "id": "CP-005",
    "name": "Contact papers CP-005",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/71jmarbzqsl-ac-uf894-1000-ql80-fmwebp.jpg",
    "description": "An ultra-smooth, matte-finish architectural film. Once properly applied, this material mimics the precise look and feel of professionally spray-painted wooden or metal surfaces."
  },
  {
    "id": "CP-006",
    "name": "Contact papers CP-006",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/71x8j9ldhpl-ac-uf894-1000-ql80-fmwebp.jpg",
    "description": "A refined surfacing film with a subtle integrated sheen. Engineered to catch ambient light smoothly along drawer fronts, side panels, and modern flat-pack furniture upgrades."
  },
  {
    "id": "CP-007",
    "name": "Contact papers CP-007",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/81anj6thvml-ac-uf894-1000-ql80-fmwebp.jpg",
    "description": "A premium removable architectural film ideal for rental properties. Designed to deliver an immediate, high-end upgrade to kitchen units that cleanly lifts away without surface damage."
  },
  {
    "id": "CP-008",
    "name": "Contact papers CP-008",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/81khwlnvdtl-ac-uf894-1000-ql80-fmwebp.jpg",
    "description": "Self-adhesive film featuring intricate natural marble veining. Introduces immediate luxury and sophistication to vanity tops, side tables, and compact surfaces at a fraction of the cost of real stone."
  },
  {
    "id": "CP-009",
    "name": "Contact papers CP-009",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/619h9x3xbwl-ac-uf894-1000-ql80-fmwebp.jpg",
    "description": "A crisp, highly contemporary surface finish. Exceptionally durable and designed specifically to cleanly reface study desks, low sideboards, and heavy-use built-in modular units."
  },
  {
    "id": "CP-010",
    "name": "Contact papers CP-010",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/711sueviwml-ac-uf894-1000-ql80-fmwebp.jpg",
    "description": "An ultra-durable, scratch-resistant film formulation. Built to withstand the daily impact and wear inherent in busy family kitchens and heavily utilized utility rooms."
  },
  {
    "id": "CP-011",
    "name": "Contact papers CP-011",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/d6687c76-6957-4325-97a7-6dcc9370329f.jpg",
    "description": "Rich, deep-toned architectural film that effectively grounds lighter interior schemes when applied strategically to lower cabinetry and structural plinths."
  },
  {
    "id": "CP-012",
    "name": "Contact papers CP-012",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/e71e0c16-f17e-496d-af60-ab3d84569269.jpg",
    "description": "A highly reflective, bright surfacing film optimized for compact kitchens and utility spaces. Engineered to bounce ambient light and create an immediate sense of spaciousness."
  },
  {
    "id": "CP-013",
    "name": "Contact papers CP-013",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/img-20250123-194928-0515.jpg",
    "description": "Premium film featuring a distinctive, tactile grain structure. Designed to upgrade standard flat-pack furniture into bespoke, solid-feeling pieces."
  },
  {
    "id": "CP-014",
    "name": "Contact papers CP-014",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/img-20240525-wa0001.jpg",
    "description": "A refined, utilitarian facing film developed to neatly conceal appliance flanks, exposed cupboard interiors, and challenging architectural angles."
  },
  {
    "id": "CP-015",
    "name": "Contact papers CP-015",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/img-20250220-wa0017.jpg",
    "description": "A quietly sophisticated pattern that integrates flawlessly with premium hardware. An excellent companion for brushed steel, matte black, or aged brass fixtures."
  },
  {
    "id": "CP-016",
    "name": "Contact papers CP-016",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/img-20250221-wa0039.jpg",
    "description": "Elegant surfacing film in a soft, chalky palette. Carefully balanced to pair beautifully alongside authentic terrazzo floors and natural stone worktops."
  },
  {
    "id": "CP-017",
    "name": "Contact papers CP-017",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/mmexport1734180900180.jpg",
    "description": "Moisture-resistant decorative film offering a rapid, high-impact aesthetic upgrade for bathroom vanities and integrated sanitary storage units."
  },
  {
    "id": "CP-018",
    "name": "Contact papers CP-018",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/mmexport1741702068216.jpg",
    "description": "A timeless classic finish designed for longevity and enduring appeal. An ideal solution for maintaining a sophisticated kitchen aesthetic without leaning into fleeting interior trends."
  },
  {
    "id": "CP-019",
    "name": "Contact papers CP-019",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/mmexport1751371510911.jpg",
    "description": "A striking contrasting tone formulated specifically to execute modern two-tone cabinetry designs with immaculate precision."
  },
  {
    "id": "CP-020",
    "name": "Contact papers CP-020",
    "category": "contact-papers",
    "collection": "Contact papers",
    "image": "/images/contact-papers/mmexport1751371513211.jpg",
    "description": "A clean, minimalist wrapping solution tailored for wall niches, bespoke headboards, and the precise detailing of exposed shelving edges."
  },
  {
    "id": "CF-001",
    "name": "Artificial grass turf CF-001",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/30mm-grass-2.jpg",
    "description": "Premium 30mm artificial turf featuring incredibly soft, resilient blades. An excellent, maintenance-free solution for ensuring balconies and urban terraces remain lush and green year-round."
  },
  {
    "id": "CF-002",
    "name": "Artificial grass turf CF-002",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/30mm-grass-3.jpg",
    "description": "A high-density synthetic turf designed with a natural, shock-absorbing spring. Perfect for transforming concrete rooftop environments into comfortable, barefoot-friendly lounging areas."
  },
  {
    "id": "CF-003",
    "name": "Artificial grass turf CF-003",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/40mm-grass-1.jpg",
    "description": "Exceptionally hard-wearing 40mm grass turf engineered for rigorous daily traffic. Specially constructed to remain consistently level and presentable in active family play areas."
  },
  {
    "id": "CF-004",
    "name": "Artificial grass turf CF-004",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/40mm-grass-2.jpg",
    "description": "Advanced synthetic turf utilizing a nuanced two-tone blade mixture. This meticulous design accurately replicates the organic variation of natural lawns, completely avoiding the flat look of inferior alternatives."
  },
  {
    "id": "CF-005",
    "name": "Artificial grass turf CF-005",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/artificial-grass-1.jpg",
    "description": "A sharply tailored, short-pile artificial grass. Formulated to provide clean, crisp edging for architectural pathways, immaculate poolside surrounds, and compact interior courtyards."
  },
  {
    "id": "CF-006",
    "name": "Artificial grass turf CF-006",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/artificial-grass-2.jpg",
    "description": "High-performance synthetic grass featuring an advanced, rapid-draining backing system. Designed specifically to handle heavy tropical downpours without surface water pooling."
  },
  {
    "id": "CF-007",
    "name": "Artificial grass turf CF-007",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/artificial-grass-3.jpg",
    "description": "Vibrant, deep-green artificial turf manufactured with superior UV-stabilized yarns. Guaranteed to retain its rich color depth even when subjected to intense, prolonged equatorial sunlight."
  },
  {
    "id": "CF-008",
    "name": "Artificial grass turf CF-008",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/artificial-grass-6.jpg",
    "description": "A highly versatile, low-profile grass product perfect for immediate commercial installations. Frequently specified for stylish shopfronts, exhibition stands, and temporary pop-up event spaces."
  },
  {
    "id": "CF-009",
    "name": "Artificial grass turf CF-009",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/artificial-grass-7.jpg",
    "description": "Luxuriously soft synthetic turf emphasizing tactile comfort. Its gentle texture makes it a highly sought-after, playful flooring choice for modern nurseries, indoor snugs, and children's dens."
  },
  {
    "id": "CF-010",
    "name": "Artificial grass turf CF-010",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/artificial-grass-9.jpg",
    "description": "A specialized low-pile grass material optimized for precision fitting. The ideal structural choice for wrapping stairs, architectural ledges, and executing imaginative vertical garden detailing."
  },
  {
    "id": "CF-011",
    "name": "Artificial grass turf CF-011",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/artificial-grass-10.jpg",
    "description": "Lush, extended-blade synthetic grass designed for residential gardens and sophisticated outdoor living areas requiring a remarkably natural, unmanicured appearance."
  },
  {
    "id": "CF-012",
    "name": "Artificial grass turf CF-012",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/artificial-grass-11.jpg",
    "description": "Highly flexible turf construction engineered for complex landscaping. Effortlessly cuts to precise shapes around built-in planters, curved paving, and bespoke border edging."
  },
  {
    "id": "CF-013",
    "name": "Artificial grass turf CF-013",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/factory-material-pp.jpg",
    "description": "A specialized pet-friendly grass solution. Manufactured with non-absorbent fibers and an enhanced drainage matrix that allows for rapid rinsing and uncompromising daily hygiene."
  },
  {
    "id": "CF-014",
    "name": "Artificial grass turf CF-014",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/grass-backer.jpg",
    "description": "The definitive solution for heavily shaded urban courtyards where natural grass repeatedly fails. Delivers a consistently pristine green aesthetic requiring zero horticultural maintenance."
  },
  {
    "id": "CF-015",
    "name": "Artificial grass turf CF-015",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/grass-roll-1.jpg",
    "description": "A deeply sprung artificial pile that drastically softens the acoustics and impact on harsh concrete balconies, turning neglected outdoor extensions into inviting living spaces."
  },
  {
    "id": "CF-016",
    "name": "Artificial grass turf CF-016",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/grass-roll-2.jpg",
    "description": "Commercial-grade grass rolls manufactured to ensure flawless color consistency across vast spans. The premier choice for large corporate breakout areas and expansive showroom floors."
  },
  {
    "id": "CF-017",
    "name": "Artificial grass turf CF-017",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/img-0754.jpg",
    "description": "Ultra-resilient synthetic grass uniquely suited for indoor athletic spaces. Provides excellent traction, minimal friction, and a distinctive visual anchor for modern gyms and workout studios."
  },
  {
    "id": "CF-018",
    "name": "Artificial grass turf CF-018",
    "category": "carpets",
    "collection": "Artificial grass turf",
    "image": "/images/grass-carpets/img-0760.jpg",
    "description": "Crisp, architectural turf designed specifically to contrast elegantly against hard landscaping. Ideal for framing composite decking, sophisticated patios, and elevated rooftop bars."
  },
  {
    "id": "CF-019",
    "name": "Wall-to-wall carpets CF-019",
    "category": "carpets",
    "collection": "Wall-to-wall carpets",
    "image": "/images/carpets/mmexport1750486440229.jpg",
    "description": "A premium, dense broadloom carpet engineered specifically for luxury wall-to-wall installations. Delivers exceptional acoustic dampening and unrivaled underfoot comfort for sophisticated master suites."
  },
  {
    "id": "CF-021",
    "name": "Wall-to-wall carpets CF-021",
    "category": "carpets",
    "collection": "Wall-to-wall carpets",
    "image": "/images/carpets/mmexport1750486444587.jpg",
    "description": "Exceptionally hard-wearing commercial carpet in a sophisticated neutral tone. Highly recommended for high-traffic environments including executive offices, stairs, and premium rental properties."
  },
  {
    "id": "WB-001",
    "name": "Window blinds WB-001",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/1-1.jpg",
    "description": "Precision made-to-measure blinds designed to efficiently filter harsh direct sunlight into a soft, ambient glow. An indispensable treatment for west-facing living spaces."
  },
  {
    "id": "WB-002",
    "name": "Window blinds WB-002",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/3.jpg",
    "description": "A sharply constructed roller blind offering a meticulously clean architectural line. Retracts discreetly into a minimal housing to preserve an uninterrupted view in contemporary, minimalist spaces."
  },
  {
    "id": "WB-003",
    "name": "Window blinds WB-003",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/4.jpg",
    "description": "Sophisticated semi-transparent double-layer blinds. Engineered to offer complete control over incoming daylight and exterior privacy without ever sacrificing the connection to your view."
  },
  {
    "id": "WB-004",
    "name": "Window blinds WB-004",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/5.jpg",
    "description": "Premium vertical louvres that operate with silent, sweeping precision across expansive glazing and bi-fold doors. An elegant, highly functional solution for large-scale domestic and commercial windows."
  },
  {
    "id": "WB-005",
    "name": "Window blinds WB-005",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/6.jpg",
    "description": "A beautifully tailored screen explicitly designed for bedroom environments. Combines gentle light filtration during the day with robust, reassuring coverage at night."
  },
  {
    "id": "WB-006",
    "name": "Window blinds WB-006",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/7.jpg",
    "description": "A highly versatile, neutral-toned fabric blind featuring an elegant, fine weave. Effortlessly compliments a wide gamut of interiors, from warm natural timbers to sleek industrial greys."
  },
  {
    "id": "WB-007",
    "name": "Window blinds WB-007",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/8.jpg",
    "description": "Professional-grade blackout-weighted cloth blinds. The uncompromising choice for dedicated home cinemas, photography studios, and nurseries where total light elimination is non-negotiable."
  },
  {
    "id": "WB-008",
    "name": "Window blinds WB-008",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/9.jpg",
    "description": "An ultra-slim, contemporary blind system uniquely tailored for corporate offices and reception areas requiring highly effective screen glare control without sacrificing exterior views."
  },
  {
    "id": "WB-009",
    "name": "Window blinds WB-009",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/10.jpg",
    "description": "A richly textured blind fabric that introduces subtle, tactile depth to otherwise minimal flat-painted walls, elevating the calming atmosphere of any modern living space."
  },
  {
    "id": "WB-010",
    "name": "Window blinds WB-010",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/11.jpg",
    "description": "Precision-manufactured to sit perfectly flush within the window reveal. This close-mounting design is exceptionally elegant in luxury bathrooms and streamlined kitchens where space is at a premium."
  },
  {
    "id": "WB-011",
    "name": "Window blinds WB-011",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/12.jpg",
    "description": "Engineered for optimal light diffusion. Protects sensitive fabrics, artwork, and timber floors from direct UV degradation while maintaining a bright, well-lit interior atmosphere."
  },
  {
    "id": "WB-012",
    "name": "Window blinds WB-012",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/13.jpg",
    "description": "A highly sophisticated dual-layered system alternating sheer and opaque bands. Allows seamless transitioning from brilliant morning light to intimately shaded evening environments."
  },
  {
    "id": "WB-013",
    "name": "Window blinds WB-013",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/14.jpg",
    "description": "Minimalist, clean-lined coverage specifically developed for high stairwells and transitional landings, prioritizing reliable, fuss-free daily operation."
  },
  {
    "id": "WB-014",
    "name": "Window blinds WB-014",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/15.jpg",
    "description": "Woven with warm-toned yarns designed to color-correct stark, cold light. Immediately lifts north-facing rooms with a remarkably gentle, sunlit cast."
  },
  {
    "id": "WB-015",
    "name": "Window blinds WB-015",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/18.jpg",
    "description": "Richly saturated, deep-toned cloth designed to introduce dramatic visual weight and gravitas to formal dining spaces, studies, and executive suites."
  },
  {
    "id": "WB-016",
    "name": "Window blinds WB-016",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/19.jpg",
    "description": "A robust, low-maintenance surface material that wipes completely clean with a damp cloth. Strongly recommended for active family kitchens, playrooms, and utility spaces."
  },
  {
    "id": "WB-017",
    "name": "Window blinds WB-017",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/21.jpg",
    "description": "Micro-perforated sunscreen fabric engineered to drastically reduce solar heat gain and monitor glare while preserving 95% of your exterior visibility."
  },
  {
    "id": "WB-018",
    "name": "Window blinds WB-018",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/22.jpg",
    "description": "A structurally reinforced, tailored finish designed for double-height glazing and tall townhouse windows, ensuring a perfectly straight, undeviating hang across extended drops."
  },
  {
    "id": "WB-019",
    "name": "Window blinds WB-019",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/25.jpg",
    "description": "A refined micro-pattern that registers as a solid, sophisticated texture from a distance. Imparts a quiet, highly considered elegance without demanding primary attention."
  },
  {
    "id": "WB-020",
    "name": "Window blinds WB-020",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/26.jpg",
    "description": "Features an ultra-sleek, color-matched headrail and low-profile hardware. Conceived specifically to keep the visual focus entirely on the window framing and surrounding architecture."
  },
  {
    "id": "WB-021",
    "name": "Window blinds WB-021",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/27.jpg",
    "description": "The quintessential solution for rental properties and high-turnover offices. Combines supreme operational durability, a universally flattering neutral tone, and effortless usability."
  },
  {
    "id": "WB-022",
    "name": "Window blinds WB-022",
    "category": "window-blinds",
    "collection": "Window blinds",
    "image": "/images/window-blinds/28.jpg",
    "description": "Dynamic, multi-stage light control engineered for complex open-plan interiors where a single expansive window must serve varying functional zones simultaneously."
  },
  {
    "id": "WF-001",
    "name": "Window films WF-001",
    "category": "window-films",
    "collection": "Window films",
    "image": "/images/window-films/img-0155.jpg",
    "description": "Premium frosted finishing film designed to guarantee absolute privacy for street-facing windows and bathrooms while permitting excellent transmission of diffuse natural daylight."
  },
  {
    "id": "WF-002",
    "name": "Window films WF-002",
    "category": "window-films",
    "collection": "Window films",
    "image": "/images/window-films/img-5579.jpg",
    "description": "High-performance solar control tinted film. Dramatically reduces infrared heat loading and blinding glare on significantly exposed, sun-facing exterior glass."
  },
  {
    "id": "WF-003",
    "name": "Window films WF-003",
    "category": "window-films",
    "collection": "Window films",
    "image": "/images/window-films/img-5584.jpg",
    "description": "An intricate decorative glass film designed to elevate standard structural partitions into highly sophisticated, bespoke interior design focal points."
  },
  {
    "id": "WF-004",
    "name": "Window films WF-004",
    "category": "window-films",
    "collection": "Window films",
    "image": "/images/window-films/img-6079.jpg",
    "description": "A calculated fine-line privacy band. Optimized for modern glass-walled offices to provide crucial visual privacy at seated desk height without interrupting the wider room's lighting."
  },
  {
    "id": "WF-005",
    "name": "Window films WF-005",
    "category": "window-films",
    "collection": "Window films",
    "image": "/images/window-films/img-6621.jpg",
    "description": "Advanced one-way mirror-effect composite film. Provides exceptional daytime security and privacy for ground-floor glazing and highly exposed urban apartments."
  },
  {
    "id": "MU-001",
    "name": "Art, lines & patterns MU-001",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-121942.jpg",
    "description": "Continuous, continuous flowing linework rendered at imposing scale. Transforms flat architectural surfaces into dynamic, gallery-quality installations."
  },
  {
    "id": "MU-002",
    "name": "Art, lines & patterns MU-002",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122013.jpg",
    "description": "Exquisite abstract brushwork executed in a highly sophisticated, muted palette. Introduces the impact of large-scale fine art without the visual clutter of traditional framing."
  },
  {
    "id": "MU-003",
    "name": "Art, lines & patterns MU-003",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122038.jpg",
    "description": "A structured, geometric repeat explicitly designed to establish a sense of visual rhythm. Highly effective along extensive transitional spaces such as hallways and staircases."
  },
  {
    "id": "MU-004",
    "name": "Art, lines & patterns MU-004",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122127.jpg",
    "description": "Fluid, organic marbled swirling that acts as a profound statement backdrop. Elevates the surrounding upholstery and grounds spacious master suites."
  },
  {
    "id": "MU-005",
    "name": "Art, lines & patterns MU-005",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122141.jpg",
    "description": "Intricate, gold-toned linework striking against a deeply saturated background. Conceived to introduce evening drama to formal dining environments."
  },
  {
    "id": "MU-006",
    "name": "Art, lines & patterns MU-006",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122200.jpg",
    "description": "A sophisticated textural illusion replicating aged, hand-troweled plaster. Exceptionally effective at imparting immediate character to sterile new-build architectures."
  },
  {
    "id": "MU-007",
    "name": "Art, lines & patterns MU-007",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122213.jpg",
    "description": "A deeply calm composition prioritizing sweeping minimal arcs and gentle curves. Specially created to anchor relaxed, modern living environments."
  },
  {
    "id": "MU-008",
    "name": "Art, lines & patterns MU-008",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122302.jpg",
    "description": "Confident, large-scale color blocking spanning the entire wall dimension. Provides strong spatial definition essential for breaking up vast open-plan living areas."
  },
  {
    "id": "MU-009",
    "name": "Art, lines & patterns MU-009",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122319.jpg",
    "description": "Exceedingly delicate botanical illustration blown up to architectural scale. Recommended for infusing powder rooms and private sanctuaries with refined delicacy."
  },
  {
    "id": "MU-010",
    "name": "Art, lines & patterns MU-010",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122342.jpg",
    "description": "A sweeping abstract composition acting as an expansive, unified focal point. The ultimate modern alternative for feature walls awaiting statement art acquisition."
  },
  {
    "id": "MU-011",
    "name": "Art, lines & patterns MU-011",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122419.jpg",
    "description": "Nuanced, tonal washes mapped to interact with shifting environmental light. Designed specifically to evolve visually throughout the day's changing shadows."
  },
  {
    "id": "MU-012",
    "name": "Art, lines & patterns MU-012",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122444.jpg",
    "description": "A sharp, definitive graphic repeat pattern heavily favored in rigorous commercial applications, upscale salons, and bold residential studies."
  },
  {
    "id": "MU-013",
    "name": "Art, lines & patterns MU-013",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122506.jpg",
    "description": "Subtle, integrated metallic accents woven within an understated ground. Strategically formulated to catch and amplify low-level evening lamplight."
  },
  {
    "id": "MU-014",
    "name": "Art, lines & patterns MU-014",
    "category": "murals",
    "collection": "Art, lines & patterns",
    "image": "/images/murals-art/screenshot-2025-04-07-122522.jpg",
    "description": "Quiet, confident, ink-wash techniques suspended over a minimalist pale background. An inherently sophisticated backdrop that yields to the room's broader design intent."
  },
  {
    "id": "MU-015",
    "name": "Broken wall 3D MU-015",
    "category": "murals",
    "collection": "Broken wall 3D",
    "image": "/images/murals-broken-wall/screenshot-2025-04-07-111248.jpg",
    "description": "An expertly rendered trompe-l'oeil effect creating a convincing structural break that opens onto an expansive view. A highly effective technique for forcefully expanding the perceived depth of an enclosed room."
  },
  {
    "id": "MU-016",
    "name": "Broken wall 3D MU-016",
    "category": "murals",
    "collection": "Broken wall 3D",
    "image": "/images/murals-broken-wall/screenshot-2025-04-07-111353.jpg",
    "description": "Hyper-realistic cracked concrete texture revealing lush botanical elements beneath. Introduces striking, unexpected depth and an engaging narrative to otherwise flat, restrictive wall dimensions."
  },
  {
    "id": "MU-017",
    "name": "Broken wall 3D MU-017",
    "category": "murals",
    "collection": "Broken wall 3D",
    "image": "/images/murals-broken-wall/screenshot-2025-04-07-111439.jpg",
    "description": "Dramatic masonry failing to reveal open sky. Designed to be printed at full architectural scale, establishing an undisputed, commanding focal point within principal living areas."
  },
  {
    "id": "MU-019",
    "name": "Broken wall 3D MU-019",
    "category": "murals",
    "collection": "Broken wall 3D",
    "image": "/images/murals-broken-wall/screenshot-2025-04-07-111511.jpg",
    "description": "A sophisticated three-dimensional archway illusion. Strategically employed by interior designers to optically elongate narrow corridors and forcefully disrupt claustrophobic hallway proportions."
  },
  {
    "id": "MU-020",
    "name": "Broken wall 3D MU-020",
    "category": "murals",
    "collection": "Broken wall 3D",
    "image": "/images/murals-broken-wall/screenshot-2025-04-07-111525.jpg",
    "description": "Exposed, aged brickwork illuminated by depicted directional sunlight. A bold, industrial-leaning aesthetic choice that completely redefines the atmosphere of modern dining spaces."
  },
  {
    "id": "MU-021",
    "name": "Broken wall 3D MU-021",
    "category": "murals",
    "collection": "Broken wall 3D",
    "image": "/images/murals-broken-wall/screenshot-2025-04-07-111545.jpg",
    "description": "An intense, torn-wall graphic revealing deep coastal waters. engineered to act as a powerful anchor element when installed directly behind primary seating arrangements."
  },
  {
    "id": "MU-022",
    "name": "Broken wall 3D MU-022",
    "category": "murals",
    "collection": "Broken wall 3D",
    "image": "/images/murals-broken-wall/screenshot-2025-04-07-111601.jpg",
    "description": "A precisely calculated illusion of structural depth perfectly suited for creative agencies, modern workspaces, and collaborative zones demanding an engaging visual talking point."
  },
  {
    "id": "MU-023",
    "name": "Broken wall 3D MU-023",
    "category": "murals",
    "collection": "Broken wall 3D",
    "image": "/images/murals-broken-wall/screenshot-2025-04-07-111616.jpg",
    "description": "Rugged, deeply textured stone perimeters organically framing a distant, serene landscape. A brilliant juxtaposition of harsh foreground and tranquil background."
  },
  {
    "id": "MU-024",
    "name": "Broken wall 3D MU-024",
    "category": "murals",
    "collection": "Broken wall 3D",
    "image": "/images/murals-broken-wall/screenshot-2025-04-07-111631.jpg",
    "description": "A high-fidelity dimensional graphic printed with exacting sharpness to ensure the optical illusion remains flawless even upon close, demanding inspection."
  },
  {
    "id": "MU-025",
    "name": "Cityscapes MU-025",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-113701.jpg",
    "description": "An expansive, ultra-wide metropolitan skyline. Meticulously designed to provide windowless apartments and enclosed executive offices with a compelling outward architectural view."
  },
  {
    "id": "MU-026",
    "name": "Cityscapes MU-026",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-120009.jpg",
    "description": "Vibrant nocturnal streetscapes rendered with striking light contrast. Asserts an undeniably bold, cosmopolitan energy perfect for domestic bar areas and modern entertainment lounges."
  },
  {
    "id": "MU-027",
    "name": "Cityscapes MU-027",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-120826.jpg",
    "description": "Intricate monochromatic architectural detailing. A highly disciplined, sharp aesthetic that integrates flawlessly into strictly curated, hyper-modern minimalist interiors."
  },
  {
    "id": "MU-028",
    "name": "Cityscapes MU-028",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-120839.jpg",
    "description": "Suspension bridges and urban rivers captured through a soft, atmospheric haze. Delivers a mature, calming perspective appropriate for master bedrooms and quiet retreats."
  },
  {
    "id": "MU-029",
    "name": "Cityscapes MU-029",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-120916.jpg",
    "description": "An iconic global skyline captured precisely at dusk. Custom-scaled to the exact dimensions of your wall to guarantee perfect compositional balance without awkward cropping."
  },
  {
    "id": "MU-030",
    "name": "Cityscapes MU-030",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-120930.jpg",
    "description": "A dense, highly detailed aerial perspective over urban infrastructure. Intentionally selected to reward continuous, close-range viewing in narrow spaces such as residential hallways."
  },
  {
    "id": "MU-031",
    "name": "Cityscapes MU-031",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-120943.jpg",
    "description": "Warmly illuminated historic streets captured at twilight. Infuses formal dining environments with an undeniable sense of intimacy, warmth, and European heritage."
  },
  {
    "id": "MU-032",
    "name": "Cityscapes MU-032",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-120957.jpg",
    "description": "Soaring contemporary glass towers rendered with crystalline precision. The definitive visual statement for corporate reception areas projecting forward-thinking professionalism."
  },
  {
    "id": "MU-033",
    "name": "Cityscapes MU-033",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-121015.jpg",
    "description": "A thoughtfully graded, vintage-toned cityscape. Specifically sourced to provide compelling depth to interiors that lean heavily on traditional mahogany wood and classic leathers."
  },
  {
    "id": "MU-034",
    "name": "Cityscapes MU-034",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-121033.jpg",
    "description": "A sweeping expanse over historic rooftops into open sky. A proven designer technique for instantly cracking open the visual confines of small, dense study rooms."
  },
  {
    "id": "MU-035",
    "name": "Cityscapes MU-035",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-121047.jpg",
    "description": "High-contrast, neon-drenched urban canyon environments. Highly recommended for dedicated subterranean games rooms and energetic, modern teenage suites."
  },
  {
    "id": "MU-036",
    "name": "Cityscapes MU-036",
    "category": "murals",
    "collection": "Cityscapes",
    "image": "/images/murals-cityscapes/screenshot-2025-04-07-121110.jpg",
    "description": "An exceptionally quiet early dawn skyline captured in pale, misty greys and icy blues. Imparts absolute stillness and clarity to waking environments."
  },
  {
    "id": "MU-037",
    "name": "Clouds & universe MU-037",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124627.jpg",
    "description": "An immersive deep-space graphic optimized for ceiling or full-wall application. A sophisticated yet engaging choice for high-end children's bedrooms and dedicated cinematic spaces."
  },
  {
    "id": "MU-038",
    "name": "Clouds & universe MU-038",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124659.jpg",
    "description": "An ethereal, softly focused cloudscape. Highly effective at optically lifting low ceilings and expanding the perceived volume of enclosed architectural spaces."
  },
  {
    "id": "MU-039",
    "name": "Clouds & universe MU-039",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124713.jpg",
    "description": "A complex nebula composition rendered in rich violets and profound blues. Introduces compelling visual drama and deep color saturation to contemporary sleeping quarters."
  },
  {
    "id": "MU-040",
    "name": "Clouds & universe MU-040",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124728.jpg",
    "description": "A delicate, pale sky wash gradient. Acts as a brilliant architectural tool to artificially lighten and breathe life into windowless interior corridors and basement rooms."
  },
  {
    "id": "MU-041",
    "name": "Clouds & universe MU-041",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124743.jpg",
    "description": "A thoughtfully scaled celestial map featuring recognizable planets and constellations. Blends a premium aesthetic with subtle educational elements for progressive nursery design."
  },
  {
    "id": "MU-042",
    "name": "Clouds & universe MU-042",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124756.jpg",
    "description": "A restrained moonlit cloud composition executed in sophisticated monochrome and muted greys. Delivers an inherently calm maturity rather than overt theatricality."
  },
  {
    "id": "MU-043",
    "name": "Clouds & universe MU-043",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124812.jpg",
    "description": "Luminous sunset cloud formations layered with warm, ambient tones. Exceptionally capable of injecting welcoming warmth into otherwise austere neutral living environments."
  },
  {
    "id": "MU-044",
    "name": "Clouds & universe MU-044",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124826.jpg",
    "description": "A monumental galaxy cross-section exhibiting striking depth of field. Transforms standard media and television walls into captivating, room-defining centerpieces."
  },
  {
    "id": "MU-045",
    "name": "Clouds & universe MU-045",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124840.jpg",
    "description": "A serene interpretation of gentle blue skies and drifting cirrus clouds. Offers a remarkably soothing, upward-looking perspective when utilized on nursery ceilings."
  },
  {
    "id": "MU-046",
    "name": "Clouds & universe MU-046",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124932.jpg",
    "description": "High-fidelity cosmic detailing reproduced with uncompromising resolution. Withstands intense, close-range scrutiny while maintaining its flawless photographic integrity."
  },
  {
    "id": "MU-047",
    "name": "Clouds & universe MU-047",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-124946.jpg",
    "description": "Subtle dawn sky gradients transitioning smoothly from pale gold to soft blue. Curated specifically to harmonize perfectly alongside brass hardware and rich cream finishes."
  },
  {
    "id": "MU-048",
    "name": "Clouds & universe MU-048",
    "category": "murals",
    "collection": "Clouds & universe",
    "image": "/images/murals-clouds/screenshot-2025-04-07-125000.jpg",
    "description": "A profound night sky rendered in deep, saturating indigo. Expertly chosen to cultivate a heavily cocooned, secure, and restful atmosphere within master suites."
  },
  {
    "id": "MU-049",
    "name": "Kids MU-049",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-104706.jpg",
    "description": "A wonderfully engaging illustrative scene custom-scaled to your wall dimensions. Key focal points are purposefully situated at a child's natural eye level for maximum interaction."
  },
  {
    "id": "MU-050",
    "name": "Kids MU-050",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-104706s.jpg",
    "description": "A gentle, narrative-driven pastel composition. Designed with a timeless aesthetic that gracefully matures alongside the evolving requirements of a growing child's room."
  },
  {
    "id": "MU-051",
    "name": "Kids MU-051",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-104732.jpg",
    "description": "Vibrant, highly welcoming artwork engineered to stimulate imagination. Immediately translates a standard, plain bedroom into an inspiring, dedicated play environment."
  },
  {
    "id": "MU-052",
    "name": "Kids MU-052",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-104809.jpg",
    "description": "A remarkably calm woodland tableau cast in soft, desaturated tones. Delivers a cheerful aesthetic during the day without providing overstimulation prior to bedtime."
  },
  {
    "id": "MU-053",
    "name": "Kids MU-053",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-104825.jpg",
    "description": "A dynamic composition of open skies, clouds, and vintage flight mechanics. An exceptional thematic anchor for children fascinated by aviation and aerospace."
  },
  {
    "id": "MU-054",
    "name": "Kids MU-054",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-104840.jpg",
    "description": "An immersive underwater ecosystem illustrated in cooling, tranquil blues. Highly effective when positioned as a continuous backdrop behind low-profile children's beds."
  },
  {
    "id": "MU-055",
    "name": "Kids MU-055",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-104854.jpg",
    "description": "A carefully spaced arrangement of friendly safari fauna. Scales beautifully across extensive walls, making it highly suitable for shared siblings' rooms or communal play spaces."
  },
  {
    "id": "MU-056",
    "name": "Kids MU-056",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-104918.jpg",
    "description": "An enchanting, expansive fairytale castle scene. Utilizes forced perspective to add a magical sense of depth and volume to spatially constrained nursery settings."
  },
  {
    "id": "MU-057",
    "name": "Kids MU-057",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-104936.jpg",
    "description": "Intimate, hand-drawn fine detailing that exudes a sweet, considered quietness. The perfect textural complement for placement near cots, cribs, and quiet changing corners."
  },
  {
    "id": "MU-058",
    "name": "Kids MU-058",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-105314.jpg",
    "description": "An interactive automotive mural with structural road graphics positioned deliberately low. Facilitates and encourages physical, floor-level play directly along the skirting."
  },
  {
    "id": "MU-059",
    "name": "Kids MU-059",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-105329.jpg",
    "description": "Prehistoric subjects illustrated with impressive scale and impact. A consistently popular and slightly more mature thematic choice for older children entering primary years."
  },
  {
    "id": "MU-060",
    "name": "Kids MU-060",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-105342.jpg",
    "description": "A soothing tapestry of soft hot air balloons interspersed with gentle stars. Imparts a decidedly dreamy, tranquil ambiance perfect for establishing optimal sleep routines."
  },
  {
    "id": "MU-061",
    "name": "Kids MU-061",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-105355.jpg",
    "description": "A highly colorful, visually engaging educational wall. Purpose-built to introduce dynamic learning elements into energetic playrooms and professional commercial daycare environments."
  },
  {
    "id": "MU-062",
    "name": "Kids MU-062",
    "category": "murals",
    "collection": "Kids",
    "image": "/images/murals-kids/screenshot-2025-04-07-105411.jpg",
    "description": "Whimsical animal motifs executed in distinctly muted, sophisticated colorways. An elevated approach to children's design that integrates seamlessly with adult-styled adjoining spaces."
  },
  {
    "id": "MU-063",
    "name": "Landscapes & seascapes MU-063",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-113519.jpg",
    "description": "An immense, unending horizon line that acts as a profound spatial expansion tool. Extremely capable of introducing dramatic depth and distance into heavily enclosed rooms."
  },
  {
    "id": "MU-064",
    "name": "Landscapes & seascapes MU-064",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-113635.jpg",
    "description": "Softly rolling, misty hills layered intricately through subtle atmospheric lighting. Sets a remarkably restful, meditative mood ideal for primary bedroom retreats."
  },
  {
    "id": "MU-065",
    "name": "Landscapes & seascapes MU-065",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-113732.jpg",
    "description": "Expansive coastal waters meeting softened skies. A deeply serene composition that effortlessly dominates a main feature wall without aggressive visual demands."
  },
  {
    "id": "MU-066",
    "name": "Landscapes & seascapes MU-066",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-113754.jpg",
    "description": "Radiant golden-hour tones cascading across elevated terrain. Introduces organic, enveloping warmth to living spaces while elegantly complementing adjacent furnishings."
  },
  {
    "id": "MU-067",
    "name": "Landscapes & seascapes MU-067",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-113850.jpg",
    "description": "A dense, deeply sheltered forest interior cast in shadow. Provides a quiet, intellectual atmosphere heavily favored for private reading corners and refined home studies."
  },
  {
    "id": "MU-068",
    "name": "Landscapes & seascapes MU-068",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-113907.jpg",
    "description": "Jagged mountain ridges saturated in cold, striking blues. Acts as a brilliant counterpart to stark industrial greys and raw timber architectural details."
  },
  {
    "id": "MU-069",
    "name": "Landscapes & seascapes MU-069",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114000.jpg",
    "description": "Brilliant, sun-drenched fields radiating light and energy. The ultimate designer solution for immediately breathing life into heavy, windowless stairwells and basements."
  },
  {
    "id": "MU-070",
    "name": "Landscapes & seascapes MU-070",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114019.jpg",
    "description": "A gentle, rolling sea view printed on high-specification, moisture-tolerant substrate. Engineered explicitly to thrive within the demanding environments of bathrooms and home spas."
  },
  {
    "id": "MU-071",
    "name": "Landscapes & seascapes MU-071",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114033.jpg",
    "description": "A vast interplay of wide skies and static, mirror-like waters. Presents a profoundly restful panoramic backdrop perfectly utilized behind low-slung contemporary sofas."
  },
  {
    "id": "MU-072",
    "name": "Landscapes & seascapes MU-072",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114053.jpg",
    "description": "Imposing sea cliffs battered by dramatic oceanic surf. Conveys impressive energy and scale, producing a boldly authoritative statement in formal dining applications."
  },
  {
    "id": "MU-073",
    "name": "Landscapes & seascapes MU-073",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114108.jpg",
    "description": "Delicate, diffused dawn light captured in soft pastel hues. An incredibly effective strategy for introducing an illusion of thermal warmth into cold, north-facing spaces."
  },
  {
    "id": "MU-074",
    "name": "Landscapes & seascapes MU-074",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114128.jpg",
    "description": "Sweeping, deeply layered valleys displaying incredible depth of field. A highly effective optical device for stretching the perceived length of otherwise confined, linear corridors."
  },
  {
    "id": "MU-075",
    "name": "Landscapes & seascapes MU-075",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114151.jpg",
    "description": "Warm, textured autumnal foliage delivering deep visual richness. Designed to seamlessly integrate alongside tactile rust accents, heavy creams, and aged brass fixtures."
  },
  {
    "id": "MU-076",
    "name": "Landscapes & seascapes MU-076",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114226.jpg",
    "description": "A singularly tranquil lakeside setting projecting absolute stillness. Heavily specified by interior architects for commercial wellness clinics and professional waiting zones."
  },
  {
    "id": "MU-077",
    "name": "Landscapes & seascapes MU-077",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114242.jpg",
    "description": "An exceedingly pale, atmospheric landscape rendered through heavy mist. Acts harmoniously as a textural element rather than dictating the room as a primary figurative picture."
  },
  {
    "id": "MU-078",
    "name": "Landscapes & seascapes MU-078",
    "category": "murals",
    "collection": "Landscapes & seascapes",
    "image": "/images/murals-landscapes/screenshot-2025-04-07-114306.jpg",
    "description": "Lush, expansive verdant terraces stretching into an open azure sky. Formulated specifically to be deployed wall-to-wall for an immersive, fully encompassing panoramic experience."
  },
  {
    "id": "MU-079",
    "name": "Maps MU-079",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-123853.jpg",
    "description": "A comprehensively detailed global projection printed at full architectural scale. Delivers severe executive impact in studies while offering immense educational value in family learning spaces."
  },
  {
    "id": "MU-080",
    "name": "Maps MU-080",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-123933.jpg",
    "description": "Authentic vintage cartography reproduction rendered in rich sepia washes. Instills an immediate sense of worldly sophistication perfectly suited for private libraries and executive home offices."
  },
  {
    "id": "MU-081",
    "name": "Maps MU-081",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-123953.jpg",
    "description": "A radically clean, modern mapping aesthetic executed in muted, neutral tones. Operates brilliantly as a subtle graphic anchor within contemporary, open-plan living areas."
  },
  {
    "id": "MU-082",
    "name": "Maps MU-082",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-124012.jpg",
    "description": "Dynamic ocean-blue topography and coastal detailing. Extensively specified to infuse long, unarticulated corridor walls with a highly considered, intentional graphic narrative."
  },
  {
    "id": "MU-083",
    "name": "Maps MU-083",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-124026.jpg",
    "description": "A rigorously precise political map featuring distinctly legible typography. Balances aesthetic presence with functional utility for highly active home offices and studies."
  },
  {
    "id": "MU-084",
    "name": "Maps MU-084",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-124042.jpg",
    "description": "Classic antique-style maritime charts complete with intricate compass rose detailing. Heavily recommended to reinforce the heritage character of traditionally styled interiors."
  },
  {
    "id": "MU-085",
    "name": "Maps MU-085",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-124057.jpg",
    "description": "Abstracted continental outlines rendered in exceptionally soft neutrals. Recontextualizes the map into a pure, sophisticated textural pattern rather than a literal reference tool."
  },
  {
    "id": "MU-086",
    "name": "Maps MU-086",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-124110.jpg",
    "description": "A razor-sharp, strictly monochrome projection. An overwhelmingly popular specification for corporate boardrooms seeking to project a crisp, global perspective."
  },
  {
    "id": "MU-087",
    "name": "Maps MU-087",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-124124.jpg",
    "description": "Richly saturated parchment ground tones evoking historical exploration. Selected explicitly to establish immediate synergy with dark leather upholstery and heavy walnut casework."
  },
  {
    "id": "MU-088",
    "name": "Maps MU-088",
    "category": "murals",
    "collection": "Maps",
    "image": "/images/murals-maps/screenshot-2025-04-07-124139.jpg",
    "description": "An unabashedly bold, high-contrast graphic representation. Intentionally designed to command attention and stimulate interaction in primary classrooms and dedicated learning spaces."
  },
  {
    "id": "MU-089",
    "name": "Waterfalls MU-089",
    "category": "murals",
    "collection": "Waterfalls",
    "image": "/images/murals-waterfalls/screenshot-2025-04-07-114419.jpg",
    "description": "Roaring, large-scale falling water captured with exceptional clarity. Introduces an undeniable sense of kinetic energy and outdoor freshness to utterly still interior environments."
  },
  {
    "id": "MU-090",
    "name": "Waterfalls MU-090",
    "category": "murals",
    "collection": "Waterfalls",
    "image": "/images/murals-waterfalls/screenshot-2025-04-07-114442.jpg",
    "description": "A deeply tranquil, mist-shrouded cascade presented in soft, verdant greens. Instills the profound, restorative calm necessary for high-end domestic spas and restful primary suites."
  },
  {
    "id": "MU-091",
    "name": "Waterfalls MU-091",
    "category": "murals",
    "collection": "Waterfalls",
    "image": "/images/murals-waterfalls/screenshot-2025-04-07-114458.jpg",
    "description": "A dynamic composition of sheer rock faces, aggressive spray, and piercing light. Constitutes a highly assertive feature wall for confident, generously proportioned lounge spaces."
  },
  {
    "id": "MU-092",
    "name": "Waterfalls MU-092",
    "category": "murals",
    "collection": "Waterfalls",
    "image": "/images/murals-waterfalls/screenshot-2025-04-07-114717.jpg",
    "description": "A gentle, tiered forest waterfall producing a highly serene atmosphere. Visually and thematically cohesive when applied alongside the hard, sleek surfaces of modern wet rooms."
  },
  {
    "id": "MU-093",
    "name": "Waterfalls MU-093",
    "category": "murals",
    "collection": "Waterfalls",
    "image": "/images/murals-waterfalls/screenshot-2025-04-07-115348.jpg",
    "description": "Extensive tiered waterways receding into deep woodland. A forceful optical tool engineered to effectively shatter the visual limit of long, oppressive interior walls."
  },
  {
    "id": "MU-094",
    "name": "Waterfalls MU-094",
    "category": "murals",
    "collection": "Waterfalls",
    "image": "/images/murals-waterfalls/screenshot-2025-04-07-115441.jpg",
    "description": "Vibrant, sun-illuminated waterfall spray glowing with warm, optimistic tones. Consistently utilized to inject immediate brightness and life into previously gloomy architectural pockets."
  },
  {
    "id": "MU-095",
    "name": "Wildlife MU-095",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/633d420b-ccda-4848-9533-afdaab8107be.jpg",
    "description": "An uncompromising, intimately cropped macro animal portrait printed at colossal scale. Guarantees absolute spatial dominance and intense visual engagement upon entering the room."
  },
  {
    "id": "MU-096",
    "name": "Wildlife MU-096",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112257.jpg",
    "description": "Sweeping savannah wildlife depicted through warm, atmospheric dusty earth tones. Cultivates an inherently luxurious environment highly compatible with premium leathers and rich timber."
  },
  {
    "id": "MU-097",
    "name": "Wildlife MU-097",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112327.jpg",
    "description": "Delicate avian subjects captured in mid-flight across an exceptionally pale ground. Preserves a light, highly breathable atmosphere critical for smaller, restful primary bedrooms."
  },
  {
    "id": "MU-098",
    "name": "Wildlife MU-098",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112341.jpg",
    "description": "An intensely powerful, high-contrast big-cat study. Sourced specifically to provide undisputed theatrical gravity and dramatic presence to sophisticated evening lounges."
  },
  {
    "id": "MU-099",
    "name": "Wildlife MU-099",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112400.jpg",
    "description": "A magnificent wide-angle perspective of elephants gathering at an expansive waterhole. Precision-scaled to wrap elegantly across and unify lengthy, uninterrupted living room spans."
  },
  {
    "id": "MU-100",
    "name": "Wildlife MU-100",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112415.jpg",
    "description": "Dense, hyper-saturated tropical aviaries woven deeply into lush foliage. Operates as an explosive source of vibrant color injection for adventurous dining spaces."
  },
  {
    "id": "MU-101",
    "name": "Wildlife MU-101",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112430.jpg",
    "description": "A decidedly austere, monochrome wildlife portrait executing extreme tonal discipline. The sophisticated choice for interiors prioritizing strict restraint over chaotic pigmentation."
  },
  {
    "id": "MU-102",
    "name": "Wildlife MU-102",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112503.jpg",
    "description": "Expansive grazing herds set dramatically against an overwhelming, open skyline. Highly effective at forcefully generating an illusion of infinite lateral depth on flat planes."
  },
  {
    "id": "MU-103",
    "name": "Wildlife MU-103",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112518.jpg",
    "description": "A serene, gracefully floating marine ecosystem rendered in cooling blues. Consistently preferred by designers aiming to establish a distinctly tranquil, spa-like bathroom environment."
  },
  {
    "id": "MU-104",
    "name": "Wildlife MU-104",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112532.jpg",
    "description": "A singular, deeply imposing animal portrait commanding significant vertical space. Ideal for seizing visual control at the very end of narrow, poorly defined circulation hallways."
  },
  {
    "id": "MU-105",
    "name": "Wildlife MU-105",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112552.jpg",
    "description": "Deeply forested woodland fauna embedded within soft, desaturated greens. Delivers a persistently calm, organic serenity essential for heavily layered natural design schemes."
  },
  {
    "id": "MU-106",
    "name": "Wildlife MU-106",
    "category": "murals",
    "collection": "Wildlife",
    "image": "/images/murals-wildlife/screenshot-2025-04-07-112613.jpg",
    "description": "Breathtaking macro photography exposing the profound beauty of exotic plumage. Establishes a lavish, highly textural richness essential for outfitting truly opulent dressing rooms."
  },
  {
    "id": "MW-001",
    "name": "Cream Marble & Slat Display Wall MW-001",
    "category": "media-wall",
    "collection": "Marble & Stone Media Walls",
    "image": "/images/media-walls/mw-001.jpg",
    "description": "Full-height feature wall unit combining a central cream marble slab TV backdrop with vertical slatted panels, flanked by illuminated multi-tier open display towers and a low-profile white floating console."
  },
  {
    "id": "MW-002",
    "name": "Cream & Black Geometric TV Wall MW-002",
    "category": "media-wall",
    "collection": "Slat & Fluted Media Walls",
    "image": "/images/media-walls/mw-002.jpg",
    "description": "Modern off-white wall paneling accented with sleek black geometric inlay lines, featuring a floating backlit TV panel with warm rear LED glow and vertical fluted side accents."
  },
  {
    "id": "MW-003",
    "name": "Deep Walnut Slat & Marble Wall MW-003",
    "category": "media-wall",
    "collection": "Slat & Fluted Media Walls",
    "image": "/images/media-walls/mw-003.jpg",
    "description": "Rich mahogany walnut acoustic wood slat side panels framing a central warm beige marble porcelain backdrop for a striking dual-textured TV feature wall."
  },
  {
    "id": "MW-004",
    "name": "Soft Beige Fluted Media Wall MW-004",
    "category": "media-wall",
    "collection": "Slat & Fluted Media Walls",
    "image": "/images/media-walls/mw-004.jpg",
    "description": "Soft beige fluted wood texture paneling featuring a floating center TV mounting backplate with warm perimeter LED lighting and a matching floating wood console."
  },
  {
    "id": "MW-005",
    "name": "Warm Oak & White Veined Marble Unit MW-005",
    "category": "media-wall",
    "collection": "Marble & Stone Media Walls",
    "image": "/images/media-walls/mw-005.jpg",
    "description": "Custom warm oak wood grain media wall unit featuring vertical fluted slats, built-in lit floating side shelves, white veined marble center panel, and seamless floating console drawers."
  },
  {
    "id": "MW-006",
    "name": "Neoclassical Molded TV Halo Wall MW-006",
    "category": "media-wall",
    "collection": "Fireplace & Acoustic Media Walls",
    "image": "/images/media-walls/mw-006.jpg",
    "description": "Classical wainscoting picture frame wall molding in a clean neutral grey finish, highlighted by an elegant warm LED halo strip lighting perimeter."
  },
  {
    "id": "MW-007",
    "name": "Integrated Wood & Cream Wall Unit MW-007",
    "category": "media-wall",
    "collection": "Slat & Fluted Media Walls",
    "image": "/images/media-walls/mw-007.jpg",
    "description": "Floor-to-ceiling built-in wall unit featuring warm wood tone accent panels, integrated floating display shelves with under-shelf lighting, and toe-kick LED floor lighting."
  },
  {
    "id": "MW-008",
    "name": "White Marble & Dark Slat Tower Unit MW-008",
    "category": "media-wall",
    "collection": "Marble & Stone Media Walls",
    "image": "/images/media-walls/mw-008.jpg",
    "description": "High-contrast luxury media wall combining dark vertical slatted paneling, a white marble porcelain TV backplate with halo backlighting, and a dark wood illuminated shelf tower."
  },
  {
    "id": "MW-009",
    "name": "Scandinavian Oak & Low Console Wall MW-009",
    "category": "media-wall",
    "collection": "Slat & Fluted Media Walls",
    "image": "/images/media-walls/mw-009.jpg",
    "description": "Minimalist Scandinavian-inspired media wall featuring natural oak side columns, lit display shelves, matte cream wall paneling, and a low-profile console with warm ambient floor glow."
  },
  {
    "id": "MW-010",
    "name": "Asymmetric Grid Wood Acoustic Wall MW-010",
    "category": "media-wall",
    "collection": "Slat & Fluted Media Walls",
    "image": "/images/media-walls/mw-010.jpg",
    "description": "Architectural floor-to-ceiling acoustic wood paneling featuring an asymmetric grid pattern with crisp dark shadow-line reveals in a natural oak finish."
  },
  {
    "id": "MW-011",
    "name": "Charcoal Slat & Fireplace Marble Wall MW-011",
    "category": "media-wall",
    "collection": "Fireplace & Acoustic Media Walls",
    "image": "/images/media-walls/mw-011.jpg",
    "description": "Floating white marble porcelain backplate with warm LED perimeter glow set against dark charcoal acoustic slat paneling and a wide white floating console unit."
  },
  {
    "id": "MW-012",
    "name": "Champagne Niche & Curved Marble Ledge MW-012",
    "category": "media-wall",
    "collection": "Marble & Stone Media Walls",
    "image": "/images/media-walls/mw-012.jpg",
    "description": "Luxury recessed TV mounting niche framed in champagne micro-stone texture with metallic gold edge trim, ambient backlighting, and a floating curved marble console ledge."
  },
  {
    "id": "MW-013",
    "name": "Dual Illuminated Tower Marble Wall MW-013",
    "category": "media-wall",
    "collection": "Marble & Stone Media Walls",
    "image": "/images/media-walls/mw-013.jpg",
    "description": "Grand media wall featuring dual illuminated side display towers, a white marble porcelain slab backdrop over vertical oak slats, and a full-width floating drawer console."
  },
  {
    "id": "MW-014",
    "name": "Sage & Gold Geometric Marble Wall MW-014",
    "category": "media-wall",
    "collection": "Marble & Stone Media Walls",
    "image": "/images/media-walls/mw-014.jpg",
    "description": "Opulent feature wall combining sage green wainscoting panels, gold metallic geometric marble tile inlay, ambient perimeter lighting, and olive green fluted columns."
  },
  {
    "id": "MW-015",
    "name": "Charcoal & White Marble Console Unit MW-015",
    "category": "media-wall",
    "collection": "Marble & Stone Media Walls",
    "image": "/images/media-walls/mw-015.jpg",
    "description": "Modern modular feature wall featuring white marble porcelain panels with black vein accents, a tall charcoal side storage cabinet, light oak shelving, and dark grey floating console drawers."
  }
];

export const featuredProducts: Product[] = products.filter((_, i) => i % 11 === 0).slice(0, 8);
