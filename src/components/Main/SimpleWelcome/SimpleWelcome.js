import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  LogoContainer,
  SimpleWelcomeContainer,
  SimpleWelcomeSubtitle,
  SimpleWelcomeTitle,
} from "./styles";

export const SimpleWelcome = ({ title, subtitle }) => {
  return (
    <SimpleWelcomeContainer>
      <LogoContainer>
        <FontAwesomeIcon icon={faHashtag} className="fontawesome__simple"/>
      </LogoContainer>
      <SimpleWelcomeTitle>Welcome to {title}</SimpleWelcomeTitle>
      <SimpleWelcomeSubtitle>
        This is the start of the {subtitle} channel
      </SimpleWelcomeSubtitle>
    </SimpleWelcomeContainer>
  );
};
