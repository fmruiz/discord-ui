import React from "react";
import { HeaderContainer, HeaderTitleContainer, HeaderTitleText } from "./styles";
import { HeaderOptions } from "./HeaderOptions/HeaderOptions";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <HeaderTitleContainer>
        <FontAwesomeIcon
          icon={faHashtag}
          className="fontawesome__headerTitle"
        />
        <HeaderTitleText>{title}</HeaderTitleText>
      </HeaderTitleContainer>
      <HeaderOptions />
    </HeaderContainer>
  );
};
