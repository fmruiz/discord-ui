import styled from "styled-components";

export const MusicPublicationContainer = styled.div`
  display: flex;
  padding-top: 5px;
  padding-left: 15px;
  padding-bottom: 10px;
  margin-right: 4px;
  margin-top: 7px;
  margin-bottom: 7px;

  :hover {
      background-color: ${props => props.theme.COLORS.musicGray};
  }
`;

export const UserPublication = styled.div`
  display: flex;
`;

export const MusicUserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const UserInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const UserNameText = styled.p`
  margin-top: 0;
  color: ${props => props.theme.COLORS.white};
  
  :hover {
      text-decoration: underline;
  }
`;

export const VideoLink = styled.a`
    color: #2196f3;

    :hover {
        text-decoration: underline;
    }
`;

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.COLORS.gray};
  margin-top: 4px;
  border-radius: 4px;
  width: 590px;
  height: 370px;
  border-left: 4px solid red;
  padding-left: 10px;
`;

export const PlatformTitle = styled.p`
  margin: 0;
  padding: 7px 0 7px 0;
  font-size: 1.3vh;
  color: ${props => props.theme.COLORS.lightGray};
`;
