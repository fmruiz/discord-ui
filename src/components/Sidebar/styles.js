import styled from "styled-components/macro";

export const SidebarContainer = styled.div`
  width: 3.8%;
  height: 100vh;
  margin: 0;
  background-color: ${(props) => props.theme.COLORS.sidebar};
  display: flex;
  flex-direction: column;

  .logo__discord {
    filter: grayscale(1);
    transition: all 0.5s;

    :hover {
      filter: grayscale(0);
      transition: all 0.5s;
    }
  }

  .sidebarImg__logo {
    margin: 0 auto;
  }
`;

export const SidebarImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin: 10px auto 0px auto;
  transition: all 0.5s;

  :hover {
    border-radius: 30%;
    transition: border-radius 0.5s;
    cursor: pointer;
  }
`;

export const Divider = styled.div`
  margin: 10px auto 0px auto;
  width: 2vw;
  border-bottom: 2px solid ${(props) => props.theme.COLORS.gray};
`;

export const AddServer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin: 10px auto 0px auto;
  transition: all 0.5s;
  background-color: ${(props) => props.theme.COLORS.gray};

  .group__icon {
    color: ${(props) => props.theme.COLORS.plusIconSidebar};
    transition: all 0.5s;
  }

  :hover {
    border-radius: 30%;
    cursor: pointer;
    transition: all 0.5s;
    background-color: ${(props) => props.theme.COLORS.plusIconSidebar};

    .group__icon {
      color: white;
      transition: all 0.5s;
    }
  }
`;

export const PublicServer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin: 10px auto 0px auto;
  transition: all 0.5s;
  background-color: ${(props) => props.theme.COLORS.gray};

  .publicServer__icon {
    font-size: 22px;
    color: ${(props) => props.theme.COLORS.plusIconSidebar};
    transition: all 0.5s;
  }

  :hover {
    border-radius: 30%;
    cursor: pointer;
    transition: all 0.5s;
    background-color: ${(props) => props.theme.COLORS.plusIconSidebar};

    .publicServer__icon {
      color: white;
      transition: all 0.5s;
    }
  }
`;

export const CloseIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  .modal__close {
    color: gray;
    font-size: 25px;
    cursor: pointer;
  }
`;

export const ModalHeader = styled.p`
  margin: 0;
  text-align: center;
  font-weight: bold;
  font-size: 25px;
`;

export const ModalSubtitle = styled.p`
  margin: 0;
  text-align: center;
  padding-top: 10px;
  font-size: 15px;
  color: gray;
`;

export const ModalImg = styled.div`
  margin: 25px auto 0 auto;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid #4f5660;
  border-style: dashed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalImgContent = styled.div`
  display: flex;
  flex-direction: column;
  .modal__camera {
    color: #4f5660;
    margin: 0 auto;
    font-size: 20px;
  }
`;

export const ModalImgContentParagraph = styled.p`
  margin: 0;
  color: #4f5660;
  font-weight: bold;
  font-size: 13px;
`;

export const ModalFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const ModalFormHeader = styled.p`
  color: gray;
  margin: 0;
  font-weight: bold;
  font-size: 13px;
`;

export const ModalFormInput = styled.input`
  margin-top: 8px;
  border-radius: 3px;
  border: 1px solid lightgrey;
  padding: 10px;
  :focus {
    outline-color: ${(props) => props.theme.COLORS.blue};
  }
`;

export const ModalFormDisclosure = styled.p`
  color: lightgrey;
  margin: 0;
  font-size: 10px;
  padding-top: 5px;
`;

export const ModalFormDisclosureBlue = styled.span`
  color: ${(props) => props.theme.COLORS.blue};
  margin: 0;
  font-size: 10px;
  padding-top: 5px;
  font-weight: bold;
`;

export const ModalFormButton = styled.div`
  background-color: ${(props) => props.theme.COLORS.blue};
  width: 100px;
  height: 40px;
  margin: 30px auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: white;
  transition: all 0.2s;
  cursor: pointer;
  :hover {
    background-color: #5c6eb1;
    transition: all 0.2s;
  }
`;
