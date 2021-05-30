import styled from "styled-components/macro";

export const SidebarChannelFooter = styled.div`
  display: flex;
  flex-direction: column;
  height: 7%;
  background-color: ${(props) => props.theme.COLORS.footer};
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;
  background-color: ${(props) => props.theme.COLORS.footer};
`;

export const FooterUserContainer = styled.div`
  margin: auto 0;
  display: flex;
`;

export const FooterUserImg = styled.img`
  height: 3.4vh;
  width: 3.4vh;
  border-radius: 50%;
  transition: all 0.5s;

  :hover {
    filter: grayscale(0.4);
    transition: all 0.5s;
    cursor: pointer;
  }
`;

export const FooterUsernameContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;

export const FooterUsername = styled.p`
  font-size: 1.4vh;
  color: ${(props) => props.theme.COLORS.white};
  margin: 0;
  font-weight: bold;

  :hover {
    cursor: pointer;
  }
`;

export const FooterUserCode = styled.p`
  font-size: 1.2vh;
  color: ${(props) => props.theme.COLORS.lightGray};
  margin: 0;

  :hover {
    cursor: pointer;
  }
`;

export const FooterOptionsContainer = styled.div`
  display: flex;
  margin: auto 0;

  .fontawesome__options {
    color: ${(props) => props.theme.COLORS.lightGray};
    padding-left: 12px;
    font-size: 1vw;

    :hover {
      color: ${(props) => props.theme.COLORS.white};
      cursor: pointer;
    }
  }

  .active {
    color: ${(props) => props.theme.COLORS.red};
  }
`;
