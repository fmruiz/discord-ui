import styled from "styled-components/macro";

export const ChannelTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 10px;

  .fontawesome__add {
    font-size: 1.4vh;
    color: ${(props) => props.theme.COLORS.lightGray};

    :hover {
      color: ${(props) => props.theme.COLORS.white};
      transition: color 0.5s;
    }
  }
`;

export const ChannelTitle = styled.div`
  display: flex;
  align-items: center;

  .fontawesome__title {
    font-size: 1vh;
    color: ${(props) => props.theme.COLORS.lightGray};
    padding-right: 5px;

    :hover {
      color: ${(props) => props.theme.COLORS.white};
      transition: color 0.5s;
    }
  }
`;

export const Title = styled.p`
  font-size: 1.4vh;
  color: ${(props) => props.theme.COLORS.lightGray};
  margin: 0;
  transition: color 0.5s;

  :hover {
    color: ${(props) => props.theme.COLORS.white};
    transition: color 0.5s;
  }
`;