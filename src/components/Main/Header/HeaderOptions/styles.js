import styled from "styled-components";

export const HeaderOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20%;
  margin-right: 15px;

  .fontawesome__HeaderOptions {
    color: ${(props) => props.theme.COLORS.lightGray};
    font-size: 2.3vh;
    transition: color 0.5s;

    :hover {
      color: ${(props) => props.theme.COLORS.white};
      transition: color 0.5s;
    }
  }
`;
