import React from "react";
import {
  IconConected,
  ProfilesContainer,
  ProfilesImg,
  ProfilesImgContainer,
  ProfilesName,
} from "./styles";
import Profile from "../../../../assets/letraf.jpg";
import Bot from "../../../../assets/bot.png";
import { BotTag } from "../../../BotTag/BotTag";

export const Profiles = () => {
  const profilesData = [
    { name: "FrancoDev", logo: Profile, isConnected: true, isAdmin: true, isBot: false },
    { name: "Rythm", logo: Bot, isConnected: true, isAdmin: false, isBot: true },
  ];

  return (
    <>
      {profilesData.map((p, i) => (
        <ProfilesContainer key={i}>
          <ProfilesImgContainer>
            <ProfilesImg src={p.logo} alt="profile-img" />
            {p.isConnected ? <IconConected /> : null}
          </ProfilesImgContainer>
          <ProfilesName className={p.isAdmin && "admin"}>{p.name}</ProfilesName>
          {p.isAdmin && "🚀"}
          {p.isBot && <BotTag />}
        </ProfilesContainer>
      ))}
    </>
  );
};
