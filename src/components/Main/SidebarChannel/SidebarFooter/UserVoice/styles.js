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

export const ButtonUserVoiceContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ButtonUserVoice = styled.div`
    display: flex;
    align-items: center;
    background-color: ${props => props.theme.COLORS.mediumGray};
    border-radius: 3px;
    width: 5.5vw;
    height: 3.5vh;
    margin-top: 10px;

    .fontawesome__button {
        color: ${props => props.theme.COLORS.lightGray};
    }
`;

export const ButtonUserVoiceText = styled.p`
    color: ${props => props.theme.COLORS.lightGray};
`;
