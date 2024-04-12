import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#6c6c6c",
      700: "#202020",
      800: "#121212",
      900: "#111",
    },
    "gray-secondary": "#F1F3F5",
    "gray-primary": "#868E96",
    "gray-darker": "#343A40",
    "red-secondary": "#FFE3E3",
    "red-primary": "#FA5252",
    "pink-secondary": "#FFDEEB",
    "pink-primary": "#E64980",
    "grape-secondary": "#F3D9FA",
    "grape-primary": "#BE4BDB",
    "violet-secondary": "#E5DBFF",
    "violet-primary": "#E5DBFF",
    "indigo-secondary": "#DBE4FF",
    "indigo-primary": "#4C6EF5",
    "blue-secondary": "#D0EBFF",
    "blue-primary": "#228BE6",
    "cyan-secondary": "#C5F6FA",
    "cyan-primary": "#15AABF",
    "teal-secondary": "#C3FAE8",
    "teal-primary": "#12B886",
    "brand-secondary": "#C2F7FA",
    "brand-primary": "#208D8E",
    "green-secondary": "#D3F9D8",
    "green-primary": "#40C057",
    "lime-secondary": "#E9FAC8",
    "lime-primary": "#82C91E",
    "yellow-secondary": "#FFF3BF",
    "yellow-primary": "#FAB005",
    "orange-secondary": "#FFE8CC",
    "orange-primary": "#FD7E14",
  },
});

export default theme;
