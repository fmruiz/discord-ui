import styled from "styled-components";

export const UserVoiceConnectedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 25px;
  margin-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
  padding-bottom: 2px;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.COLORS.mediumGray};
    border-radius: 5px;

    p {
      color: white;
    }
  }
`;

export const UserVoiceConnectedProfiles = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfilesImg = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 50%;
`;

export const ProfilesName = styled.p`
  color: ${(props) => props.theme.COLORS.lightGray};
  font-size: 1.5vh;
  padding-left: 12px;
  padding-right: 6px;
  margin: 0;
`;
