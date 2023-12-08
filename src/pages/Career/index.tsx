import LineCard from "../../components/LineCard";
import * as S from "./styled";
import { EThemeTag } from "../../interfaces/common";

export default function Career() {
  const CareerList = [
    {
      index: 0,
      data: "2022.3 ~ 2023.09",
      name: "위펀",
      list: [
        {
          message: "vue",
          theme: EThemeTag.VUE,
        },
        {
          message: "react",
          theme: EThemeTag.REACT,
        },
        {
          message: "javascript",
          theme: EThemeTag.JAVASCRIPT,
        },
        {
          message: "scss",
          theme: EThemeTag.SCSS,
        },
      ],
    },
    {
      index: 1,
      data: "2021.1 ~ 2022.3",
      name: "스카이앤드",
      list: [
        {
          message: "html",
          theme: EThemeTag.HTML,
        },
        {
          message: "css",
          theme: EThemeTag.CSS,
        },
        {
          message: "bootstrap",
          theme: EThemeTag.BOOTSTRAP,
        },
        {
          message: "jQuery",
          theme: EThemeTag.JQUERY,
        },
        {
          message: "react",
          theme: EThemeTag.REACT,
        },
      ],
    },
    {
      index: 2,
      data: "2019.1 ~ 2020.5",
      name: "카이아이컴퍼니",
      list: [
        {
          message: "html",
          theme: EThemeTag.HTML,
        },
        {
          message: "css",
          theme: EThemeTag.CSS,
        },
        {
          message: "bootstrap",
          theme: EThemeTag.BOOTSTRAP,
        },
        {
          message: "jQuery",
          theme: EThemeTag.JQUERY,
        },
      ],
    },
    {
      index: 3,
      data: "2018.1 ~ 2018.12",
      name: "이노아이티",
      list: [
        {
          message: "html",
          theme: EThemeTag.HTML,
        },
        {
          message: "css",
          theme: EThemeTag.CSS,
        },
        {
          message: "scss",
          theme: EThemeTag.SCSS,
        },
        {
          message: "jQuery",
          theme: EThemeTag.JQUERY,
        },
      ],
    },
  ];

  return (
    <S.CareerWrap>
      <S.CareerTitle>CAREER</S.CareerTitle>

      <S.CareerListArea>
        {CareerList.map((item) => {
          return (
            <LineCard
              key={item.index}
              data={item.data}
              companyName={item.name}
              list={item.list}
            />
          );
        })}
      </S.CareerListArea>
    </S.CareerWrap>
  );
}
