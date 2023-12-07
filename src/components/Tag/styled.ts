import styled, { css } from "styled-components";
import { EThemeTag } from "../../interfaces/common";
import { IPropsTag, TThemeInfo } from "./interface";
import { theme } from "../../styles/theme";

export type Props = Partial<IPropsTag>;

export const ThemeTag: TThemeInfo = {
  [EThemeTag.HTML]: {
    border: `${theme.colors.primary2}`,
    background: `${theme.colors.primary2}`,
    color: `${theme.colors.white}`,
    activeBorder: `${theme.colors.primary3}`,
    activeBackground: `${theme.colors.primary3}`,
  },

  [EThemeTag.CSS]: {
    border: `${theme.colors.gray1}`,
    background: `${theme.colors.white}`,
    color: `${theme.colors.gray2}`,
    activeBorder: `${theme.colors.primary2}`,
    activeColor: `${theme.colors.primary2}`,
  },

  [EThemeTag.JAVASCRIPT]: {
    border: `${theme.colors.danger1}`,
    background: `${theme.colors.white}`,
    color: `${theme.colors.danger1}`,
    activeBorder: `${theme.colors.danger2}`,
    activeColor: `${theme.colors.danger2}`,
  },
};

export const themeStyle = css<Props>`
  ${({ themeType }) => {
    return (
      themeType &&
      css`
        border: 1px solid ${ThemeTag[themeType].border};
        background: ${ThemeTag[themeType].background};
        color: ${ThemeTag[themeType].color};

        &:hover:not(:disabled),
        &:active:not(:disabled) {
          border: 1px solid ${ThemeTag[themeType].activeBorder};
          background: ${ThemeTag[themeType].activeBackground};
          color: ${ThemeTag[themeType].activeColor};
        }
      `
    );
  }}
`;

export const Tag = styled.span<Props>`
  display: inline-flex;
  gap: 5px;
  padding: 3px 5px;
  background-color: rgba(11, 216, 255, 0.2);
  font-size: 0.7em;

  ${themeStyle}
`;
