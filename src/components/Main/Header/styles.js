import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.COLORS.strongGray};
  background-color: ${(props) => props.theme.COLORS.mediumGray};
  height: 4.8%;
`;
