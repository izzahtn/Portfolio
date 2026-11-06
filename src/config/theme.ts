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
    name: "Cream & Deep Mocha (Light)",
    description: "Primary Scarlet, Dark Cyan, and Sandy Brown on warm Cream",
    isDark: false,
    colors: {
      bg: "#fdfde6",
      surface: "#FFFFFF",
      surfaceElevated: "#ffffc7",
      surfaceHover: "#fcfcc4",
      border: "rgba(71, 51, 53, 0.16)",
      borderStrong: "rgba(71, 51, 53, 0.35)",
      text: "#473335",
      textMuted: "#75595c",
      textFaint: "#9e8285",
      rose: "#dd1c1a",          // Primary Scarlet
      roseMuted: "#b91513",
      celadon: "#3e6c6d",       // Dark Cyan (contrast)
      celadonMuted: "#548687",  // Dark Cyan
      copper: "#d47a32",        // Sandy Brown (contrast)
      gold: "#fcaa67",          // Sandy Brown
      paperTint: "rgba(221, 28, 26, 0.04)",
    }
  },
  heritageDark: {
    id: "heritageDark",
    name: "Deep Mocha & Scarlet (Dark)",
    description: "Primary Scarlet, Dark Cyan, and Sandy Brown on Deep Mocha vellum",
    isDark: true,
    colors: {
      bg: "#241819",           // Deep Mocha night
      surface: "#302224",       // Deep Mocha surface
      surfaceElevated: "#3e2d2f",
      surfaceHover: "#4d393b",
      border: "rgba(255, 255, 199, 0.15)", // Cream border
      borderStrong: "rgba(255, 255, 199, 0.30)",
      text: "#ffffc7",          // Cream text
      textMuted: "#dcd6b6",
      textFaint: "#99937a",
      rose: "#ff3836",          // Bright Scarlet
      roseMuted: "#dd1c1a",     // Primary Scarlet
      celadon: "#6ca6a7",       // Dark Cyan
      celadonMuted: "#548687",  // Dark Cyan
      copper: "#fcaa67",        // Sandy Brown
      gold: "#ffffc7",          // Cream
      paperTint: "rgba(221, 28, 26, 0.07)",
    }
  },
  sandyMocha: {
    id: "sandyMocha",
    name: "Sandy Brown & Dark Cyan",
    description: "Sandy Brown accents, Dark Cyan teal, and Cream highlights",
    isDark: false,
    colors: {
      bg: "#ffffc7",           // Pure Cream
      surface: "#FFFFFF",
      surfaceElevated: "#fbe8d5",
      surfaceHover: "#f9dec4",
      border: "rgba(71, 51, 53, 0.18)",
      borderStrong: "rgba(71, 51, 53, 0.40)",
      text: "#473335",
      textMuted: "#75595c",
      textFaint: "#9e8285",
      rose: "#dd1c1a",
      roseMuted: "#b91513",
      celadon: "#3e6c6d",
      celadonMuted: "#548687",
      copper: "#d47a32",
      gold: "#fcaa67",
      paperTint: "rgba(84, 134, 135, 0.07)",
    }
  }
};

export const defaultTheme = "heritageLight";
