import React from "react";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeaderTitleText, HeaderTitleContainer } from "./styles";

export const HeaderTitle = () => {
  return (
    <HeaderTitleContainer>
      <FontAwesomeIcon icon={faHashtag} className="fontawesome__headerTitle" />
      <HeaderTitleText>general-chat</HeaderTitleText>
    </HeaderTitleContainer>
  );
};
