import React from "react";
import {
  faDesktop,
  faPhoneSlash,
  faSignal,
  faVideo,
  faWater,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  UserVoiceContainer,
  UserVoiceStatusContainer,
  UserVoiceIsConnectedText,
  UserVoiceIsConnectedContainer,
  UserVoiceIsConnectedChannel,
  UserVoiceOptionsContainer,
  ButtonUserVoice,
  ButtonUserVoiceText,
  ButtonUserVoiceContainer,
} from "./styles";

export const UserVoice = () => {
  return (
    <UserVoiceContainer>
      <UserVoiceStatusContainer>
        <UserVoiceIsConnectedContainer>
          <UserVoiceIsConnectedText>
            <FontAwesomeIcon icon={faSignal} /> Voice Connected
          </UserVoiceIsConnectedText>
          <UserVoiceIsConnectedChannel>The Boyz</UserVoiceIsConnectedChannel>
        </UserVoiceIsConnectedContainer>
        <UserVoiceOptionsContainer>
          <FontAwesomeIcon icon={faWater} className="fontawesome__userVoice" />
          <FontAwesomeIcon
            icon={faPhoneSlash}
            className="fontawesome__userVoice"
          />
        </UserVoiceOptionsContainer>
      </UserVoiceStatusContainer>
      <ButtonUserVoiceContainer>
        <ButtonUserVoice>
          <FontAwesomeIcon icon={faVideo} className="fontawesome__button" />
          <ButtonUserVoiceText>Video</ButtonUserVoiceText>
        </ButtonUserVoice>
        <ButtonUserVoice>
          <FontAwesomeIcon icon={faDesktop} className="fontawesome__button" />
          <ButtonUserVoiceText>Screen</ButtonUserVoiceText>
        </ButtonUserVoice>
      </ButtonUserVoiceContainer>
    </UserVoiceContainer>
  );
};
