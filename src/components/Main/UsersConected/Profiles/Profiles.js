import React from "react";
import { IconConected, ProfilesContainer, ProfilesImg, ProfilesImgContainer, ProfilesName } from "./styles";
import Profile from "../../../../assets/letraf.jpg";

export const Profiles = () => {
  return (
    <ProfilesContainer>
        <ProfilesImgContainer>
            <ProfilesImg src={Profile} alt="profile-img" />
            <IconConected></IconConected>
        </ProfilesImgContainer>
      <ProfilesName>FrancoDev</ProfilesName>
    </ProfilesContainer>
  );
};
