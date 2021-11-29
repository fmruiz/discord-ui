import React from "react";
import { Routes, Route } from "react-router-dom";
import { SidebarChannel } from "./SidebarChannel/SidebarChannel";
import { DashboardContainer, MainContainer } from "./styles";
import Welcome from "../Welcome";
import GeneralChat from "../GeneralChat";
import MusicRequests from "../MusicRequests";
import Memes from "../Memes";
import Elon from "../Elon";

export const Main = () => {
  return (
    <MainContainer>
      <SidebarChannel />
      <DashboardContainer>
        {/* <Redirect from="/" to="/welcome" /> */}
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/general-chat" element={<GeneralChat />} />
          <Route path="/music-requests" element={<MusicRequests />} />
          <Route path="/memes" element={<Memes />} />
          <Route path="/elon" element={<Elon />} />
        </Routes>
      </DashboardContainer>
    </MainContainer>
  );
};
