import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  ChannelItemContainer,
  ChannelName,
  ChannelNameContainer,
  ChannelOptionsContainer,
} from "./styles";

export const ChannelItem = () => {
  return (
    <ChannelItemContainer>
      <ChannelNameContainer>
          <FontAwesomeIcon icon={faHashtag} className='fontawesome__channel' />
        <ChannelName>general-chat</ChannelName>
      </ChannelNameContainer>
      <ChannelOptionsContainer></ChannelOptionsContainer>
    </ChannelItemContainer>
  );
};
