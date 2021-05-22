import React from "react";
import { UsersConected } from "../UsersConected/UsersConected";
import { WelcomeChannel } from "../WelcomeChannel/WelcomeChannel";
import { ChannelChatContainer, ChatContainer } from "./styles";

export const ChatMain = ({ isWelcome }) => {
  return (
    <ChatContainer>
      <ChannelChatContainer>
        {isWelcome && <WelcomeChannel />}
      </ChannelChatContainer>
      <UsersConected />
    </ChatContainer>
  );
};
