import styled from "styled-components";

export const BotTagContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.COLORS.blue};
  border-radius: 4px;
  width: 2vw;
  padding: 1px 2px 1px 2px;

  .fontawesome__bot {
      color: ${(props) => props.theme.COLORS.white};
      font-size: 1.2vh;
      padding-right: 3px;
      padding-left: 1px;
  }
`;

export const BotTagText = styled.p`
  color: ${(props) => props.theme.COLORS.white};
  font-size: 1.1vh;
  margin: 0;
`;
