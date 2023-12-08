import { DefaultTheme } from "styled-components";

const colors = {
  primary1: "#2d3862",
  primary2: "#1677ff",
  primary3: "#4096ff",

  gray1: "#d9d9d9",
  gray2: "#595959",
  gray3: "#ababab",

  danger1: "#ff4d4f",
  danger2: "#ff7875",
  error: "#ff4d4f",
  warning: "#faad14",

  secondary1: "rgba(243, 88, 37, 0.2)",
  secondary2: "rgba(0, 123, 201, 0.2)",
  secondary3: "rgba(175, 0, 219, 0.2)",
  secondary4: "rgba(0, 84, 237, 0.2)",
  secondary5: "rgba(247, 224, 24, 0.2)",
  secondary6: "rgba(11, 216, 255, 0.2)",
  secondary7: "rgba(63, 184, 131, 0.2)",
  secondary8: "rgba(86, 61, 124, 0.2)",

  white: "#fff",
  black: "#000",
};

export type ColorsType = typeof colors;

export const theme: DefaultTheme = {
  colors,
};
