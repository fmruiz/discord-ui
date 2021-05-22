import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  height: 95%;
`;

export const ChannelChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.COLORS.mediumGray};
  width: 85%;
`;