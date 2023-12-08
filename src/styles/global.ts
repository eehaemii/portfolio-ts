import { createGlobalStyle } from "styled-components";
import { Reset } from "./reset";

export const GlobalStyle = createGlobalStyle`
  ${Reset}

  html{scroll-behavior: smooth;}
  ::-webkit-scrollbar {width: 10px;}
  ::-webkit-scrollbar-thumb {
      background-color: #2f3542;
      border-radius: 10px;
      background-clip: padding-box;
      border: 2px solid transparent;
  }
  ::-webkit-scrollbar-track {
      background-color: grey;
      border-radius: 10px;
      box-shadow: inset 0px 0px 5px white;
  }

  :root {
    --base-delay: 0.5;
    --reveal-speed: 0.5;
    --stagger: 0.1;
    --color: #000;
  }

`;
