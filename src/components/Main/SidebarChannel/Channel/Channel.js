import React from "react";
import {
    ChannelContainer,
    ChannelTitle,
    ChannelTitleContainer,
    Title,
  } from "./styles";
import { faChevronDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Channel = () => {
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
    </ChannelContainer>
  );
};
