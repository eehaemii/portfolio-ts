import styled from "styled-components";
import { theme } from "../../styles/theme";
import { IPropsLineCard } from "./interface";

export type Props = Partial<IPropsLineCard>;

export const LineCardWrap = styled.article<Props>`
  display: flex;
  position: relative;
  padding: 2em;
  background-color: ${theme.colors.white};
  border-radius: 10px;
  box-shadow: 0px 1px 3px #dcdcdc;
  text-align: left;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: ${theme.colors.primary1};
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
`;
