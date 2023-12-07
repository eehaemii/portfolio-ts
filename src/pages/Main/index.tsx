import * as S from "./styled";

export default function Main() {
  return (
    <S.MainWrap>
      <S.MainArea>
        <div className="main__area--box--reveal">
          <span className="tit tit--welcome">
            WELCOME , <i className="icon">🖐</i>
          </span>
          <span className="tit tit--name" />
          <span className="tit tit--port" />
        </div>
      </S.MainArea>
    </S.MainWrap>
  );
}
