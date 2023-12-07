import { ESize, ETheme } from "../../interfaces/common";

export interface IPropsButton {
  children: React.ReactElement | string | number;
  themeType?: ETheme;
  type?: "submit" | "button" | "reset";
  variant?: "default" | "primary" | "success" | "warning" | "error";
  size?: ESize;
  fullwidth?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export type TThemeInfo = {
  [key in ETheme]: {
    border: string;
    background: string;
    color: string;
    activeBorder: string;
    activeBackground?: string;
    activeColor?: string;
  };
};

export type TSizeInfo = {
  [key in ESize]: {
    height: string;
    fontSize: string;
  };
};
