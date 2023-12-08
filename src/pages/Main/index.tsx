import * as S from "./styled";

export default function Main() {
  return (
    <S.MainWrap>
      <S.MainArea>
        <S.MainAreaReveal>
          <S.MainTitleWelcome>
            WELCOME , <S.Icon className="icon">🖐</S.Icon>
          </S.MainTitleWelcome>
        </S.MainAreaReveal>
      </S.MainArea>
    </S.MainWrap>
  );
}
