import React from "react";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  ButtonsContainer,
  OtherOptionsContainer,
  StreamingControlsContainer,
  StreamingFooterContainer,
  UserImg,
} from "./styles";

export const StreamingFooter = ({ user }) => {
  const buttonOptions = [
    { icon: faVideo, isRed: false },
    { icon: faDesktop, isRed: false },
    { icon: faCogs, isRed: false },
    { icon: faExclamationTriangle, isRed: true },
  ];
  return (
    <StreamingFooterContainer>
      <StreamingControlsContainer>
        <FontAwesomeIcon icon={faUserPlus} className="fontawesome__channel" />
        <UserImg src={user} />
      </StreamingControlsContainer>
      <ButtonsContainer>
        {buttonOptions.map((b, i) => (
          <Button className={b.isRed && "isRed"} key={i}>
            <FontAwesomeIcon icon={b.icon} className="fontawesome__button" />
          </Button>
        ))}
      </ButtonsContainer>
      <OtherOptionsContainer>
        <FontAwesomeIcon icon={faVolumeMute} className="fontawesome__channel" />
        <FontAwesomeIcon icon={faArrowsAlt} className="fontawesome__channel" />
        <FontAwesomeIcon icon={faExpand} className="fontawesome__channel" />
      </OtherOptionsContainer>
    </StreamingFooterContainer>
  );
};
