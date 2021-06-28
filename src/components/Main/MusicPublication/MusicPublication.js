import React, { useEffect } from "react";
import {
  MusicPublicationContainer,
  MusicUserImg,
  PlatformTitle,
  SongArtist,
  SongName,
  UserInformationContainer,
  UserNameText,
  UserPublication,
  VideoContainer,
  VideoLink,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getMusicPublicationsAction } from "../../../redux/actions/musicPublicationsActions";

export const MusicPublication = () => {
  // effect
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMusicPublicationsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // global state music publications
  const { musicPublications } = useSelector((state) => state.musicPublication);
  // const { loading } = useSelector((state) => state.musicPublication);

  return (
    <>
      {musicPublications.map((m, i) => (
        <MusicPublicationContainer key={i}>
          <UserPublication>
            <MusicUserImg src={m.img.url} />
            <UserInformationContainer>
              <UserNameText>{m.username}</UserNameText>
              <VideoLink>{m.link}</VideoLink>
              <VideoContainer>
                <PlatformTitle>YouTube</PlatformTitle>
                <SongArtist>{m.artist}</SongArtist>
                <SongName>{m.songName}</SongName>
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
