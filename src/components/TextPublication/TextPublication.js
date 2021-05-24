import React from "react";
import {
  TextPublicationContainer,
  UserImg,
  UserImgContainer,
  UserImgContent,
  UserName,
  UserNameText,
  UserPublicationContainer,
} from "./styles";
import User from "../../assets/letraf.jpg";
import Admin from "../../assets/admin.jpg";

export const TextPublication = () => {
  const TextContent = [
    {
      user: "FrancoDev",
      isAdmin: true,
      logo: User,
      textContent:
        "## Hello my name is Franco Ruiz, I am from Argentina and I am a Frontend Developer passionate about new technologies, technological challenges and learning different ways to approach a problem.",
    },
    {
      textContent:
        "## The main objective of this project is to clone the Discord UI (one of my favorite applications).",
    },
    {
      textContent:
        "## I thought about cloning applications to improve myself as a Frontend Developer implementing different technologies for each situation.",
    },
    {
      textContent: "## Thank you for reading!",
    },
    {
        imgContent: Admin,
    },
  ];

  return (
    <>
      {TextContent.map((t, i) => (
        <TextPublicationContainer key={i}>
          <UserImgContainer>
            {t.logo && <UserImg src={t.logo} />}
          </UserImgContainer>
          <UserPublicationContainer>
            <UserName className={t.isAdmin && "admin"}>{t.user}</UserName>
            <UserNameText>{t.textContent}</UserNameText>
            {t.imgContent && <UserImgContent src={t.imgContent}/>}
          </UserPublicationContainer>
        </TextPublicationContainer>
      ))}
    </>
  );
};
