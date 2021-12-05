import React from "react";
import { useSelector } from "react-redux";
import { PublicationContainer, UserImg, UsernameText } from "../../common";
import { Container, UserInformationContainer, UserPublication } from "./styles";

const MemesPublication = () => {
  // logo state
  const { adminInfo } = useSelector((state) => state.adminInfo);

  return (
    <Container>
      <PublicationContainer>
        <UserPublication>
          <UserImg src={adminInfo.logo.url} />
          <UserInformationContainer>
            <UsernameText>{adminInfo.name}</UsernameText>
          </UserInformationContainer>
        </UserPublication>
      </PublicationContainer>
    </Container>
  );
};

export default MemesPublication;
