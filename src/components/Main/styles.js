import styled from "styled-components/macro";

export const MainContainer = styled.div`
  display: flex;
  width: 96.2%;
  height: 100vh;
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.COLORS.mediumGray};
`;
