import React from "react";
import { ChannelContainer } from "./styles";
import { ChannelItem } from "./ChannelItem/ChannelItem";
import { ChannelHeader } from "../../../ChannelHeader/ChannelHeader";

export const Channel = () => {
  const channelHeaders = [{ name: "THE OFFICE" }];
  const channels = [{ name: "welcome" }, { name: "general-chat" }, { name: "music" }];

  return (
    <ChannelContainer>
      {channelHeaders.map((c, i) => (
        <ChannelHeader title={c.name} key={i} />
      ))}
      {channels.map((c, i) => (
        <ChannelItem channelName={c.name} key={i} />
      ))}
    </ChannelContainer>
  );
};
