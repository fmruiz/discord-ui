import styled from "styled-components/macro";

export const SidebarChannelContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.COLORS.gray};
  width: 12.5vw;
`;

export const SidebarChannelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.COLORS.black};
  height: 5%;
  padding-left: 15px;
  padding-right: 15px;
  transition: background-color 0.5s;

  :hover {
    background-color: ${(props) => props.theme.COLORS.mediumGray};
    transition: background-color 0.5s;
  }

  .fontawesome__icon {
    color: ${(props) => props.theme.COLORS.white};
    margin: auto 0;
  }
`;

export const NameChannel = styled.h3`
  font-size: 1.8vh;
  color: ${(props) => props.theme.COLORS.white};
  margin: auto 0;
  font-weight: bold;
`;

export const SidebarChannelFooter = styled.div`
  display: flex;
  justify-content: space-between;
  height: 5%;
  padding-left: 15px;
  padding-right: 15px;
  background-color: ${(props) => props.theme.COLORS.footer};
`;

export const FooterUserContainer = styled.div`
  margin: auto 0;
  display: flex;
`;

export const FooterUserImg = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
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
`;

export const FooterUserCode = styled.p`
  font-size: 1.2vh;
  color: ${(props) => props.theme.COLORS.lightGray};
  margin: 0;
`;

export const FooterOptionsContainer = styled.div`
  display: flex;
  margin: auto 0;

  .fontawesome__options {
    color: ${(props) => props.theme.COLORS.lightGray};
    padding-left: 12px;
    font-size: 1vw;
  }
`;
