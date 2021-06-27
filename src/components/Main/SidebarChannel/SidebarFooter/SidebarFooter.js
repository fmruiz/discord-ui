import React, { useState, useEffect } from "react";
import {
  faCog,
  faHeadphonesAlt,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FooterUsername,
  FooterUserContainer,
  FooterUserImg,
  SidebarChannelFooter,
  FooterUserCode,
  FooterUsernameContainer,
  FooterOptionsContainer,
  UserContainer,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getAdminInfoAction } from "../../../../redux/actions/adminInfoActions";
// import { UserVoice } from "./UserVoice/UserVoice";

export const SidebarFooter = () => {
  // micro on - off
  const [onMicro, setOnMicro] = useState(false);
  const [onHeadset, setOnHeadset] = useState(false);
  const isMicroMuted = () => setOnMicro(!onMicro);
  const isHeadsetMuted = () => setOnHeadset(!onHeadset);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAdminInfoAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // adminInfo global state
  const { adminInfo } = useSelector((state) => state.adminInfo);
  const { loading } = useSelector((state) => state.adminInfo);

  return (
    <SidebarChannelFooter>
      {/* <UserVoice /> */}
      <UserContainer>
        <FooterUserContainer>
          <FooterUserImg
            src={loading === false && adminInfo.logo.url}
            alt="user"
          />
          <FooterUsernameContainer>
            <FooterUsername>{adminInfo.name}</FooterUsername>
            <FooterUserCode>{adminInfo.discordId}</FooterUserCode>
          </FooterUsernameContainer>
        </FooterUserContainer>
        <FooterOptionsContainer>
          <FontAwesomeIcon
            onClick={isMicroMuted}
            icon={faMicrophone}
            className={`fontawesome__options ${onMicro ? "active" : null}`}
          />
          <FontAwesomeIcon
            onClick={isHeadsetMuted}
            icon={faHeadphonesAlt}
            className={`fontawesome__options ${onHeadset ? "active" : null}`}
          />
          <FontAwesomeIcon icon={faCog} className="fontawesome__options" />
        </FooterOptionsContainer>
      </UserContainer>
    </SidebarChannelFooter>
  );
};
