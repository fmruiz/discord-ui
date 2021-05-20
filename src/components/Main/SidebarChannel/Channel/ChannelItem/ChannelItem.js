import { faCog, faHashtag, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  ChannelItemContainer,
  ChannelName,
  ChannelNameContainer,
  ChannelOptionsContainer,
} from "./styles";

export const ChannelItem = ({ channelName }) => {
  return (
    <ChannelItemContainer>
      <ChannelNameContainer>
        <FontAwesomeIcon icon={faHashtag} className="fontawesome__channel" />
        <ChannelName>{channelName}</ChannelName>
      </ChannelNameContainer>
      <ChannelOptionsContainer>
      <FontAwesomeIcon icon={faUserPlus} className="fontawesome__options"/>
        <FontAwesomeIcon icon={faCog} className="fontawesome__options"/>
      </ChannelOptionsContainer>
    </ChannelItemContainer>
  );
};
