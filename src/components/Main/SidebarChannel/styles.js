import styled from "styled-components/macro";

export const SidebarChannelContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.COLORS.gray};
  width: 15%;
  border-top-left-radius: 10px;
`;
