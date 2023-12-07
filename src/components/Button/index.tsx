import { IPropsButton } from "./interface";
import { ETheme, ESize } from "../../interfaces/common";
import * as S from "./styled";

export default function Button({
  children,
  type = "button",
  themeType = ETheme.DEFAULT,
  size = ESize.MEDIUM,
  onClick,
  ...props
}: IPropsButton) {
  return (
    <S.Button
      type={type}
      themeType={themeType}
      size={size}
      onClick={onClick}
      fullwidth={props.fullwidth}
      disabled={props.disabled}
      {...props}
    >
      {children}
    </S.Button>
  );
}
