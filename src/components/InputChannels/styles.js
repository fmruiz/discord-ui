import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10%;
  background-color: ${(p) => p.theme.COLORS.mediumgray};
`;

export const Input = styled.input`
  width: 95%;
  height: 35px;
  border-radius: 8px;
  border: none;
  padding-left: 20px;
  background-color: ${(p) => p.theme.COLORS.formGray} !important;
  color: #ffffff;

  :focus-visible {
    outline: none;
  }
`;
