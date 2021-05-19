import React from "react";
import {
    NameChannel,
    SidebarChannelHeader,
  } from "./styles";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SidebarHeader = () => {
  return (
    <SidebarChannelHeader>
      <NameChannel>Frontend's Devs</NameChannel>
      <FontAwesomeIcon icon={faChevronDown} className="fontawesome__icon" />
    </SidebarChannelHeader>
  );
};
