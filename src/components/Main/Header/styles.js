import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.COLORS.black};
  background-color: ${(props) => props.theme.COLORS.gray};
  height: 5%;
`;

export const HeaderTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;

  .fontawesome__headerTitle {
    color: ${(props) => props.theme.COLORS.lightGray};
    margin: auto 0;
    padding-right: 8px;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 1.6vh;
  font-weight: bold;
  margin: auto 0;
  color: ${(props) => props.theme.COLORS.white};
`;
