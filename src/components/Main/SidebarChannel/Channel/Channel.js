import React, { useEffect } from "react";
import { ChannelContainer } from "./styles";
import { ChannelItem } from "./ChannelItem/ChannelItem";
import { ChannelHeader } from "./ChannelHeader/ChannelHeader";
import { Link } from "react-router-dom";
import { UserVoiceConnected } from "./UserVoiceConnected/UserVoiceConnected";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { getTextChannelsAction } from "../../../../redux/actions/textChannelsActions";

export const Channel = () => {
  // effect
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTextChannelsAction());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // channels global state
  const state = useSelector((state) => state);
  console.log(state);

  const textChannels = [
    { name: "welcome" },
    { name: "general-chat" },
    { name: "music-requests" },
    { name: "memes" },
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
      <ChannelItem channelName="team-work" isVoice />
      <UserVoiceConnected />
      <ChannelItem channelName="business" isVoice />
      <ChannelItem channelName="brainstorming" isVoice />
    </ChannelContainer>
  );
};
