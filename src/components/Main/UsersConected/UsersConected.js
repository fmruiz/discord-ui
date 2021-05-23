import React from "react";
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
        <UsersConectedTitle>ONLINE - 9</UsersConectedTitle>
        <Profiles />
      </UsersContainer>
      <UsersContainer>
        <UsersConectedTitle>OFFLINE - 0</UsersConectedTitle>
      </UsersContainer>
    </UsersConectedContainer>
  );
};
