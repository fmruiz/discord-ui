import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/globalTheme";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Main } from "./components/Main/Main";
import { Container } from "./styles";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Sidebar />
        <Main />
      </Container>
    </ThemeProvider>
  );
};
