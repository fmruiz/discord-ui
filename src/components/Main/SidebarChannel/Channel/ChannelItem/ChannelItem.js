import {
  faCog,
  faHashtag,
  faUserPlus,
  faVolumeDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  ChannelItemContainer,
  ChannelName,
  ChannelNameContainer,
  ChannelOptionsContainer,
} from "./styles";

export const ChannelItem = ({ channelName, isVoice }) => {
  return (
    <ChannelItemContainer>
      <ChannelNameContainer>
        {isVoice ? (
          <FontAwesomeIcon
            icon={faVolumeDown}
            className="fontawesome__channel"
          />
        ) : (
          <FontAwesomeIcon icon={faHashtag} className="fontawesome__channel" />
        )}
        <ChannelName className="channel-name">{channelName}</ChannelName>
      </ChannelNameContainer>
      <ChannelOptionsContainer>
        <FontAwesomeIcon icon={faUserPlus} className="fontawesome__options" />
        <FontAwesomeIcon icon={faCog} className="fontawesome__options" />
      </ChannelOptionsContainer>
    </ChannelItemContainer>
  );
};
