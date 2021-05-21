import React from "react";
import { faPhoneSlash, faSignal, faWater } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    UserVoiceContainer,
    UserVoiceStatusContainer,
    UserVoiceIsConnectedText,
    UserVoiceIsConnectedContainer,
    UserVoiceIsConnectedChannel,
    UserVoiceOptionsContainer,
  } from "./styles";

export const UserVoice = () => {
  return (
    <UserVoiceContainer>
      <UserVoiceStatusContainer>
        <UserVoiceIsConnectedContainer>
          <UserVoiceIsConnectedText> <FontAwesomeIcon icon={faSignal}/> Voice Connected</UserVoiceIsConnectedText>
          <UserVoiceIsConnectedChannel>
            Frontend's Devs
          </UserVoiceIsConnectedChannel>
        </UserVoiceIsConnectedContainer>
        <UserVoiceOptionsContainer>
            <FontAwesomeIcon icon={faWater} className="fontawesome__userVoice"/>
            <FontAwesomeIcon icon={faPhoneSlash} className="fontawesome__userVoice"/>
        </UserVoiceOptionsContainer>
      </UserVoiceStatusContainer>
    </UserVoiceContainer>
  );
};
