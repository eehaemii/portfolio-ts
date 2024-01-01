import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/theme";

export const shake = keyframes`
  0% {transform: rotateZ(3deg);}
  100% {transform: rotateZ(-3deg);}
`;

export const showText = keyframes`
  0% {color: transparent;}
  50%, 100% {
    color: ${theme.colors.white};
    text-shadow: 2px 2px rgba(250,250,250,0.2);
  }
`;

export const blockReveal = keyframes`
  0% {
    -webkit-transform: translate(-110%, 0);
            transform: translate(-110%, 0);
  }
  45%, 55% {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
  100% {
    -webkit-transform: translate(110%, 0);
            transform: translate(110%, 0);
  }
`;

export const MainWrap = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #2d3862;
`;

export const MainArea = styled.div`
  position: absolute;
  bottom: 10%;
  left: 10%;
`;

export const MainAreaReveal = styled.div`
  display: inline-flex;
  align-items: flex-start;
  flex-direction: column;
  --reveal-speed: 0.75;
`;

export const MainTitle = styled.span`
  position: relative;
  font-weight: bold;
  font-size: 8vmin;
  color: ${theme.colors.white};
  overflow: hidden;
  letter-spacing: 6px;
  animation: ${showText} calc(var(--reveal-speed, 0.5) * 1s)
    calc(var(--delay) * 1s) steps(1) both;
  // --delay: 0.9;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: var(--color, #1e90ff);
    animation: ${blockReveal} calc(var(--reveal-speed, 0.5) * 1s)
      calc(var(--delay) * 1s) both;
  }
`;

export const Icon = styled.i`
  display: inline-block;
  font-size: 0.9em;
  animation: ${shake} 0.6s infinite alternate;
  transform-origin: 50% 100%;
  --delay: 0.9;
`;
