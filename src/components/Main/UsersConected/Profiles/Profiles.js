import React, { useEffect } from "react";
import {
  IconConected,
  ProfilesContainer,
  ProfilesImg,
  ProfilesImgContainer,
  ProfilesName,
} from "./styles";
import { BotTag } from "../../../BotTag/BotTag";
import Profile from "../../../../assets/letraf.jpg";
import Bot from "../../../../assets/bot.png";
import Elon from "../../../../assets/elon.jpg";
import Bezos from "../../../../assets/bezos.jpg";
import Galpe from "../../../../assets/galpe.jpg";
import Mark from "../../../../assets/mark.jpg";
import Gates from "../../../../assets/gates.jpg";
import Jack from "../../../../assets/jack.jpg";
import Larry from "../../../../assets/larry.jpg";
// REDUX
import { useDispatch } from "react-redux";
import { getUsersAction } from "../../../../redux/actions/usersActions.js";

export const Profiles = () => {
  // effect
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // users global state
  // const { users } = useSelector((state) => state.users);

  const profilesData = [
    {
      name: "FrancoDev",
      logo: Profile,
      isConnected: true,
      isAdmin: true,
      isBot: false,
    },
    {
      name: "Rythm",
      logo: Bot,
      isConnected: true,
      isAdmin: false,
      isBot: true,
    },
    {
      name: "ElonX",
      logo: Elon,
      isConnected: true,
      isAdmin: false,
      isBot: false,
    },
    {
      name: "Mr.Jeff",
      logo: Bezos,
      isConnected: true,
      isAdmin: false,
      isBot: false,
    },
    {
      name: "Galpe",
      logo: Galpe,
      isConnected: true,
      isAdmin: false,
      isBot: false,
    },
    {
      name: "markZ",
      logo: Mark,
      isConnected: true,
      isAdmin: false,
      isBot: false,
    },
    {
      name: "Gates",
      logo: Gates,
      isConnected: true,
      isAdmin: false,
      isBot: false,
    },
    {
      name: "jackTWT",
      logo: Jack,
      isConnected: true,
      isAdmin: false,
      isBot: false,
    },
    {
      name: "larry",
      logo: Larry,
      isConnected: true,
      isAdmin: false,
      isBot: false,
    },
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
