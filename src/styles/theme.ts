import { DefaultTheme } from "styled-components";

const colors = {
  primary1: "#2d3862",
  primary2: "#1677ff",
  primary3: "#4096ff",

  gray1: "#d9d9d9",
  gray2: "#595959",

  danger1: "#ff4d4f",
  danger2: "#ff7875",
  error: "#ff4d4f",
  warning: "#faad14",

  white: "#fff",
  black: "#000",
};

export type ColorsType = typeof colors;

export const theme: DefaultTheme = {
  colors,
};
