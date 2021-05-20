import styled from "styled-components/macro";

export const SidebarChannelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.COLORS.strongGray};
  height: 5%;
  padding-left: 15px;
  padding-right: 15px;
  border-top-left-radius: 10px;
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
  border-top-left-radius: 10px;
`;