import React from "react";
import {
  NameChannel,
  SidebarChannelContainer,
  SidebarChannelHeader,
  ChannelContainer,
  ChannelTitle,
  ChannelTitleContainer,
  Title,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { SidebarFooter } from "./SidebarFooter/SidebarFooter";

export const SidebarChannel = () => {
  return (
    <SidebarChannelContainer>
      <SidebarChannelHeader>
        <NameChannel>Frontend's Devs</NameChannel>
        <FontAwesomeIcon icon={faChevronDown} className="fontawesome__icon" />
      </SidebarChannelHeader>
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
      <SidebarFooter />
    </SidebarChannelContainer>
  );
};
