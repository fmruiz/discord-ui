import React, { Fragment } from "react";
import InputChannels from "../../InputChannels";
import { TextPublication } from "../../TextPublication/TextPublication";
import { MusicPublication } from "../MusicPublication/MusicPublication";
import { SimpleWelcome } from "../SimpleWelcome/SimpleWelcome";
import { UsersConected } from "../UsersConected/UsersConected";
import { WelcomeChannel } from "../WelcomeChannel/WelcomeChannel";
import { ChannelChatContainer, ChatContainer, MainRequestsContainer } from "./styles";

export const ChatMain = ({ isWelcome, isMusic }) => {
  return (
    <ChatContainer>
      <MainRequestsContainer>
      <ChannelChatContainer className="scroll__div">
        {isWelcome && (
          <Fragment>
            <WelcomeChannel />
            <TextPublication />
          </Fragment>
        )}
        {isMusic && (
          <Fragment>
            <SimpleWelcome
              title="#music-requests!"
              subtitle="#music-requests"
            />
            <MusicPublication />
          </Fragment>
        )}
      </ChannelChatContainer>
      <InputChannels />
      </MainRequestsContainer>
      
      <UsersConected />
    </ChatContainer>
  );
};
