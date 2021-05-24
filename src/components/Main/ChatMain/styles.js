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
  margin-right: 4px;
  overflow-y: scroll;

  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.COLORS.scrollGray};
    border-radius: 20px;
    padding-top: 20px;
  }

  ::-webkit-scrollbar {
    background-color: ${(props) => props.theme.COLORS.scrollGray};
    width: 10px;
    border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.COLORS.thumbGray};
    border-radius: 20px;
  }
`;