import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";
import { ESize, ETheme } from "../../interfaces/common";
import { IPropsButton, TSizeInfo, TThemeInfo } from "./interface";

export type Props = Partial<IPropsButton>;

export const buttonTheme: TThemeInfo = {
  [ETheme.DEFAULT]: {
    border: `${theme.colors.primary2}`,
    background: `${theme.colors.primary2}`,
    color: `${theme.colors.white}`,
    activeBorder: `${theme.colors.primary3}`,
    activeBackground: `${theme.colors.primary3}`,
  },

  [ETheme.LINE]: {
    border: `${theme.colors.gray1}`,
    background: `${theme.colors.white}`,
    color: `${theme.colors.gray2}`,
    activeBorder: `${theme.colors.primary2}`,
    activeColor: `${theme.colors.primary2}`,
  },

  [ETheme.DANGER]: {
    border: `${theme.colors.danger1}`,
    background: `${theme.colors.white}`,
    color: `${theme.colors.danger1}`,
    activeBorder: `${theme.colors.danger2}`,
    activeColor: `${theme.colors.danger2}`,
  },
};

export const buttonSizes: TSizeInfo = {
  [ESize.LARGE]: {
    height: "46px",
    fontSize: "18px",
  },
  [ESize.MEDIUM]: {
    height: "40px",
    fontSize: "16px",
  },
  [ESize.SMALL]: {
    height: "34px",
    fontSize: "14px",
  },
};

export const themeStyle = css<Props>`
  ${({ themeType }) => {
    return (
      themeType &&
      css`
        border: 1px solid ${buttonTheme[themeType].border};
        background: ${buttonTheme[themeType].background};
        color: ${buttonTheme[themeType].color};

        &:hover:not(:disabled),
        &:active:not(:disabled) {
          border: 1px solid ${buttonTheme[themeType].activeBorder};
          background: ${buttonTheme[themeType].activeBackground};
          color: ${buttonTheme[themeType].activeColor};
        }
      `
    );
  }}
`;

export const fullSize = css<Props>`
  ${({ fullwidth }) =>
    fullwidth &&
    css`
      width: 100%;
    `}
`;

export const sizeStyle = css<Props>`
  ${({ size }) =>
    size &&
    css`
      height: ${buttonSizes[size].height};
      font-size: ${buttonSizes[size].fontSize};
    `}
`;

export const Button = styled.button<Props>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  border-radius: 5px;
  font-weight: 400;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.88);

  /* theme */
  ${themeStyle}
  /* size */
  ${sizeStyle}
  /* fullsize */
  ${fullSize}

  &:disabled {
    border-color: ${theme.colors.gray1};
    color: rgba(0, 0, 0, 0.25);
    background-color: rgba(0, 0, 0, 0.04);
    box-shadow: none;
    cursor: not-allowed;
  }
`;
