import React from "react";
import { HeaderContainer } from "./styles";
import { HeaderTitle } from "./HeaderTitle/HeaderTitle";
import { HeaderOptions } from "./HeaderOptions/HeaderOptions";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle />
      <HeaderOptions />
    </HeaderContainer>
  );
};
