import * as S from "./styled";

export default function Main() {
  return (
    <S.MainWrap>
      <S.MainArea>
        <S.MainAreaReveal>
          <S.MainTitle>
            WELCOME , <S.Icon className="icon">🖐</S.Icon>
          </S.MainTitle>
        </S.MainAreaReveal>
      </S.MainArea>
    </S.MainWrap>
  );
}
