import React from "react";
import {
  IconConected,
  ProfilesContainer,
  ProfilesImg,
  ProfilesImgContainer,
  ProfilesName,
} from "./styles";
import Profile from "../../../../assets/letraf.jpg";

export const Profiles = () => {
  const profilesData = [
    { name: "FrancoDev", isConnected: true, isAdmin: true, isBot: false },
  ];

  return (
    <>
      {profilesData.map((p, i) => (
        <ProfilesContainer key={i}>
          <ProfilesImgContainer>
            <ProfilesImg src={Profile} alt="profile-img" />
            {p.isConnected ? <IconConected /> : null}
          </ProfilesImgContainer>
          <ProfilesName className={p.isAdmin && "admin"}>{p.name}</ProfilesName>
          {p.isAdmin && "🚀"}
        </ProfilesContainer>
      ))}
    </>
  );
};
