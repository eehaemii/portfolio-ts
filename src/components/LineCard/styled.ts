import styled from "styled-components";
import { theme } from "../../styles/theme";
import { IPropsLineCard } from "./interface";

export type Props = Partial<IPropsLineCard>;

export const LineCardWrap = styled.article<Props>`
  display: inline-flex;
  align-items: center;
  flex: 1 1 40%;
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

export const CompanyData = styled.span`
  display: block;
  width: 180px;
  font-size: 1.16em;
  color: ${theme.colors.gray3};
`;

export const Line = styled.span`
  display: inline-block;
  width: 60px;
  height: 1px;
  margin-right: 30px;
  background-color: ${theme.colors.gray1};
`;

export const CompanyWrap = styled.div``;

export const CompanyName = styled.h3`
  display: block;
  padding-bottom: 8px;
  font-size: 1.2em;
`;
