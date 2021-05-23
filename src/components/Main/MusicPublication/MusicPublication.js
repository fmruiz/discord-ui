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
          </VideoContainer>
        </UserInformationContainer>
      </UserPublication>
    </MusicPublicationContainer>
  );
};
