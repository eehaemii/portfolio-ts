import * as S from "./styled";
import { IPropsTag } from "./interface";

export default function Tag({ message, themeType }: IPropsTag) {
  return <S.Tag themeType={themeType}>{message}</S.Tag>;
}
