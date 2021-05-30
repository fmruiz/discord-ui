import React from "react";
import {
  Button,
  ButtonsContainer,
  OtherOptionsContainer,
  StreamingContainer,
  StreamingControlsContainer,
  StreamingFooterContainer,
  StreamingScreenContainer,
  UserImg,
  UsersConectedContainer,
  UsersConectedImg,
  UsersConectedImgContainer,
  UsersConectedName,
  VideoStreaming,
} from "./styles";
import Elon from "../../../assets/elon.jpg";
import Bezos from "../../../assets/bezos.jpg";
import Mark from "../../../assets/mark.jpg";
import User from "../../../assets/letraf.jpg";
import ElonVideo from "../../../assets/video/elon.mp4";
import { StreamingHeader } from "./StreamingHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsAlt,
  faCogs,
  faDesktop,
  faExclamationTriangle,
  faExpand,
  faUserPlus,
  faVideo,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";

export const StreamingScreen = () => {
  const streamingUsers = [
    { name: "ElonX", img: Elon, color: "dark" },
    { name: "Mr.Jeff", img: Bezos, color: "brown" },
    { name: "markZ", img: Mark, color: "blue" },
  ];

  const buttonOptions = [
    { icon: faVideo, isRed: false },
    { icon: faDesktop, isRed: false },
    { icon: faCogs, isRed: false },
    { icon: faExclamationTriangle, isRed: true },
  ];

  return (
    <StreamingContainer>
      <StreamingHeader />
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
      <StreamingFooterContainer>
        <StreamingControlsContainer>
          <FontAwesomeIcon icon={faUserPlus} className="fontawesome__channel" />
          <UserImg src={User} />
        </StreamingControlsContainer>
        <ButtonsContainer>
          {buttonOptions.map((b, i) => (
            <Button className={b.isRed && "isRed"} key={i}>
              <FontAwesomeIcon icon={b.icon} className="fontawesome__button" />
            </Button>
          ))}
        </ButtonsContainer>
        <OtherOptionsContainer>
          <FontAwesomeIcon
            icon={faVolumeMute}
            className="fontawesome__channel"
          />
          <FontAwesomeIcon
            icon={faArrowsAlt}
            className="fontawesome__channel"
          />
          <FontAwesomeIcon icon={faExpand} className="fontawesome__channel" />
        </OtherOptionsContainer>
      </StreamingFooterContainer>
    </StreamingContainer>
  );
};
