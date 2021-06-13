import styled from "styled-components";

export const SidebarPublicContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.COLORS.gray};
  width: 12.5%;
  height: 100vh;
  border-top-left-radius: 10px;
  padding-left: 10px;
  .public__0 {
      background-color: ${props => props.theme.COLORS.blue};
      color: white;
  }
  .public__0:hover {
      background-color: ${props => props.theme.COLORS.blue};
      color: white;
  }
`;

export const SidebarPublicTitle = styled.p`
  margin: 0 0 15px 0;
  color: white;
  font-size: 27px;
  font-weight: bold;
  padding-top: 15px;
`;

export const SidebarPublicItemsContainer = styled.div`
  display: flex;
  color: ${(props) => props.theme.COLORS.lightGray};
  align-items: center;
  height: 40px;
  cursor: pointer;
  border-radius: 4px;
  padding-left: 12px;
  margin-right: 10px;
  margin-top: 2px;
  :hover {
      background-color: #34373c;
  }
  .icon__public {
    font-size: 23px;
    width: 22px;
    margin-right: 15px;
  }
`;

export const SidebarPublicItemsText = styled.p`
  margin: 0;
  font-size: 16px;
`;
