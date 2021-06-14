import React, { useState } from "react";
import {
  AddServer,
  CloseIconContainer,
  Divider,
  ModalFormButton,
  ModalFormContainer,
  ModalFormDisclosure,
  ModalFormDisclosureBlue,
  ModalFormHeader,
  ModalFormInput,
  ModalHeader,
  ModalImg,
  ModalImgContent,
  ModalImgContentParagraph,
  ModalSubtitle,
  PublicServer,
  SidebarContainer,
  SidebarImage,
} from "./styles";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faCompass,
  faPlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  // modal state
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(!show);
  const handleOpen = () => setShow(!show);

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
    <>
      <SidebarContainer>
        <Link to="/welcome" className="sidebarImg__logo">
          <SidebarImage src={logo} alt="Logo" className="logo__discord" />
        </Link>
        <Divider />
        {images.map((img) => (
          <SidebarImage src={img.logo} alt="user" />
        ))}
        <AddServer onClick={handleOpen}>
          <FontAwesomeIcon icon={faPlus} className="group__icon" />
        </AddServer>
        <PublicServer>
          <FontAwesomeIcon icon={faCompass} className="publicServer__icon" />
        </PublicServer>
        <ReactModal
          isOpen={show}
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.50)",
            },
            content: {
              position: "absolute",
              top: "30vh",
              left: "38vw",
              border: "1px solid #ccc",
              background: "#fff",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: "4px",
              outline: "none",
              width: "400px",
              height: "410px",
            },
          }}
          ariaHideApp={false}
        >
          <CloseIconContainer>
            <FontAwesomeIcon
              onClick={handleClose}
              className="modal__close"
              icon={faTimes}
            />
          </CloseIconContainer>
          <ModalHeader>Customize your server</ModalHeader>
          <ModalSubtitle>
            Give your new server a personality with a name and an icon.
            <br />
            You can always change ir later.
          </ModalSubtitle>
          <ModalImg>
            <ModalImgContent>
              <FontAwesomeIcon icon={faCamera} className="modal__camera" />
              <ModalImgContentParagraph>UPLOAD</ModalImgContentParagraph>
            </ModalImgContent>
          </ModalImg>
          <ModalFormContainer>
            <ModalFormHeader>SERVER NAME</ModalFormHeader>
            <ModalFormInput />
            <ModalFormDisclosure>
              By creating a server, you agree to Discord's{" "}
              <ModalFormDisclosureBlue>
                Community Guidelines
              </ModalFormDisclosureBlue>
            </ModalFormDisclosure>
          </ModalFormContainer>
          <ModalFormButton className="form__button">Create</ModalFormButton>
        </ReactModal>
      </SidebarContainer>
    </>
  );
};
