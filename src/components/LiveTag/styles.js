import styled from "styled-components";

export const LiveTagContainer = styled.div`
  background-color: ${(props) => props.theme.COLORS.red};
  width: 2vw;
  border-radius: 7px;
  margin: 0;
`;

export const LiveTagText = styled.p`
  color: ${(props) => props.theme.COLORS.white};
  font-size: 1.4vh;
  margin: 0;
  text-align: center;
  font-weight: bold;
  line-height: 17px;
`;
