import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Details = styled.details`
  border: 1px solid ${theme.colors.gray1};
  border-radius: 5px;
  background-color: ${theme.colors.white};

  & + & {
    margin-top: 20px;
  }
`;

export const Summary = styled.summary`
  padding: 15px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`;

export const ContensWrap = styled.div`
  padding: 15px;
`;
