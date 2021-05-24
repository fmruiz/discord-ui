import styled from "styled-components/macro";

export const UserVoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 66.6%;
  border-bottom: 1px solid ${(props) => props.theme.COLORS.gray};
`;

export const UserVoiceStatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;
`;

export const UserVoiceIsConnectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;

export const UserVoiceIsConnectedText = styled.p`
  color: ${(props) => props.theme.COLORS.green};
  margin: 0;
  font-size: 1.5vh;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const UserVoiceIsConnectedChannel = styled.p`
  color: ${(props) => props.theme.COLORS.lightGray};
  margin: 0;
  font-size: 1.5vh;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const UserVoiceOptionsContainer = styled.div`
  display: flex;

  .fontawesome__userVoice {
    color: ${(props) => props.theme.COLORS.lightGray};
    padding-left: 13px;
    font-size: 1.8vh;

    :hover {
      color: ${(props) => props.theme.COLORS.white};
      cursor: pointer;
    }
  }
`;

export const ButtonUserVoiceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
  padding-left: 10px;
`;

export const ButtonUserVoice = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.COLORS.mediumGray};
  border-radius: 3px;
  width: 5.5vw;
  height: 3.5vh;
  margin-top: 10px;

  .fontawesome__button {
    color: ${(props) => props.theme.COLORS.lightGray};
    margin: 0 0 0 auto;
  }

  :hover {
    background-color: ${(props) => props.theme.COLORS.scrollGray};
    cursor: pointer;
  }
`;

export const ButtonUserVoiceText = styled.p`
  color: ${(props) => props.theme.COLORS.lightGray};
  margin: 0 auto 0 0;
  padding-left: 10px;
`;
