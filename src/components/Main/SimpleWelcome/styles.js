import styled from "styled-components";

export const SimpleWelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-right: 20px;
  margin-left: 20px;
  border-bottom: 1px solid #4F4E4E;
`;

export const LogoContainer = styled.div`
    .fontawesome__simple {
        background-color: ${props => props.theme.COLORS.formGray};
        width: 40px;
        height: 40px;
        padding: 13px;
        color: ${props => props.theme.COLORS.white};
        border-radius: 50%;
    }
`;

export const SimpleWelcomeTitle = styled.h3`
  margin: 0;
  color: ${(props) => props.theme.COLORS.white};
  font-size: 4vh;
`;

export const SimpleWelcomeSubtitle = styled.p`
  color: ${(props) => props.theme.COLORS.lightGray};
  margin-top: 5px;
  margin-bottom: 15px;
`;
