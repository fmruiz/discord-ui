import styled from "styled-components";

export const HeaderOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 25%;
  margin-right: 15px;

  .fontawesome__HeaderOptions {
    color: ${(props) => props.theme.COLORS.lightGray};
    font-size: 2.3vh;

    :hover {
      color: ${(props) => props.theme.COLORS.white};
    }
  }
`;

export const InputSearch = styled.input`
  width: 8vw;
  background-color: ${(props) => props.theme.COLORS.strongGray};
  border: none;
  border-radius: 3px;
  padding: 5px;
  color: white;

  :focus {
    outline: none;
  }
`;
