import React, { useEffect } from "react";
import {
  ProfilesImg,
  ProfilesName,
  UserVoiceConnectedContainer,
  UserVoiceConnectedProfiles,
} from "./styles";
import { LiveTag } from "../../../../LiveTag/LiveTag";
import { Link } from "react-router-dom";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { getVoiceUsersAction } from "../../../../../redux/actions/voiceUsersActions";

export const UserVoiceConnected = () => {
  // effect
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVoiceUsersAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // global state voice users
  const { voiceUsers } = useSelector((state) => state.voiceUsers);

  return (
    <>
      {voiceUsers.map((v, i) => (
        <Link to={v.path}>
          <UserVoiceConnectedContainer key={i}>
            <UserVoiceConnectedProfiles>
              <ProfilesImg src={v.logo.url} alt="profile-img" />
              <ProfilesName>{v.name}</ProfilesName>
            </UserVoiceConnectedProfiles>
            {v.isStreaming && <LiveTag />}
          </UserVoiceConnectedContainer>
        </Link>
      ))}
    </>
  );
};
