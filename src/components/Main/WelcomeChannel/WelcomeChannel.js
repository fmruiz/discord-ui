import React from "react";
import { WelcomeChannelContainer, WelcomeChannelSubtitle, WelcomeChannelTitle } from "./styles";

export const WelcomeChannel = () => {
  return (
    <WelcomeChannelContainer>
      <WelcomeChannelTitle>Welcome to <br/> The Boyz</WelcomeChannelTitle>
      <WelcomeChannelSubtitle>This is the beginning of this server.</WelcomeChannelSubtitle>
    </WelcomeChannelContainer>
  );
};
