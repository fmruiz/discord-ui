import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/globalTheme";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Main } from "./components/Main/Main";
import { Container } from "./styles";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Container>
          <Sidebar />
          <Main />
        </Container>
      </ThemeProvider>
    </Provider>
  );
};
