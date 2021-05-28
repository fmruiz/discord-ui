import React from "react";
import {
  ProfilesImg,
  ProfilesName,
  UserVoiceConnectedContainer,
  UserVoiceConnectedProfiles,
} from "./styles";
import Elon from "../../../../../assets/elon.jpg";
import Bezos from "../../../../../assets/bezos.jpg";
import Mark from "../../../../../assets/mark.jpg";
import { LiveTag } from "../../../../LiveTag/LiveTag";
import { Link } from "react-router-dom";

export const UserVoiceConnected = () => {
  const profilesData = [
    {
      name: "Mr.Jeff",
      logo: Bezos,
      inStreaming: false,
    },
    {
      name: "markZ",
      logo: Mark,
      inStreaming: false,
    },
  ];

  return (
    <>
      <Link to="/elon">
        <UserVoiceConnectedContainer>
          <UserVoiceConnectedProfiles>
            <ProfilesImg src={Elon} alt="profile-img" />
            <ProfilesName>ElonX</ProfilesName>
          </UserVoiceConnectedProfiles>
          <LiveTag />
        </UserVoiceConnectedContainer>
      </Link>
      {profilesData.map((p, i) => (
        <UserVoiceConnectedContainer key={i}>
          <UserVoiceConnectedProfiles>
            <ProfilesImg src={p.logo} alt="profile-img" />
            <ProfilesName>{p.name}</ProfilesName>
          </UserVoiceConnectedProfiles>
          {p.inStreaming && <LiveTag />}
        </UserVoiceConnectedContainer>
      ))}
    </>
  );
};
