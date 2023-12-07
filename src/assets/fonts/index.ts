import { createGlobalStyle } from 'styled-components';
import PretendardLWoff from './pretendard/Pretendard-Light.woff';
import PretendardLWoff2 from './pretendard/Pretendard-Light.woff2';
import PretendardRWoff from './pretendard/Pretendard-Regular.woff';
import PretendardRWoff2 from './pretendard/Pretendard-Regular.woff2';
import PretendardMWoff from './pretendard/Pretendard-Medium.woff';
import PretendardMWoff2 from './pretendard/Pretendard-Medium.woff2';
import PretendardBWoff from './pretendard/Pretendard-Bold.woff';
import PretendardBWoff2 from './pretendard/Pretendard-Bold.woff2';
import PretendardEBWoff from './pretendard/Pretendard-ExtraBold.woff';
import PretendardEBWoff2 from './pretendard/Pretendard-ExtraBold.woff2';

export const GlobalFont = createGlobalStyle`
  /*
   * Pretendard
   * https://github.com/webfontworld/pretendard
   */

  @font-face {
    font-weight: 300;
    font-family: Pretendard;
    font-style: normal;
    src:
      local('pretendard-Light'),
      url(${PretendardLWoff2}) format('woff2'),
      url(${PretendardLWoff}) format('woff'); /* Modern Browsers */

    font-display: swap;
  }

  @font-face {
    font-weight: 400;
    font-family: Pretendard;
    font-style: normal;
    src:
      local('pretendard-Regular'),
      url(${PretendardRWoff2}) format('woff2'),
      url(${PretendardRWoff}) format('woff'); /* Modern Browsers */

    font-display: swap;
  }

  @font-face {
    font-weight: 500;
    font-family: Pretendard;
    font-style: normal;
    src:
      local('pretendard-Medium'),
      url(${PretendardMWoff2}) format('woff2'),
      url(${PretendardMWoff}) format('woff'); /* Modern Browsers */

    font-display: swap;
  }

  @font-face {
    font-weight: 700;
    font-family: Pretendard;
    font-style: normal;
    src:
      local('pretendard-Bold'),
      url(${PretendardBWoff2}) format('woff2'),
      url(${PretendardBWoff}) format('woff'); /* Modern Browsers */

    font-display: swap;
  }

  @font-face {
    font-weight: 900;
    font-family: Pretendard;
    font-style: normal;
    src:
      local('pretendard-ExtraBold'),
      url(${PretendardEBWoff}) format('woff2'),
      url(${PretendardEBWoff2}) format('woff'); /* Modern Browsers */

    font-display: swap;
  }
`;
