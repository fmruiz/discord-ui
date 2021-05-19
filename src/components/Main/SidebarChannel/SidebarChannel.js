import React from "react";
import {
  FooterUsername,
  FooterUserContainer,
  FooterUserImg,
  NameChannel,
  SidebarChannelContainer,
  SidebarChannelFooter,
  SidebarChannelHeader,
  FooterUserCode,
  FooterUsernameContainer,
  FooterOptionsContainer,
  ChannelContainer,
  ChannelTitle,
  ChannelTitleContainer,
  Title,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faCog,
  faHeadphonesAlt,
  faMicrophone,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import LetraF from "../../../assets/letraf.jpg";

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
      <SidebarChannelFooter>
        <FooterUserContainer>
          <FooterUserImg src={LetraF} alt="user" />
          <FooterUsernameContainer>
            <FooterUsername>FrancoDev</FooterUsername>
            <FooterUserCode>#4641</FooterUserCode>
          </FooterUsernameContainer>
        </FooterUserContainer>
        <FooterOptionsContainer>
          <FontAwesomeIcon
            icon={faMicrophone}
            className="fontawesome__options"
          />
          <FontAwesomeIcon
            icon={faHeadphonesAlt}
            className="fontawesome__options"
          />
          <FontAwesomeIcon icon={faCog} className="fontawesome__options" />
        </FooterOptionsContainer>
      </SidebarChannelFooter>
    </SidebarChannelContainer>
  );
};
