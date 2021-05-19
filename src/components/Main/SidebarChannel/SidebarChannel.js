import React from "react";
import {
  NameChannel,
  SidebarChannelContainer,
  SidebarChannelHeader,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { SidebarFooter } from "./SidebarFooter/SidebarFooter";
import { Channel } from "./Channel/Channel";
import { SidebarHeader } from "./SidebarHeader/SidebarHeader";

export const SidebarChannel = () => {
  return (
    <SidebarChannelContainer>
      <SidebarHeader />
      <Channel />
      <SidebarFooter />
    </SidebarChannelContainer>
  );
};
