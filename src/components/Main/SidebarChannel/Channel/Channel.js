import React from "react";
import {
  ChannelContainer,
  ChannelTitle,
  ChannelTitleContainer,
  Title,
} from "./styles";
import { faChevronDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChannelItem } from "./ChannelItem/ChannelItem";

export const Channel = () => {
  const channels = [{ name: "general-chat" }];

  return (
    <ChannelContainer>
      <ChannelTitleContainer>
        <ChannelTitle>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="fontawesome__title"
          />
          <Title>TEXT CHANNELS ⚡</Title>
        </ChannelTitle>
        <FontAwesomeIcon icon={faPlus} className="fontawesome__add" />
      </ChannelTitleContainer>
      {channels.map((c, i) => (
        <ChannelItem channelName={c.name} key={i} />
      ))}
    </ChannelContainer>
  );
};
