import styled from "styled-components";

export const StreamingContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  height: 100%;
  cursor: pointer;


  .fontawesome__channel {
    color: ${props => props.theme.COLORS.lightGray};
  }
`;

export const StreamingHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 5%;
`;

export const StreamingUsernameContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ChannelName = styled.p`
  margin: 0;
  color: ${props => props.theme.COLORS.white};
  padding-left: 15px;
  padding-right: 15px;
`;

export const StreamerName = styled.p`
  margin: 0;
  color: ${props => props.theme.COLORS.lightGray};
  padding-left: 15px;
  border-left: 1px solid ${props => props.theme.COLORS.gray};
`;

export const HeaderOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20%;
`;

export const QualityVideoContainer = styled.div`
  display: flex;
`;

export const QualityLabel = styled.p`
  color: ${props => props.theme.COLORS.white};
  background-color: ${props => props.theme.COLORS.gray};
  margin: 0;
  padding: 2px 5px 2px 5px;
  font-weight: bold;
  font-size: 13px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const LiveLabel = styled.p`
  color: ${props => props.theme.COLORS.white};
  background-color: ${props => props.theme.COLORS.red};
  margin: 0;
  padding: 2px 8px 2px 5px;
  font-weight: bold;
  font-size: 13px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const StreamingScreenContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
  height: 100vh;
  width: 100%;

  :hover {
      .user__name {
          display: block;
      }
  }
`;

export const VideoStreaming = styled.video`
  border-radius: 5px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const UsersConectedContainer = styled.div`
  display: flex;
  flex-direction: column;

  .dark {
    background-color: ${(props) => props.theme.COLORS.darkLive};
  }

  .brown {
    background-color: ${(props) => props.theme.COLORS.brownLive};
  }

  .blue {
    background-color: ${(props) => props.theme.COLORS.blueLive};
  }
`;

export const UsersConectedImgContainer = styled.div`
  width: 270px;
  height: 150px;
  border-radius: 5px;
  margin-top: 10px;
  position: relative;
`;

export const UsersConectedImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-left: 100px;
  margin-top: 25px;
`;

export const UsersConectedName = styled.p`
  display: none;
  margin: 0;
  color: white;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  padding: 7px;
  border-radius: 8px;
  top: 105px;
  left: 10px;
`;
