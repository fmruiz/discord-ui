import styled from "styled-components";

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

export const HeaderTitleText = styled.p`
  font-size: 1.6vh;
  font-weight: bold;
  margin: auto 0;
  color: ${(props) => props.theme.COLORS.white};
`;