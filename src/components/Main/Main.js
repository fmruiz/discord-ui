import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Header } from "./Header/Header";
import { SidebarChannel } from "./SidebarChannel/SidebarChannel";
import { DashboardContainer, MainContainer } from "./styles";
import { ChatMain } from "./ChatMain/ChatMain";

export const Main = () => {
  return (
    <MainContainer>
      <SidebarChannel />
      <DashboardContainer>
        <Redirect from="/" to="/welcome" />
        <Switch>
          <Route path="/welcome">
            <Header title="welcome" />
            <ChatMain isWelcome />
          </Route>
          <Route path="/general-chat">
            <Header title="general-chat" />
            <ChatMain />
          </Route>
          <Route path="/music">
            <Header title="music" />
            <ChatMain />
          </Route>
        </Switch>
      </DashboardContainer>
    </MainContainer>
  );
};
