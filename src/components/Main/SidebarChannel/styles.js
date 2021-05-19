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
`;
