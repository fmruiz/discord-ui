import styled from "styled-components";

export const WelcomeChannelContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  margin-right: 30px;
  margin-left: 30px;
  border-bottom: 1px solid #4F4E4E;
`;

export const WelcomeChannelTitle = styled.h3`
  color: ${(props) => props.theme.COLORS.white};
  font-size: 3.7vh;
  margin: 0;
  text-align: center;
  line-height: 40px;
`;

export const WelcomeChannelSubtitle = styled.h3`
  color: ${(props) => props.theme.COLORS.lightGray};
  font-size: 1.4vh;
  text-align: center;
  margin-bottom: 15px;
`;
