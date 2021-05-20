import styled from "styled-components/macro";

export const MainContainer = styled.div`
  display: flex;
  width: 96.2%;
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.COLORS.mediumGray};
`;

export const ChatContainer = styled.div`
  display: flex;
  height: 95%;
`;
