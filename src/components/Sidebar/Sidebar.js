import React from "react";
import { Divider, SidebarContainer, SidebarImage } from "./styles";
import logo from "../../assets/logo.jpg";
import david from "../../assets/david.jpg";
import tesla from "../../assets/tesla.png";
import dev from "../../assets/dev.jpg";
import google from "../../assets/google.png";
import samsung from "../../assets/samsung.png";
import apple from "../../assets/apple.jpg";
import microsoft from "../../assets/microsoft.jpeg";
import facebook from "../../assets/facebook.jpg";
import meli from "../../assets/meli.jpg";
import nvidia from "../../assets/nvidia.jpg";
import epic from "../../assets/epic.jpeg";

export const Sidebar = () => {
  const images = [
    { logo: dev },
    { logo: david },
    { logo: tesla },
    { logo: microsoft },
    { logo: google },
    { logo: meli },
    { logo: facebook },
    { logo: apple },
    { logo: samsung },
    { logo: nvidia },
    { logo: epic },
  ];

  return (
    <SidebarContainer>
      <SidebarImage src={logo} alt="Logo" className="logo__discord"/>
      <Divider />
      {images.map((img) => (
        <SidebarImage src={img.logo} alt="user" />
      ))}
    </SidebarContainer>
  );
};
