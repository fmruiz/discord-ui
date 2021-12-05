import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInitialMemes } from "../../../redux/actions/memesActions";
import { PublicationContainer, UserImg, UsernameText } from "../../common";
import { Container, UserInformationContainer, UserPublication } from "./styles";

const MemesPublication = () => {
  const dispatch = useDispatch();
  // logo state
  const { adminInfo } = useSelector((state) => state.adminInfo);

  useEffect(() => {
    dispatch(getInitialMemes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
