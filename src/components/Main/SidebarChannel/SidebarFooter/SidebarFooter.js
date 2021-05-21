import {
  faCog,
  faHeadphonesAlt,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  FooterUsername,
  FooterUserContainer,
  FooterUserImg,
  SidebarChannelFooter,
  FooterUserCode,
  FooterUsernameContainer,
  FooterOptionsContainer,
  UserContainer,
} from "./styles";
import LetraF from "../../../../assets/letraf.jpg";
import { UserVoice } from "./UserVoice/UserVoice";

export const SidebarFooter = () => {
  const [onMicro, setOnMicro] = useState(false);
  const [onHeadset, setOnHeadset] = useState(false);

  const isMicroMuted = () => setOnMicro(!onMicro);
  const isHeadsetMuted = () => setOnHeadset(!onHeadset);

  return (
    <SidebarChannelFooter>
      <UserVoice />
      <UserContainer>
        <FooterUserContainer>
          <FooterUserImg src={LetraF} alt="user" />
          <FooterUsernameContainer>
            <FooterUsername>FrancoDev</FooterUsername>
            <FooterUserCode>#4641</FooterUserCode>
          </FooterUsernameContainer>
        </FooterUserContainer>
        <FooterOptionsContainer>
          <FontAwesomeIcon
            onClick={isMicroMuted}
            icon={faMicrophone}
            className={`fontawesome__options ${onMicro ? "active" : null}`}
          />
          <FontAwesomeIcon
            onClick={isHeadsetMuted}
            icon={faHeadphonesAlt}
            className={`fontawesome__options ${onHeadset ? "active" : null}`}
          />
          <FontAwesomeIcon icon={faCog} className="fontawesome__options" />
        </FooterOptionsContainer>
      </UserContainer>
    </SidebarChannelFooter>
  );
};
