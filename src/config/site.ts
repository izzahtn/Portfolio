export interface SiteConfig {
  name: string;
  pronouns: string;
  role: string;
  institution: string;
  degree: string;
  gradDate: string;
  dossierId: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  resumeUrl: string;
  tagline: string;
  bio: string;
  nav: Array<{ label: string; href: string }>;
  skills: {
    engineering: string[];
    analysis: string[];
    fabrication: string[];
    programming: string[];
    creative: string[];
  };
}

export const siteConfig: SiteConfig = {
  name: "Izzah Nishad",
  pronouns: "she/her",
  role: "Mechanical Engineer & Artist",
  institution: "Cornell University, College of Engineering",
  degree: "B.S. in Mechanical Engineering",
  gradDate: "Spring 2029",
  dossierId: "#2029-ME",
  location: "Ithaca, NY & Danbury, CT",
  email: "izzahtn@gmail.com",
  phone: "(203) 503-7407",
  linkedin: "https://www.linkedin.com/in/izzah-nishad/",
  resumeUrl: "/docs/Izzah_Nishad_Resume.pdf",
  tagline: "Mechanical engineering student at Cornell University ('29). Exploring the dialogue between kinematic systems, structural analysis, and physical craftsmanship.",
  bio: "Second-year Mechanical Engineering student at Cornell University ('29). Currently designing suspension linkages for Cornell Baja Racing (previously on Brakes subteam), building pulsed power optoelectronics in applied physics, and creating award-winning fine art, woodworking, and handcrafted jewelry.",
  nav: [
    { label: "Projects", href: "/projects" },
    { label: "3D CAD Lab", href: "/cad-lab" },
    { label: "Art & Play", href: "/art" },
    { label: "About", href: "/about" },
    { label: "Resume", href: "/resume" },
  ],
  skills: {
    engineering: ["SolidWorks 2026 (Parametric & Assemblies)", "Autodesk Fusion 360", "Geometric Dimensioning & Tolerancing (GD&T)", "Kinematic Linkage Design", "Hydraulic Brake Packaging"],
    analysis: ["Ansys Mechanical (Structural FEA)", "Von Mises Stress & Deflection", "Hand Calculations & Shear Moments", "MATLAB", "Transient Pulse Circuit Analysis"],
    fabrication: ["CNC Milling & Routing", "Manual Lathe & Manual Mill", "TIG/MIG Welding (Beginner)", "3D Printing (FDM/SLA)", "Precision Sheet Metal Bending"],
    programming: ["Python", "C++ (VEX Robotics / Autonomous Pathing)", "Java", "MATLAB Scripts"],
    creative: ["Charcoal & Ink Drawing", "Fine Woodworking & Joinery", "Handcrafted Jewelry Making", "Garment & Clothing Patterning"]
  }
};
