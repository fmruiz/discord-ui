import styled from "styled-components";

export const ModalProfileContainer = styled.div`
  background-color: ${(props) => props.theme.COLORS.strongGray};
  width: 13vw;
  height: 40vh;
  border-radius: 8px;
  position: absolute;
  border: 1px solid ${(props) => props.theme.COLORS.strongGray};
  left: 100px;
`;

export const UserInformationContainer = styled.div`
  background-color: ${(props) => props.theme.COLORS.strongGray};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 43%;
  display: flex;
  flex-direction: column;
`;

export const UserInformationImgContainer = styled.div`
  position: relative;
  margin: 20px auto 0 auto;
`;

export const UserInformationConnected = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.COLORS.green};
  border: 7px solid ${(props) => props.theme.COLORS.strongGray};
  position: absolute;
  top: 55px;
  left: 48px;
`;

export const UserInformationImg = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  margin: 0 auto;
`;

export const UserContainer = styled.div`
  display: flex;
  margin: 10px auto;
`;

export const UserInformationName = styled.p`
  margin: 0;
  color: ${(props) => props.theme.COLORS.white};
  font-weight: bold;
`;

export const UserInformationCode = styled.p`
  margin: 0;
  color: ${(props) => props.theme.COLORS.lightGray};
`;

export const UserRolesContainer = styled.div`
  background-color: ${(props) => props.theme.COLORS.gray};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  height: 57%;
`;
