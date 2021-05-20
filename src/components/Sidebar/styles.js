import styled from "styled-components/macro";

export const SidebarContainer = styled.div`
  width: 4%;
  height: 100vh;
  margin: 0;
  background-color: ${(props) => props.theme.COLORS.strongGray};
  display: flex;
  flex-direction: column;
`;

export const SidebarImage = styled.img`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    margin: 10px auto 0px auto;
`;

export const SidebarImageSelected = styled.img`
    width: 55px;
    height: 55px;
    border-radius: 30%;
    margin: 10px auto 0px auto;
`;

export const Divider = styled.div`
  margin: 10px auto 0px auto;
  width: 2vw;
  border-bottom: 2px solid ${(props) => props.theme.COLORS.gray};
`;
