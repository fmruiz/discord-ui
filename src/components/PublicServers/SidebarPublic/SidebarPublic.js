import {
  faAtom,
  faCompass,
  faGamepad,
  faGraduationCap,
  faMusic,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  SidebarPublicContainer,
  SidebarPublicItemsContainer,
  SidebarPublicItemsText,
  SidebarPublicTitle,
} from "./styles";

export const SidebarPublic = () => {
  const publicServers = [
    { name: "Home", logo: faCompass },
    { name: "Gaming", logo: faGamepad },
    { name: "Music", logo: faMusic },
    { name: "Education", logo: faGraduationCap },
    { name: "Science & Tech", logo: faAtom },
    { name: "Entertainment", logo: faTv },
  ];
  return (
    <SidebarPublicContainer>
      <SidebarPublicTitle>Discover</SidebarPublicTitle>
      {publicServers.map((p, i) => (
        <SidebarPublicItemsContainer key={i} className={`public__` + i}>
          <FontAwesomeIcon icon={p.logo} className={`icon__public`}/>
          <SidebarPublicItemsText>{p.name}</SidebarPublicItemsText>
        </SidebarPublicItemsContainer>
      ))}
    </SidebarPublicContainer>
  );
};
