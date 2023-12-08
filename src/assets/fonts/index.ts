import { createGlobalStyle } from "styled-components";
import SignikaLight from "./signika/Signika-Light.ttf";
import SignikaRegular from "./signika/Signika-Regular.ttf";
import SignikaMedium from "./signika/Signika-Medium.ttf";
import SignikaSemiBold from "./signika/Signika-SemiBold.ttf";
import SignikaBold from "./signika/Signika-Bold.ttf";

export const GlobalFont = createGlobalStyle`
  @font-face {
    font-weight: 300;
    font-family: Signika;
    font-style: normal;
    src:
      local('Signika-Light'),
      url(${SignikaLight}) format('woff'); /* Modern Browsers */

    font-display: swap;
  }

  @font-face {
    font-weight: 400;
    font-family: Signika;
    font-style: normal;
    src:
      local('Signika-Regular'),
      url(${SignikaRegular}) format('woff'); /* Modern Browsers */

    font-display: swap;
  }

  @font-face {
    font-weight: 500;
    font-family: Signika;
    font-style: normal;
    src:
      local('Signika-Medium'),
      url(${SignikaMedium}) format('woff'); /* Modern Browsers */

    font-display: swap;
  }

  @font-face {
    font-weight: 600;
    font-family: Signika;
    font-style: normal;
    src:
      local('Signika-SemiBold'),
      url(${SignikaSemiBold}) format('woff'); /* Modern Browsers */

    font-display: swap;
  }

  @font-face {
    font-weight: 700;
    font-family: Signika;
    font-style: normal;
    src:
      local('Signika-Bold'),
      url(${SignikaBold}) format('woff'); /* Modern Browsers */

    font-display: swap;
  }
`;
