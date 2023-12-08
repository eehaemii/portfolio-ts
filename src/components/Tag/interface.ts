import { EThemeTag } from "../../interfaces/common";

export interface IPropsTag {
  message?: string;
  themeType?: EThemeTag;
  maxQty?: number | undefined;
}

export type TThemeInfo = {
  [key in EThemeTag]: {
    border: string;
    background: string;
  };
};
