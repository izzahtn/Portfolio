export interface ArtItem {
  id: string;
  title: string;
  category: 'Fine Art & Painting' | 'Drawing & Technical Ink' | 'Custom Wearable Art';
  year: string;
  medium: string;
  dimensions?: string;
  award?: string;
  description: string;
  funFact?: string;
  imageUrl?: string;
  imagePlaceholderColor: string;
  tags: string[];
}

export const artCategories = [
  'All',
  'Fine Art & Painting',
  'Drawing & Technical Ink',
  'Custom Wearable Art'
] as const;

export const artItems: ArtItem[] = [
  {
    id: "best-in-show-watercolor",
    title: "Watercolor Staircase Portrait",
    category: "Fine Art & Painting",
    year: "2024",
    medium: "Watercolor & Mixed Media on Heavy Archival Cold-Press Paper",
    dimensions: "Full Sheet",
    award: "Artist On the Rise • Best in Show, Brookfield, CT (Mar 2025)",
    description: "Awarded Best in Show out of over 120 regional artists. An intimate low-angle self-portrait capturing subtle natural light, seated posture, and the complex drapery of denim jeans and a chunky cable knit sweater against a wooden staircase bannister.",
    funFact: "My very first self-portrait, and my personal favorite piece in the entire collection.",
    imageUrl: "/art/best-in-show-watercolor.jpg",
    imagePlaceholderColor: "#2a3b35",
    tags: ["Best in Show", "Watercolor", "Self-Portrait", "Textiles"]
  },
  {
    id: "scholastic-silver-key-still-life",
    title: "Reflective Silver & Glass Still Life",
    category: "Drawing & Technical Ink",
    year: "2023",
    medium: "White Colored Pencil on Heavy Black Paper",
    dimensions: "18\" x 24\"",
    award: "CT Scholastic Art Awards • Silver Key (Jan 2024)",
    description: "Honored with the Connecticut Statewide Scholastic Silver Key. High-contrast chiaroscuro study rendered entirely with white colored pencils on black paper, capturing specular highlights, optical refraction, and intricate surface embossments across an ornate silver floral vessel, crystal glass decanter, cut glass dish, and brass bell.",
    funFact: "Drawn entirely using white colored pencils on black paper, and the very first piece I ever entered into an art show.",
    imageUrl: "/art/silver-key-still-life.jpg",
    imagePlaceholderColor: "#3d322d",
    tags: ["Silver Key Winner", "White Colored Pencil", "Chiaroscuro", "Glassware"]
  },
  {
    id: "summer-still-life-study",
    title: "Summer Still Life with Doves & Balance Scale",
    category: "Fine Art & Painting",
    year: "2024",
    medium: "Acrylic & Oil on Canvas",
    dimensions: "Studio Scale",
    description: "A narrative physical composition balancing organic forms and nostalgic mechanical artifacts: sculpted white doves perched on driftwood, a clear cassette tape, an antique balance scale, chess rooks, and a magenta iPod Shuffle.",
    funFact: "A labor of love that took about 3 weeks of continuous painting to complete.",
    imageUrl: "/art/summer-still-life.jpg",
    imagePlaceholderColor: "#4a3525",
    tags: ["Still Life", "Acrylic", "Found Objects", "Narrative"]
  },
  {
    id: "kill-the-pen-study-2",
    title: "Kill the Pen (Study II)",
    category: "Drawing & Technical Ink",
    year: "2024",
    medium: "Archival Technical Pen & Micro-Point Ink on Paper",
    dimensions: "High Resolution Plate",
    description: "A sustained technical pen challenge — drawing continuously until the ink cartridge ran completely dry. Features a gothic scarecrow swarmed by crows in a cornfield, using dense cross-hatching, varied contour line weight, and organic surface textures.",
    funFact: "A challenge from class to run out the pen's ink cartridge, which ended up taking over 4 weeks of continuous drawing!",
    imageUrl: "/art/kill-the-pen-pt2.jpg",
    imagePlaceholderColor: "#1d1f23",
    tags: ["Technical Pen", "Cross-Hatching", "Illustration", "Precision"]
  },
  {
    id: "solitude-in-the-crowd",
    title: "Solitude in the Crowd",
    category: "Fine Art & Painting",
    year: "2025",
    medium: "Acrylic on Stretched Canvas",
    dimensions: "Portfolio Plate",
    description: "An expressive visual study exploring societal pressure and sensory overload. A contemplative figure with hands to face in the foreground stands apart from a warm, dense sea of silhouettes beneath a blinding sun.",
    funFact: "The muse in the crowd is actually my best friend, who deals with these sensory and social overwhelm issues in real life.",
    imageUrl: "/art/si-5-revision.jpg",
    imagePlaceholderColor: "#33383d",
    tags: ["Acrylic", "Portrait Study", "Figure Study"]
  },
  {
    id: "the-exchange",
    title: "The Exchange",
    category: "Fine Art & Painting",
    year: "2025",
    medium: "Acrylic on Canvas",
    dimensions: "Studio Scale",
    description: "Examining familial and generational economic dynamics: multi-generational hands reaching for and grasping a single one-dollar bill against a vivid ultramarine backdrop.",
    funFact: "The inspiration for the hands on money was my little cousin constantly reaching out and grabbing whatever money I had out!",
    imageUrl: "/art/img4228.jpg",
    imagePlaceholderColor: "#2b4068",
    tags: ["Acrylic", "Figure Study", "Narrative"]
  },
  {
    id: "ocean-seascape-dusk",
    title: "Ocean Seascape at Dusk (Kerala Waves)",
    category: "Fine Art & Painting",
    year: "2024",
    medium: "Acrylic on Canvas",
    dimensions: "Studio Scale",
    description: "An expressive maritime study inspired by the waves on the beach in Kerala, capturing deep indigo waters, crashing wave breaks, and sea foam rolling onto a dark shore under an evening cloud canopy.",
    funFact: "A painting inspired by the sunset waves crashing on the beach in Kerala.",
    imageUrl: "/art/img4178.jpg",
    imagePlaceholderColor: "#213654",
    tags: ["Kerala Waves", "Seascape", "Acrylic", "Ocean", "Color Study"]
  },
  {
    id: "custom-painted-sneakers",
    title: "Hand-Painted Custom Coastal Sneakers",
    category: "Custom Wearable Art",
    year: "2024",
    medium: "Angelus Acrylic Leather Paint & Sealant on Leather Nike Sneakers",
    dimensions: "Wearable Scale",
    description: "Custom wearable artwork transforming classic leather sneakers with hand-painted ocean wave surf along the toe boxes and coastal palms, beach dunes, and clouds wrapping the heel counters.",
    funFact: "A custom commission painted for my brother, styled with coastal surf and palm scenery.",
    imageUrl: "/art/img4234.jpg",
    imagePlaceholderColor: "#36454f",
    tags: ["Custom Sneakers", "Wearable Art", "Leather Paint", "Handmade"]
  }
];
