import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.COLORS.black};
  background-color: ${(props) => props.theme.COLORS.gray};
  height: 5%;
`;
