import React from "react";
import { ProfilesContainer, ProfilesImg, ProfilesName } from "./styles";
import Profile from "../../../../assets/letraf.jpg";

export const Profiles = () => {
  return (
    <ProfilesContainer>
      <ProfilesImg src={Profile} alt="profile-img" />
      <ProfilesName>FrancoDev</ProfilesName>
    </ProfilesContainer>
  );
};
