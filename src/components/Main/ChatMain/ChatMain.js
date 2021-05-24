import React from "react";
import { TextPublication } from "../../TextPublication/TextPublication";
import { MusicPublication } from "../MusicPublication/MusicPublication";
import { SimpleWelcome } from "../SimpleWelcome/SimpleWelcome";
import { UsersConected } from "../UsersConected/UsersConected";
import { WelcomeChannel } from "../WelcomeChannel/WelcomeChannel";
import { ChannelChatContainer, ChatContainer } from "./styles";

export const ChatMain = ({ isWelcome, isMusic }) => {
  return (
    <ChatContainer>
      <ChannelChatContainer className="scroll__div">
        {isWelcome && (
          <>
            <WelcomeChannel />
            <TextPublication />
          </>
        )}
        {isMusic && (
          <>
            <SimpleWelcome
              title="#music-requests!"
              subtitle="#music-requests"
            />
            <MusicPublication />
          </>
        )}
      </ChannelChatContainer>
      <UsersConected />
    </ChatContainer>
  );
};
