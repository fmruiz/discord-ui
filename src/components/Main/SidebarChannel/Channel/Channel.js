import React, { useEffect } from "react";
import { ChannelContainer } from "./styles";
import { ChannelItem } from "./ChannelItem/ChannelItem";
import { ChannelHeader } from "./ChannelHeader/ChannelHeader";
import { Link } from "react-router-dom";
import { UserVoiceConnected } from "./UserVoiceConnected/UserVoiceConnected";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { getTextChannelsAction } from "../../../../redux/actions/textChannelsActions";
import { getVoiceChannelsAction } from "../../../../redux/actions/voiceChannelsAction";

export const Channel = () => {
  // effect
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTextChannelsAction());
    dispatch(getVoiceChannelsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // voice & text channels global state
  const { textChannel } = useSelector((state) => state.textChannel);
  const { voiceChannel } = useSelector((state) => state.voiceChannel);

  return (
    <ChannelContainer>
      <ChannelHeader title="THE OFFICE" />
      {textChannel &&
        textChannel.map((c, i) => (
          <Link to={"/" + c.name}>
            <ChannelItem channelName={c.name} key={i} />
          </Link>
        ))}
      <ChannelHeader title="VOICE-CHANNELS" />
      <ChannelItem channelName="team-work" isVoice />
      <UserVoiceConnected />
      {voiceChannel &&
        voiceChannel.map((v, i) => (
          <ChannelItem key={i} channelName={v.name} isVoice />
        ))}
    </ChannelContainer>
  );
};
