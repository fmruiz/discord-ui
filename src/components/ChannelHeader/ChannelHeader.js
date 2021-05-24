import React from "react";
import { ChannelTitle, Title, ChannelTitleContainer } from "./styles";
import { faChevronDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ChannelHeader = ({ title }) => {
  return (
    <ChannelTitleContainer>
      <ChannelTitle>
        <FontAwesomeIcon icon={faChevronDown} className="fontawesome__title" />
        <Title className="channel__title">{title}</Title>
      </ChannelTitle>
      <FontAwesomeIcon icon={faPlus} className="fontawesome__add" />
    </ChannelTitleContainer>
  );
};
