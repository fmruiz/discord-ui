import styled from "styled-components";

export const PublicationContainer = styled.div`
  display: flex;
  padding-top: 5px;
  padding-left: 15px;
  padding-bottom: 10px;
  margin-right: 4px;
  margin-top: 7px;
  margin-bottom: 7px;

  :hover {
    background-color: ${(props) => props.theme.COLORS.musicGray};
  }
`;
