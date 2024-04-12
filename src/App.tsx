import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />

      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
