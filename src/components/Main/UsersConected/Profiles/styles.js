import styled from "styled-components";

export const ProfilesContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfilesImg = styled.img`
  height: 33px;
  width: 33px;
  border-radius: 50%;
`;

export const ProfilesName = styled.p`
  color: ${(props) => props.theme.COLORS.lightGray};
  font-size: 1.5vh;
  padding-left: 12px;
`;
