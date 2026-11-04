export interface ThemePalette {
  id: string;
  name: string;
  description: string;
  isDark: boolean;
  colors: {
    bg: string;
    surface: string;
    surfaceElevated: string;
    surfaceHover: string;
    border: string;
    borderStrong: string;
    text: string;
    textMuted: string;
    textFaint: string;
    rose: string;
    roseMuted: string;
    celadon: string;
    celadonMuted: string;
    copper: string;
    gold: string;
    paperTint: string;
  };
}

export const themes: Record<string, ThemePalette> = {
  heritageLight: {
    id: "heritageLight",
    name: "Artisan Paper (Warm Light)",
    description: "Soft Cornell Crimson and Sage Celadon on natural drawing paper",
    isDark: false,
    colors: {
      bg: "#FAF8F5",
      surface: "#FFFFFF",
      surfaceElevated: "#F3EFEA",
      surfaceHover: "#EAE5DE",
      border: "rgba(60, 50, 40, 0.12)",
      borderStrong: "rgba(60, 50, 40, 0.28)",
      text: "#202224",
      textMuted: "#5C6066",
      textFaint: "#8C9098",
      rose: "#B95850",          // Soft artisanal crimson
      roseMuted: "#D4827B",
      celadon: "#547A69",       // Soft herbal celadon
      celadonMuted: "#7FA392",
      copper: "#BA6A46",
      gold: "#C49752",
      paperTint: "rgba(185, 88, 80, 0.05)",
    }
  },
  heritageDark: {
    id: "heritageDark",
    name: "Studio Night (Deep Velvet)",
    description: "Muted Crimson and Sage on deep warm charcoal vellum",
    isDark: true,
    colors: {
      bg: "#161819",
      surface: "#1E2023",
      surfaceElevated: "#26292D",
      surfaceHover: "#2F3338",
      border: "rgba(255, 255, 255, 0.10)",
      borderStrong: "rgba(255, 255, 255, 0.22)",
      text: "#F5F3EF",
      textMuted: "#A6ABB3",
      textFaint: "#6B7079",
      rose: "#C86A61",          // Soft velvet rose
      roseMuted: "#984A42",
      celadon: "#6F9683",       // Soft lichen green
      celadonMuted: "#466B58",
      copper: "#D68A64",
      gold: "#D4AB65",
      paperTint: "rgba(200, 106, 97, 0.08)",
    }
  },
  botanicalSage: {
    id: "botanicalSage",
    name: "Botanical Atelier (Olive & Terracotta)",
    description: "Deep lichen green, soft terracotta clay, and antique ochre",
    isDark: true,
    colors: {
      bg: "#141715",
      surface: "#1C211E",
      surfaceElevated: "#252B27",
      surfaceHover: "#2F3632",
      border: "rgba(111, 150, 131, 0.14)",
      borderStrong: "rgba(111, 150, 131, 0.30)",
      text: "#F3F5F2",
      textMuted: "#9DA8A1",
      textFaint: "#636F67",
      rose: "#C86E60",          // Terracotta
      roseMuted: "#8F4539",
      celadon: "#7FA892",       // Sage lichen
      celadonMuted: "#4F7561",
      copper: "#C98555",
      gold: "#C9A763",
      paperTint: "rgba(127, 168, 146, 0.08)",
    }
  }
};

export const defaultTheme = "heritageLight";
