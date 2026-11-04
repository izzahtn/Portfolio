export interface ArtItem {
  id: string;
  title: string;
  category: 'Drawing & Fine Art' | 'Woodworking' | 'Jewelry Design' | 'Apparel & Fashion';
  year: string;
  medium: string;
  dimensions?: string;
  award?: string;
  description: string;
  imagePlaceholderColor: string;
  tags: string[];
}

export const artCategories = [
  'All',
  'Drawing & Fine Art',
  'Woodworking',
  'Jewelry Design',
  'Apparel & Fashion'
] as const;

export const artItems: ArtItem[] = [
  {
    id: "scholastic-silver-key-drawing",
    title: "Anatomical Perspective in Charcoal",
    category: "Drawing & Fine Art",
    year: "2024",
    medium: "Compressed Charcoal & White Conte on Toned Paper",
    dimensions: "18\" x 24\"",
    award: "CT Scholastic Art Awards • Silver Key (Jan 2024)",
    description: "An exploratory study in volumetric chiaroscuro and mechanical anatomy. Captures the structural tensions between biological muscle fiber and skeletal leverage systems through dense tonal gradation.",
    imagePlaceholderColor: "#3d322d",
    tags: ["Award Winner", "Charcoal", "Figure Drawing", "Chiaroscuro"]
  },
  {
    id: "artist-on-the-rise-best-in-show",
    title: "Structural Tessellations & Layered Forms",
    category: "Drawing & Fine Art",
    year: "2025",
    medium: "Pen, Archival Ink & Gouache on Heavy Cold-Press Watercolor Paper",
    dimensions: "22\" x 30\"",
    award: "Artist On the Rise • Best in Show, Brookfield, CT (Mar 2025)",
    description: "Awarded Best in Show out of over 120 regional artists. An intricate geometric exploration inspired by mathematical phyllotaxis and mechanical gear trains, layered in concentric pen lines and muted gouache washes.",
    imagePlaceholderColor: "#2a3b35",
    tags: ["Best in Show", "Archival Ink", "Geometric", "Gouache"]
  },
  {
    id: "hand-cut-joinery-coffee-table",
    title: "Dovetail & Mortise Hardwood Occasional Table",
    category: "Woodworking",
    year: "2024",
    medium: "Black Walnut & Hard White Maple, Hand-Rubbed Tung Oil",
    dimensions: "24\" x 18\" x 20\"",
    description: "Built without mechanical fasteners or metal screws. Features hand-chiseled through-dovetails and blind mortise-and-tenon joints engineered to account for longitudinal and radial seasonal wood movement.",
    imagePlaceholderColor: "#4a3525",
    tags: ["Woodworking", "Hand Joinery", "Black Walnut", "Tung Oil"]
  },
  {
    id: "turned-hardwood-vessel",
    title: "End-Grain Turned Vessel with Fluted Rim",
    category: "Woodworking",
    year: "2024",
    medium: "Spalted Birch & Brass Inlay, Shellac Polish",
    dimensions: "8\" Dia x 6\" H",
    description: "Lathe-turned hollow form highlighting natural fungal spalting patterns. Rim finished with hand-carved micro-flutes and an inset brass wire boundary line.",
    imagePlaceholderColor: "#5c432d",
    tags: ["Woodturning", "Lathe", "Spalted Birch", "Brass Inlay"]
  },
  {
    id: "lost-wax-cast-silver-ring",
    title: "Kinematic Gear Ring in Sterling Silver",
    category: "Jewelry Design",
    year: "2025",
    medium: ".925 Sterling Silver, Lost-Wax Investment Casting",
    dimensions: "Size 7, 6mm Band",
    description: "Carved from high-density jeweler's carving wax and cast using vacuum-assisted centrifugal investment casting. Inspired by planetary epicyclic gear trains, with hand-polished facets and oxidized recessed channels.",
    imagePlaceholderColor: "#33383d",
    tags: ["Jewelry", "Lost-Wax Casting", "Sterling Silver", "Hand Polished"]
  },
  {
    id: "architectural-wire-necklace",
    title: "Suspension Cable Collar with Raw Quartz",
    category: "Jewelry Design",
    year: "2025",
    medium: "Forged Brass Wire, Braided Steel Cable & Uncut Herkimer Diamond",
    dimensions: "16\" Choker",
    description: "Translating civil suspension cable mechanics into wearable jewelry. The tensioned brass armature supports a floating raw quartz crystal held purely through calibrated opposing wire compressive forces.",
    imagePlaceholderColor: "#42382c",
    tags: ["Jewelry", "Wire Forging", "Tension Mechanics", "Raw Crystal"]
  },
  {
    id: "tailored-structural-jacket",
    title: "Asymmetrical Modular Field Jacket",
    category: "Apparel & Fashion",
    year: "2024",
    medium: "12oz Japanese Cotton Canvas, Matte Black Steel Snap Hardware",
    dimensions: "Custom Tailored Pattern",
    description: "Hand-drafted flat pattern garments engineered with articulated elbow darts, gusseted underarms for 360-degree tool mobility, and internal suspension webbing. Double-needle flat-felled seam construction throughout.",
    imagePlaceholderColor: "#262b29",
    tags: ["Fashion", "Garment Patterning", "Japanese Canvas", "Workwear"]
  },
  {
    id: "fine-pen-botanical-drafting",
    title: "Flora Mechanics: Microscopic Plant Stems",
    category: "Drawing & Fine Art",
    year: "2023",
    medium: "Micron Pigma Ink & Tea Wash on Bristol Board",
    dimensions: "14\" x 17\"",
    description: "Cross-sectional cellular illustration combining botanical microscope slide observations with technical drafting cross-hatching and callout notes.",
    imagePlaceholderColor: "#2e3a33",
    tags: ["Ink Drafting", "Botanical", "Micron", "Cross-Hatching"]
  }
];
