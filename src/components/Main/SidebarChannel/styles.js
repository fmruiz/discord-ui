import styled from "styled-components/macro";

export const SidebarChannelContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.COLORS.gray};
  width: 12.5vw;
`;

export const SidebarChannelHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #212121;
  height: 5%;
  padding-left: 15px;
  padding-right: 15px;
`;

export const NameChannel = styled.h3`
  font-size: 1.8vh;
  color: ${(props) => props.theme.COLORS.white};
  margin: auto 0;
`;
