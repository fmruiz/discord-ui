import React from "react";
import {
  ChannelName,
  HeaderOptionsContainer,
  LiveLabel,
  QualityLabel,
  QualityVideoContainer,
  StreamerName,
  StreamingContainer,
  StreamingHeaderContainer,
  StreamingScreenContainer,
  StreamingUsernameContainer,
  UsersConectedContainer,
  UsersConectedImg,
  UsersConectedImgContainer,
  UsersConectedName,
  VideoStreaming,
} from "./styles";
import Elon from "../../../assets/elon.jpg";
import Bezos from "../../../assets/bezos.jpg";
import Mark from "../../../assets/mark.jpg";
import ElonVideo from "../../../assets/video/elon.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBorderNone,
  faEllipsisH,
  faInbox,
  faVolumeDown,
} from "@fortawesome/free-solid-svg-icons";

export const StreamingScreen = () => {
  const streamingUsers = [
    { name: "ElonX", img: Elon, color: "dark" },
    { name: "Mr.Jeff", img: Bezos, color: "brown" },
    { name: "markZ", img: Mark, color: "blue" },
  ];

  return (
    <StreamingContainer>
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
          <FontAwesomeIcon
            icon={faBorderNone}
            className="fontawesome__channel"
          />
          <FontAwesomeIcon
            icon={faEllipsisH}
            className="fontawesome__channel"
          />
          <FontAwesomeIcon icon={faInbox} className="fontawesome__channel" />
        </HeaderOptionsContainer>
      </StreamingHeaderContainer>
      <StreamingScreenContainer>
        <VideoStreaming width={1275} autoPlay muted>
          <source src={ElonVideo} type="video/mp4" />
        </VideoStreaming>
        <UsersConectedContainer>
          {streamingUsers.map((s, i) => (
            <UsersConectedImgContainer className={s.color} key={i}>
              <UsersConectedImg src={s.img} />
              <UsersConectedName className="user__name">
                {s.name}
              </UsersConectedName>
            </UsersConectedImgContainer>
          ))}
        </UsersConectedContainer>
      </StreamingScreenContainer>
    </StreamingContainer>
  );
};
