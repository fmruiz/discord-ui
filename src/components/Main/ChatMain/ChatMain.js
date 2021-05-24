import React from "react";
import { MusicPublication } from "../MusicPublication/MusicPublication";
import { UsersConected } from "../UsersConected/UsersConected";
import { WelcomeChannel } from "../WelcomeChannel/WelcomeChannel";
import { ChannelChatContainer, ChatContainer } from "./styles";

export const ChatMain = ({ isWelcome, isMusic }) => {
  return (
    <ChatContainer>
      <ChannelChatContainer className='scroll__div'>
        {isWelcome && <WelcomeChannel />}
        {isMusic && <MusicPublication />}
      </ChannelChatContainer>
      <UsersConected />
    </ChatContainer>
  );
};
