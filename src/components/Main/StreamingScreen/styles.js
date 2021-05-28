import styled from "styled-components";

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
  cursor: pointer;
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
