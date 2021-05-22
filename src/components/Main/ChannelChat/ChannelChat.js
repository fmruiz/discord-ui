import React from "react";
import { Route, Switch } from "react-router-dom";
import { ChannelChatContainer } from "./styles";
import { WelcomeChannel } from "./WelcomeChannel/WelcomeChannel";

export const ChannelChat = () => {
  return (
    <ChannelChatContainer>
      <Switch>
        <Route path="/welcome">
          <WelcomeChannel />
        </Route>
      </Switch>
    </ChannelChatContainer>
  );
};
