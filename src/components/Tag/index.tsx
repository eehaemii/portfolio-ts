import * as S from "./styled";
import { IPropsTag } from "./interface";

export default function Tag({ message }: IPropsTag) {
  return <S.Tag>{message}</S.Tag>;
}
