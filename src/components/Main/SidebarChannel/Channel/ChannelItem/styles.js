import styled from "styled-components";

export const ChannelItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px;
  border-radius: 5px;
  margin-top: 5px;

  :hover {
    background-color: ${(props) => props.theme.COLORS.mediumGray};

    .channel-name {
      color: ${(props) => props.theme.COLORS.white};
    }

    .fontawesome__options {
      display: block;
    }
  }
`;

export const ChannelNameContainer = styled.div`
  display: flex;
  align-items: center;
  width: 78%;

  .fontawesome__channel {
    font-size: 1.8vh;
    color: ${(props) => props.theme.COLORS.lightGray};
    padding-right: 8px;
  }
`;

export const ChannelName = styled.p`
  font-size: 1.6vh;
  color: ${(props) => props.theme.COLORS.lightGray};
  margin: 0;
`;

export const ChannelOptionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 22%;

  .fontawesome__options {
    font-size: 1.3vh;
    color: ${(props) => props.theme.COLORS.lightGray};
    display: none;
  }
`;
