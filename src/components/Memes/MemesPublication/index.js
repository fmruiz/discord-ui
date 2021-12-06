import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInitialMemes } from "../../../redux/actions/memesActions";
import { PublicationContainer, UserImg, UsernameText } from "../../common";
import {
  Container,
  MemeImage,
  TitleImage,
  UserInformationContainer,
  UserPublication,
} from "./styles";

const MemesPublication = () => {
  // use dispatch
  const dispatch = useDispatch();
  // effects
  useEffect(() => {
    dispatch(getInitialMemes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // from redux states
  const { adminInfo } = useSelector((state) => state.adminInfo);
  const { initialMeme } = useSelector((state) => state.memes);
  const { memes } = useSelector((state) => state.memes)

  return (
    <Container>
      {initialMeme.map((meme, i) => (
        <PublicationContainer key={i}>
          <UserPublication>
            <UserImg src={adminInfo.logo.url} />
            <UserInformationContainer>
              <UsernameText>{adminInfo.name}</UsernameText>
              <TitleImage>{`"${meme.title}"`}</TitleImage>
              <MemeImage src={meme.images.downsized.url} alt={meme.title} />
            </UserInformationContainer>
          </UserPublication>
        </PublicationContainer>
      ))}
      {memes.map((meme, i) => (
        <PublicationContainer key={i}>
          <UserPublication>
            <UserImg src={adminInfo.logo.url} />
            <UserInformationContainer>
              <UsernameText>{adminInfo.name}</UsernameText>
              <TitleImage>{`"${meme.title}"`}</TitleImage>
              <MemeImage src={meme.images.downsized.url} alt={meme.title} />
            </UserInformationContainer>
          </UserPublication>
        </PublicationContainer>
      ))}
    </Container>
  );
};

export default MemesPublication;
