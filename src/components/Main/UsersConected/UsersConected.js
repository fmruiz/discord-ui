import React from "react";
import { ModalProfile } from "./ModalProfile/ModalProfile";
import { Profiles } from "./Profiles/Profiles";
import {
  UsersConectedContainer,
  UsersConectedTitle,
  UsersContainer,
} from "./styles";

export const UsersConected = () => {
  return (
    <UsersConectedContainer>
      <UsersContainer>
        <UsersConectedTitle>ONLINE - 0</UsersConectedTitle>
        <Profiles />
        <ModalProfile />
      </UsersContainer>
      <UsersContainer>
        <UsersConectedTitle>OFFLINE - 0</UsersConectedTitle>
      </UsersContainer>
    </UsersConectedContainer>
  );
};
