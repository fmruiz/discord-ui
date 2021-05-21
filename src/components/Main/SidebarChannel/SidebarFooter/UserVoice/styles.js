import styled from "styled-components/macro";

export const UserVoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 66.6%;
`;

export const UserVoiceStatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserVoiceIsConnectedContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserVoiceIsConnectedText = styled.p`
  color: ${(props) => props.theme.COLORS.green};
  margin: 0;
`;

export const UserVoiceIsConnectedChannel = styled.p`
  color: ${(props) => props.theme.COLORS.lightGray};
  margin: 0;
`;

export const UserVoiceOptionsContainer = styled.div`
  display: flex;

  .fontawesome__userVoice {
      color: ${props => props.theme.COLORS.lightGray};
      padding-left: 7px;
  }
`;
