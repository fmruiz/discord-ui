import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Header } from "./Header/Header";
import { SidebarChannel } from "./SidebarChannel/SidebarChannel";
import { ChatMain } from "./ChatMain/ChatMain";
import { DashboardContainer, MainContainer } from "./styles";
import { StreamingScreen } from "./StreamingScreen/StreamingScreen";
import { PublicServers } from "../PublicServers/PublicServers";

export const Main = () => {
  return (
    <Switch>
      <MainContainer>
        <Route
          path={[
            "/welcome",
            "/general-chat",
            "/music-requests",
            "/memes",
            "/elon",
          ]}
        >
          <SidebarChannel />
        </Route>
        <DashboardContainer>
          <Redirect from="/" to="/welcome" />
          <Route path="/welcome">
            <Header title="welcome" />
            <ChatMain isWelcome />
          </Route>
          <Route path="/general-chat">
            <Header title="general-chat" />
            <ChatMain />
          </Route>
          <Route path="/music-requests">
            <Header title="music-requests" />
            <ChatMain isMusic />
          </Route>
          <Route path="/memes">
            <Header title="memes" />
            <ChatMain />
          </Route>
          <Route path="/elon">
            <StreamingScreen />
          </Route>
          <Route path="/public-servers">
            <PublicServers />
          </Route>
        </DashboardContainer>
      </MainContainer>
    </Switch>
  );
};
