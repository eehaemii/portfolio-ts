import styled, { css } from "styled-components";
import { EThemeTag } from "../../interfaces/common";
import { IPropsTag, TThemeInfo } from "./interface";
import { theme } from "../../styles/theme";

export type Props = Partial<IPropsTag>;

export const ThemeTag: TThemeInfo = {
  [EThemeTag.HTML]: {
    border: `${theme.colors.secondary1}`,
    background: `${theme.colors.secondary1}`,
  },
  [EThemeTag.CSS]: {
    border: `${theme.colors.secondary2}`,
    background: `${theme.colors.secondary2}`,
  },
  [EThemeTag.SCSS]: {
    border: `${theme.colors.secondary3}`,
    background: `${theme.colors.secondary3}`,
  },
  [EThemeTag.JQUERY]: {
    border: `${theme.colors.secondary4}`,
    background: `${theme.colors.secondary4}`,
  },
  [EThemeTag.JAVASCRIPT]: {
    border: `${theme.colors.secondary5}`,
    background: `${theme.colors.secondary5}`,
  },
  [EThemeTag.REACT]: {
    border: `${theme.colors.secondary6}`,
    background: `${theme.colors.secondary6}`,
  },
  [EThemeTag.VUE]: {
    border: `${theme.colors.secondary7}`,
    background: `${theme.colors.secondary7}`,
  },
  [EThemeTag.BOOTSTRAP]: {
    border: `${theme.colors.secondary8}`,
    background: `${theme.colors.secondary8}`,
  },
};

export const themeStyle = css<Props>`
  ${({ themeType }) => {
    return (
      themeType &&
      css`
        background: ${ThemeTag[themeType].background};
        color: ${theme.colors.black};
      `
    );
  }}
`;

export const Tag = styled.span<Props>`
  display: inline-block;
  margin-right: 5px;
  padding: 4px 10px;
  border-radius: 10px;
  background-color: rgba(11, 216, 255, 0.2);
  font-size: 0.7em;
  word-break: break-word;

  ${themeStyle}
`;
