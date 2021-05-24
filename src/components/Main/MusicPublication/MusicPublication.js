import React from "react";
import {
  MusicPublicationContainer,
  MusicUserImg,
  PlatformTitle,
  UserInformationContainer,
  UserNameText,
  UserPublication,
  VideoContainer,
  VideoLink,
} from "./styles";
import Elon from "../../../assets/elon.jpg";
import Jeff from "../../../assets/bezos.jpg";
import Galpe from "../../../assets/galpe.jpg";

export const MusicPublication = () => {
  const musicPublications = [
    {
      user: "Elonx",
      image: Elon,
      link: "https://www.youtube.com/watch?v=buCD-_1UPn4",
      iframe: "https://www.youtube.com/embed/buCD-_1UPn4"
    },
    {
      user: "Mr.Jeff",
      image: Jeff,
      link: "https://www.youtube.com/watch?v=o1tj2zJ2Wvg",
      iframe: "https://www.youtube.com/embed/o1tj2zJ2Wvg"
    },
    {
      user: "Galpe",
      image: Galpe,
      link: "https://www.youtube.com/watch?v=7wtfhZwyrcc",
      iframe: "https://www.youtube.com/embed/7wtfhZwyrcc"
    },
  ];

  return (
    <>
      {musicPublications.map((m, i) => (
        <MusicPublicationContainer>
          <UserPublication>
            <MusicUserImg src={m.image} />
            <UserInformationContainer>
              <UserNameText>{m.user}</UserNameText>
              <VideoLink>{m.link}</VideoLink>
              <VideoContainer>
                <PlatformTitle>YouTube</PlatformTitle>
                <iframe
                  width="560"
                  height="315"
                  src={m.iframe}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </VideoContainer>
            </UserInformationContainer>
          </UserPublication>
        </MusicPublicationContainer>
      ))}
    </>
  );
};
