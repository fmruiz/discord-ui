import React from "react";
import { ChannelContainer } from "./styles";
import { ChannelItem } from "./ChannelItem/ChannelItem";
import { ChannelHeader } from "./ChannelHeader/ChannelHeader";
import { Link } from "react-router-dom";
import { UserVoiceConnected } from "./UserVoiceConnected/UserVoiceConnected";

export const Channel = () => {
  const textChannels = [
    { name: "welcome" },
    { name: "general-chat" },
    { name: "music-requests" },
    { name: "memes" },
  ];

  const voiceChannels = [
    { name: "team-work", isVoice: true },
  ];

  return (
    <ChannelContainer>
      <ChannelHeader title="THE OFFICE" />
      {textChannels.map((c, i) => (
        <Link to={"/" + c.name}>
          <ChannelItem channelName={c.name} key={i} />
        </Link>
      ))}
      <ChannelHeader title="VOICE-CHANNELS" />
      {voiceChannels.map((c, i) => (
        <Link to={"/" + c.name}>
          <ChannelItem channelName={c.name} isVoice key={i} />
        </Link>
      ))}
      <UserVoiceConnected />
    </ChannelContainer>
  );
};
