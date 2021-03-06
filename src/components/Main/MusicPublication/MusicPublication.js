import React, { useEffect } from "react";
import {
  PlatformTitle,
  SongArtist,
  SongName,
  UserInformationContainer,
  UserPublication,
  VideoContainer,
} from "./styles";
import {
  PublicationContainer,
  UserImg,
  UsernameText,
  VideoLink,
} from "../../common";
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
        <PublicationContainer key={i}>
          <UserPublication>
            <UserImg src={m.img.url} />
            <UserInformationContainer>
              <UsernameText>{m.username}</UsernameText>
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
        </PublicationContainer>
      ))}
    </>
  );
};
