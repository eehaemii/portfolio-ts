import { ETheme, ESize, EThemeTag } from "../../interfaces/common";
import * as S from "./styled";
import Button from "../../components/Button";
import Tag from "../../components/Tag";

export default function Sample() {
  return (
    <div style={{ margin: "20px" }}>
      <S.Details>
        <S.Summary>Button</S.Summary>
        <S.ContensWrap>
          <div style={{ display: "flex", gap: "10px" }}>
            <Button>DEFAULT</Button>
            <Button themeType={ETheme.LINE}>LINE</Button>
            <Button themeType={ETheme.DANGER}>DANGER</Button>
            <Button disabled>disabled</Button>
          </div>

          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <Button size={ESize.LARGE}>LARGE</Button>
            <Button size={ESize.MEDIUM}>MEDIUM</Button>
            <Button size={ESize.SMALL}>SMALL</Button>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            <Button fullwidth>fullwidth</Button>
            <Button themeType={ETheme.LINE} fullwidth>
              fullwidth
            </Button>
            <Button themeType={ETheme.DANGER} fullwidth>
              fullwidth
            </Button>
            <Button themeType={ETheme.DANGER}>fullwidth</Button>
          </div>
        </S.ContensWrap>
      </S.Details>

      <S.Details>
        <S.Summary>Tag</S.Summary>

        <div>
          <Tag message="message" themeType={EThemeTag.HTML} />
        </div>
      </S.Details>
    </div>
  );
}
