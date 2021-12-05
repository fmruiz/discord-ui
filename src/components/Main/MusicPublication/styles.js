import styled from "styled-components";

export const UserPublication = styled.div`
  display: flex;
`;

export const UserInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.COLORS.gray};
  margin-top: 4px;
  border-radius: 4px;
  width: 590px;
  height: 415px;
  border-left: 4px solid red;
  padding-left: 10px;
`;

export const PlatformTitle = styled.a`
  margin: 0;
  padding: 7px 0 7px 0;
  font-size: 1.3vh;
  color: ${(props) => props.theme.COLORS.lightGray};
`;

export const SongArtist = styled.a`
  margin: 0;
  padding: 0 0 7px 0;
  font-weight: bold;
  font-size: 1.4vh;
  color: ${(props) => props.theme.COLORS.white};

  :hover {
    text-decoration: underline;
  }
`;

export const SongName = styled.a`
  margin: 0;
  padding: 0 0 7px 0;
  font-weight: bold;
  font-size: 1.8vh;
  color: #2196f3;

  :hover {
    text-decoration: underline;
  }
`;
