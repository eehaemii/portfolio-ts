import styled from "styled-components";
import { theme } from "../../styles/theme";

export const PortfolioWrap = styled.section`
  position: relative;
  width: 100%;
  padding: 3em 4em;
  background-color: #2d3862;
`;

export const PortfolioTitle = styled.h1`
  font-weight: 400;
  font-size: 3em;
  color: ${theme.colors.white};
`;

export const PortfolioListArea = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin-top: 25px;
`;
