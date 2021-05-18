import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/globalTheme";
import { Sidebar } from './components/Sidebar/Sidebar';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Sidebar />
    </ThemeProvider>
  );
};
