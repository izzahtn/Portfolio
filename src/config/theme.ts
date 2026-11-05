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
    name: "Mint Cream & Rosewood (Light)",
    description: "Rosewood, Muted Teal, and Light Gold on Mint Cream paper",
    isDark: false,
    colors: {
      bg: "#f1f7ed",
      surface: "#FFFFFF",
      surfaceElevated: "#e6efe1",
      surfaceHover: "#dbe7d5",
      border: "rgba(84, 73, 75, 0.16)",
      borderStrong: "rgba(84, 73, 75, 0.35)",
      text: "#322b2d",
      textMuted: "#685c5f",
      textFaint: "#96898d",
      rose: "#b33951",          // Rosewood
      roseMuted: "#8e2d40",
      celadon: "#3f7863",       // Muted Teal
      celadonMuted: "#91c7b1",
      copper: "#9b7a24",
      gold: "#e3d081",          // Light Gold
      paperTint: "rgba(179, 57, 81, 0.04)",
    }
  },
  heritageDark: {
    id: "heritageDark",
    name: "Taupe Velvet & Rosewood (Dark)",
    description: "Luminous Rosewood, Muted Teal, and Light Gold on deep Taupe Grey vellum",
    isDark: true,
    colors: {
      bg: "#1f1a1c",
      surface: "#2b2326",
      surfaceElevated: "#382e32",
      surfaceHover: "#463b40",
      border: "rgba(241, 247, 237, 0.12)",
      borderStrong: "rgba(241, 247, 237, 0.25)",
      text: "#f1f7ed",
      textMuted: "#baaeb1",
      textFaint: "#7f7376",
      rose: "#d65b73",          // Radiant Rosewood
      roseMuted: "#b33951",
      celadon: "#91c7b1",       // Muted Teal
      celadonMuted: "#6ea993",
      copper: "#e3d081",
      gold: "#e3d081",          // Light Gold
      paperTint: "rgba(179, 57, 81, 0.07)",
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
