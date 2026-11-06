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
    name: "Lime Cream & Scarlet (Light)",
    description: "Primary Scarlet, Tropical Teal, and Light Caramel on Lime Cream tint",
    isDark: false,
    colors: {
      bg: "#f5faee",
      surface: "#FFFFFF",
      surfaceElevated: "#ebf5dc",
      surfaceHover: "#dff0c9",
      border: "rgba(50, 41, 47, 0.16)",
      borderStrong: "rgba(50, 41, 47, 0.35)",
      text: "#32292f",
      textMuted: "#63575f",
      textFaint: "#91858d",
      rose: "#dd1c1a",          // Primary Scarlet
      roseMuted: "#b91513",
      celadon: "#3d797d",       // Tropical Teal
      celadonMuted: "#70abaf",
      copper: "#a85918",        // Light Caramel
      gold: "#f4b886",          // Light Caramel
      paperTint: "rgba(221, 28, 26, 0.04)",
    }
  },
  heritageDark: {
    id: "heritageDark",
    name: "Shadow Grey & Scarlet (Dark)",
    description: "Vibrant Scarlet, Tropical Teal, and Lime Cream on deep Shadow Grey vellum",
    isDark: true,
    colors: {
      bg: "#1c1619",
      surface: "#272025",
      surfaceElevated: "#332a30",
      surfaceHover: "#40353c",
      border: "rgba(203, 232, 150, 0.14)",
      borderStrong: "rgba(203, 232, 150, 0.28)",
      text: "#f4faed",
      textMuted: "#b5adb3",
      textFaint: "#7a7078",
      rose: "#ff3836",          // Bright Scarlet
      roseMuted: "#dd1c1a",     // Primary Scarlet
      celadon: "#70abaf",       // Tropical Teal
      celadonMuted: "#4f888c",
      copper: "#f4b886",        // Light Caramel
      gold: "#cbe896",          // Lime Cream
      paperTint: "rgba(221, 28, 26, 0.07)",
    }
  },
  botanicalSage: {
    id: "botanicalSage",
    name: "Botanical Crafts (Olive & Terracotta)",
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
