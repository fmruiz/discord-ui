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

export const UserVoiceConnected = () => {
  const profilesData = [
    {
      name: "ElonX",
      logo: Elon,
      inStreaming: true,
    },
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
      {profilesData.map((p, i) => (
        <UserVoiceConnectedContainer key={i}>
          <UserVoiceConnectedProfiles>
            <ProfilesImg src={p.logo} alt="profile-img" />
            <ProfilesName className={p.isAdmin && "admin"}>
              {p.name}
            </ProfilesName>
          </UserVoiceConnectedProfiles>
          {p.inStreaming && <LiveTag />}
        </UserVoiceConnectedContainer>
      ))}
    </>
  );
};
