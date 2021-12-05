import styled from "styled-components";

export const UsernameText = styled.p`
  margin-top: 0;
  margin-bottom: 3px;
  color: ${(props) => props.theme.COLORS.white};

  :hover {
    text-decoration: underline;
  }
`;
