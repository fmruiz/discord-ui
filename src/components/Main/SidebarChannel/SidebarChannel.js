import React from "react";
import {
  SidebarChannelContainer,
} from "./styles";
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
