import React from "react";
import {
  ModalProfileContainer,
  UserContainer,
  UserInformationCode,
  UserInformationConnected,
  UserInformationContainer,
  UserInformationImg,
  UserInformationImgContainer,
  UserInformationName,
  UserRolesContainer,
} from "./styles";
import LetraF from "../../../../assets/letraf.jpg";

export const ModalProfile = () => (
  <ModalProfileContainer>
    <UserInformationContainer>
      <UserInformationImgContainer>
        <UserInformationImg src={LetraF} alt="logo-user"/>
        <UserInformationConnected />
      </UserInformationImgContainer>
      <UserContainer>
        <UserInformationName>FrancoDev</UserInformationName>
        <UserInformationCode>#4641</UserInformationCode>
      </UserContainer>
    </UserInformationContainer>
    <UserRolesContainer></UserRolesContainer>
  </ModalProfileContainer>
);
