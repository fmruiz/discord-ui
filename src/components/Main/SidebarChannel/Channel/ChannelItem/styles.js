import styled from "styled-components";

export const ChannelItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ChannelNameContainer = styled.div`
  display: flex;

  .fontawesome__channel {
    font-size: 1.8vh;
    color: ${(props) => props.theme.COLORS.lightGray};
    padding-right: 8px;
  }
`;

export const ChannelName = styled.p`
  font-size: 1.4vh;
  color: ${(props) => props.theme.COLORS.lightGray};
  margin: 0;
`;

export const ChannelOptionsContainer = styled.div`
  display: flex;
`;
