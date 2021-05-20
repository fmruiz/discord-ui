import styled from "styled-components";

export const ProfilesContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5px;
  padding-top: 5px;
  padding-bottom: 2px;
  transition: all 0.5s;

  :hover {
    background-color: ${(props) => props.theme.COLORS.mediumGray};
    border-radius: 5px;
    transition: background-color 0.5s;
  }

  .admin {
    color: #FF3232;
  }
`;

export const ProfilesImgContainer = styled.div`
  position: relative;
`;

export const ProfilesImg = styled.img`
  height: 33px;
  width: 33px;
  border-radius: 50%;
`;

export const IconConected = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.COLORS.green};
  border: 3px solid ${(props) => props.theme.COLORS.gray};
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const ProfilesName = styled.p`
  color: ${(props) => props.theme.COLORS.lightGray};
  font-size: 1.6vh;
  padding-left: 12px;
  padding-right: 6px;
  margin: 0;
`;
