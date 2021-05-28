import React from "react";
import {
  ProfilesImg,
  ProfilesName,
  UserVoiceConnectedContainer,
} from "./styles";
import Elon from "../../../../../assets/elon.jpg";
import Bezos from "../../../../../assets/bezos.jpg";
import Mark from "../../../../../assets/mark.jpg";

export const UserVoiceConnected = () => {
  const profilesData = [
    {
      name: "ElonX",
      logo: Elon,
    },
    {
      name: "Mr.Jeff",
      logo: Bezos,
    },
    {
      name: "markZ",
      logo: Mark,
    },
  ];

  return (
    <>
      {profilesData.map((p, i) => (
        <UserVoiceConnectedContainer key={i}>
          <ProfilesImg src={p.logo} alt="profile-img" />
          <ProfilesName className={p.isAdmin && "admin"}>{p.name}</ProfilesName>
        </UserVoiceConnectedContainer>
      ))}
    </>
  );
};
