export const site = {
  name: "Formula Finishes & Interiors",
  shortName: "Formula Finishes",
  tagline: "Premium interior finishes studio",
  // TODO: replace with the client's real contact details
  phone: "+254 700 000 000",
  whatsapp: "+254700000000",
  email: "info@formulafinishes.co.ke",
  location: "Nairobi, Kenya",
  hours: "Mon–Sat, 8:30am – 6:00pm",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  driveCatalogue:
    "https://drive.google.com/drive/folders/1ip85wWi_aIUPlnqbgXU9vO8z0qc99XxN",
} as const;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;

export const stats = [
  { value: "1,000+", label: "Rolls & panels installed" },
  { value: "14", label: "Product collections" },
  { value: "48hr", label: "Typical installation" },
  { value: "100%", label: "Fitted by our own crew" },
] as const;

export const services = [
  {
    step: "01",
    title: "Consultation & site survey",
    description:
      "We visit the space, measure walls and windows, and match finishes to your light, layout and budget.",
  },
  {
    step: "02",
    title: "Sample & moodboard",
    description:
      "Physical samples from our catalogues so you can see and feel the texture before committing.",
  },
  {
    step: "03",
    title: "Supply & installation",
    description:
      "Wallpaper, murals, contact papers, panels, blinds, films and carpets fitted by our in-house team.",
  },
  {
    step: "04",
    title: "Aftercare",
    description:
      "Cleaning guidance, touch-ups and repairs so your finishes keep looking new for years.",
  },
] as const;

export const serviceDetails = [
  {
    title: "Wallpaper & mural installation",
    description:
      "Precision hanging of 1-metre rolls, 3D embossed papers and custom-printed murals — pattern-matched, bubble-free and trimmed clean.",
    points: ["Custom-size murals", "Pattern matching", "Damp-proof prep"],
  },
  {
    title: "Wall panelling",
    description:
      "Fluted WPC panels, PU stone panels and box designs cut and mounted for feature walls, TV units and reception areas.",
    points: ["Fluted & concave profiles", "PU stone cladding", "WPC boards"],
  },
  {
    title: "Window blinds & films",
    description:
      "Roller, sheer and vertical blinds measured to the millimetre, plus privacy, frosted and reflective window films.",
    points: ["Sheer & single rollers", "Vertical blinds", "Privacy films"],
  },
  {
    title: "Carpets & flooring",
    description:
      "Wall-to-wall carpets, carpet tiles, PVC vinyl, SPC flooring and artificial grass turf for interiors and outdoor spaces.",
    points: ["Wall-to-wall & tiles", "SPC / vinyl", "Grass turf"],
  },
  {
    title: "Contact papers & refinishing",
    description:
      "Self-adhesive marble, wood and textured papers to refresh cabinets, counters, doors and furniture without replacing them.",
    points: ["Marble & wood finishes", "Cabinet wraps", "Textured embossed"],
  },
  {
    title: "Corporate & commercial fit-outs",
    description:
      "Offices, salons, clinics, hotels and retail — branded walls, glass films and durable flooring on a scheduled programme.",
    points: ["Branded graphics", "Out-of-hours fitting", "Bulk supply"],
  },
] as const;

export const testimonials = [
  {
    quote:
      "They measured, sampled and installed our whole living room feature wall in a single afternoon. The finish is flawless.",
    author: "Wanjiru M.",
    role: "Homeowner, Kileleshwa",
  },
  {
    quote:
      "We used their blinds and window films across three floors of offices. Neat work, on time, and the team cleaned up after themselves.",
    author: "Daniel K.",
    role: "Facilities Lead",
  },
  {
    quote:
      "The kids' mural is exactly what my daughter drew on her moodboard. Colours are rich and it wipes clean.",
    author: "Aisha N.",
    role: "Homeowner, Syokimau",
  },
] as const;
