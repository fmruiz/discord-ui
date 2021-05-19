import { faCog, faHeadphonesAlt, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import {
    FooterUsername,
    FooterUserContainer,
    FooterUserImg,
    SidebarChannelFooter,
    FooterUserCode,
    FooterUsernameContainer,
    FooterOptionsContainer,
  } from "./styles";
import LetraF from "../../../../assets/letraf.jpg";

export const SidebarFooter = () => {
    return (
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
    )
}
