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

export const MusicPublication = () => {
  return (
    <MusicPublicationContainer>
      <UserPublication>
        <MusicUserImg />
        <UserInformationContainer>
          <UserNameText>ElonX</UserNameText>
          <VideoLink>URL</VideoLink>
          <VideoContainer>
            <PlatformTitle>YouTube</PlatformTitle>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/o1tj2zJ2Wvg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </VideoContainer>
        </UserInformationContainer>
      </UserPublication>
    </MusicPublicationContainer>
  );
};
