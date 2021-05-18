import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/globalTheme";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <h1>Hola mundo</h1>
    </ThemeProvider>
  );
};
