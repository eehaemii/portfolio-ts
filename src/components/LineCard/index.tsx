import * as S from "./styled";
import Tag from "../Tag";
import { IPropsLineCard } from "./interface";

export default function LineCard({ data, companyName, list }: IPropsLineCard) {
  return (
    <S.LineCardWrap>
      <h2 className="blind">경력 목록</h2>

      <S.CompanyData>{data}</S.CompanyData>

      <S.Line />

      <S.CompanyWrap>
        <S.CompanyName>{companyName}</S.CompanyName>
        {list?.map((item: any) => {
          return <Tag message={item.message} themeType={item.theme} />;
        })}
      </S.CompanyWrap>
    </S.LineCardWrap>
  );
}
