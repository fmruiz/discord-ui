import React from "react";
import {
  faBorderNone,
  faEllipsisH,
  faInbox,
  faVolumeDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ChannelName,
  HeaderOptionsContainer,
  LiveLabel,
  QualityLabel,
  QualityVideoContainer,
  StreamerName,
  StreamingHeaderContainer,
  StreamingUsernameContainer,
} from "./styles";

export const StreamingHeader = () => {
  return (
    <StreamingHeaderContainer>
      <StreamingUsernameContainer>
        <ChannelName>
          <FontAwesomeIcon
            icon={faVolumeDown}
            className="fontawesome__channel"
          />{" "}
          team-work
        </ChannelName>
        <StreamerName>ElonX</StreamerName>
      </StreamingUsernameContainer>
      <HeaderOptionsContainer>
        <QualityVideoContainer>
          <QualityLabel>720p 30FPS</QualityLabel>
          <LiveLabel>LIVE</LiveLabel>
        </QualityVideoContainer>
        <FontAwesomeIcon icon={faBorderNone} className="fontawesome__channel" />
        <FontAwesomeIcon icon={faEllipsisH} className="fontawesome__channel" />
        <FontAwesomeIcon icon={faInbox} className="fontawesome__channel" />
      </HeaderOptionsContainer>
    </StreamingHeaderContainer>
  );
};
