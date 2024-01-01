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

export const ProjectList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
`;

export const ProjectImgItem = styled.li`
  flex: 1 1 20%;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`;

export const ProjectImg = styled.span`
  display: block;
  width: 100%;
  height: 250px;
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  transition: background-position 2000ms ease-in-out;

  &:hover {
    background-position: bottom center;
  }
`;

export const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 10vmin;
  background-color: #fff;

  img {
    width: 200px;
    height: 400px;
  }
`;
