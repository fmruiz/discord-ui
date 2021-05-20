import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { BotTagContainer, BotTagText } from "./styles";

export const BotTag = () => (
  <BotTagContainer>
    <FontAwesomeIcon icon={faCheck} className="fontawesome__bot"/>
    <BotTagText>BOT</BotTagText>
  </BotTagContainer>
);
