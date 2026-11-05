export interface ArtItem {
  id: string;
  title: string;
  category: 'Drawing & Fine Art' | 'Woodworking' | 'Jewelry & Sculpture' | 'Apparel & Mixed Media';
  year: string;
  medium: string;
  dimensions?: string;
  award?: string;
  description: string;
  imageUrl?: string;
  imagePlaceholderColor: string;
  tags: string[];
}

export const artCategories = [
  'All',
  'Drawing & Fine Art',
  'Jewelry & Sculpture',
  'Woodworking',
  'Apparel & Mixed Media'
] as const;

export const artItems: ArtItem[] = [
  {
    id: "best-in-show-watercolor",
    title: "Best in Show Watercolor Still Life",
    category: "Drawing & Fine Art",
    year: "2025",
    medium: "Watercolor on Heavy Cold-Press Archival Paper",
    dimensions: "Full Sheet",
    award: "Artist On the Rise • Best in Show, Brookfield, CT (Mar 2025)",
    description: "Awarded Best in Show out of over 120 regional artists. An intricate exploration of transparency, fluid refraction, and saturation contrasts across layered organic forms and glassware.",
    imageUrl: "/art/best-in-show-watercolor.jpg",
    imagePlaceholderColor: "#2a3b35",
    tags: ["Best in Show", "Watercolor", "Still Life", "Fine Art"]
  },
  {
    id: "scholastic-silver-key-still-life",
    title: "Connecticut Scholastic Silver Key Still Life",
    category: "Drawing & Fine Art",
    year: "2024",
    medium: "Charcoal & Mixed Media on Heavy Archival Paper",
    dimensions: "18\" x 24\"",
    award: "CT Scholastic Art Awards • Silver Key (Jan 2024)",
    description: "Honored with the Connecticut Statewide Scholastic Silver Key. A dynamic tonal investigation exploring high-contrast chiaroscuro, reflective textures, and structural massing.",
    imageUrl: "/art/silver-key-still-life.jpg",
    imagePlaceholderColor: "#3d322d",
    tags: ["Silver Key Winner", "Charcoal", "Still Life", "Chiaroscuro"]
  },
  {
    id: "summer-still-life-study",
    title: "Summer Sunlight Still Life Study",
    category: "Drawing & Fine Art",
    year: "2024",
    medium: "Oil Pastel, Gouache & Colored Pencil on Paper",
    dimensions: "Studio Scale",
    description: "An expressive color study balancing vibrant warm light temperatures against cool ambient shadows, capturing the organic geometries of fresh botanicals.",
    imageUrl: "/art/summer-still-life.jpg",
    imagePlaceholderColor: "#4a3525",
    tags: ["Still Life", "Gouache", "Pastel", "Color Study"]
  },
  {
    id: "kill-the-pen-study-1",
    title: "Kill the Pen (Study I)",
    category: "Drawing & Fine Art",
    year: "2025",
    medium: "Archival Micro-Point Ink & Technical Pen Drawing",
    dimensions: "High Resolution Plate",
    description: "Dense linear composition rendered with precision technical pens. Examines mechanical line density, hatching gradients, and organic cross-sectional layering.",
    imageUrl: "/art/kill-the-pen.jpg",
    imagePlaceholderColor: "#22252a",
    tags: ["Technical Ink", "Fine Line", "Illustration", "Precision"]
  },
  {
    id: "kill-the-pen-study-2",
    title: "Kill the Pen (Study II)",
    category: "Drawing & Fine Art",
    year: "2025",
    medium: "Archival Ink, Fine Point & Digital Compositing",
    dimensions: "High Resolution Plate",
    description: "Second iteration in the technical pen series, playing with negative space, volumetric weight, and stark monochromatic contrasts.",
    imageUrl: "/art/kill-the-pen-pt2.jpg",
    imagePlaceholderColor: "#1d1f23",
    tags: ["Technical Pen", "Monochrome", "Geometric", "Negative Space"]
  },
  {
    id: "sustained-investigation-study-5",
    title: "Sustained Investigation • Form & Articulation",
    category: "Drawing & Fine Art",
    year: "2025",
    medium: "Mixed Media, Graphite & Archival Wash",
    dimensions: "Portfolio Plate",
    description: "Part of the AP Studio Art Sustained Investigation portfolio, exploring how mundane physical objects and mechanical forms can be deconstructed into expressive silhouettes.",
    imageUrl: "/art/si-5-revision.jpg",
    imagePlaceholderColor: "#33383d",
    tags: ["AP Studio Art", "Sustained Investigation", "Mixed Media"]
  },
  {
    id: "handcrafted-wire-assemblage-1",
    title: "Cold-Formed Wire & Hardware Ring",
    category: "Jewelry & Sculpture",
    year: "2025",
    medium: "Formed Brass & Steel Wire, Repurposed Mechanical Components",
    dimensions: "Custom Band",
    description: "Handcrafted wearable piece formed from coiled and tension-connected brass wire, integrating found mechanical hardware into an architectural, tactile wearable.",
    imageUrl: "/art/img4129.jpg",
    imagePlaceholderColor: "#42382c",
    tags: ["Jewelry Making", "Formed Wire", "Found Objects", "Handmade"]
  },
  {
    id: "sculptural-material-study-1",
    title: "Tactile Object & Form Study",
    category: "Jewelry & Sculpture",
    year: "2025",
    medium: "Mixed Materials, Wire Armature & Mineral Formations",
    dimensions: "Sculptural Scale",
    description: "An exploratory physical construction examining calibrated tension mechanics without adhesives or solder, using pure mechanical friction to hold components in equilibrium.",
    imageUrl: "/art/img4091.jpg",
    imagePlaceholderColor: "#353f3a",
    tags: ["Sculpture", "Mechanical Equilibrium", "Mixed Media"]
  },
  {
    id: "hardwood-joinery-study",
    title: "Precision Joinery & Hardwood Craft",
    category: "Woodworking",
    year: "2024",
    medium: "Black Walnut & Hard Maple, Hand Joinery",
    dimensions: "Studio Construction",
    description: "Hand-cut mortise-and-tenon and through-dovetail joint construction crafted with hand chisels and hand planes, celebrating natural wood grain alignment.",
    imageUrl: "/art/img4178.jpg",
    imagePlaceholderColor: "#4a3525",
    tags: ["Woodworking", "Hand Joinery", "Black Walnut", "Craft"]
  },
  {
    id: "tactile-fiber-pattern-study",
    title: "Structural Canvas & Modular Patterning",
    category: "Apparel & Mixed Media",
    year: "2024",
    medium: "Heavy Canvas, Steel Hardware & Double-Felled Seams",
    dimensions: "Custom Tailored Pattern",
    description: "Hand-drafted flat pattern garment engineering incorporating articulated kinetic gussets for maximum tool mobility and durability.",
    imageUrl: "/art/img4224.jpg",
    imagePlaceholderColor: "#262b29",
    tags: ["Fashion", "Pattern Making", "Canvas", "Apparel"]
  }
];
