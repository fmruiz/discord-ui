import styled from "styled-components";

export const UsersConectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.COLORS.gray};
  width: 15%;
  padding: 20px 15px 20px 15px;
`;

export const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UsersConectedTitle = styled.p`
  color: ${(props) => props.theme.COLORS.lightGray};
  font-size: 1.25vh;
  font-weight: bold;
  margin-bottom: 8px;
`;
