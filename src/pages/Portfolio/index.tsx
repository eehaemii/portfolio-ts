import * as S from "./styled";
import { IPropsPortItem } from "./interface";

import pro01 from "../../assets/images/project/theme01.jpg";
import pro02 from "../../assets/images/project/theme02.jpg";
import pro03 from "../../assets/images/project/theme03.jpg";
import pro04 from "../../assets/images/project/theme04.jpg";
import pro05 from "../../assets/images/project/project01.jpg";
import pro06 from "../../assets/images/project/project02.jpg";
import pro07 from "../../assets/images/project/project03.jpg";
import pro08 from "../../assets/images/project/project04.jpg";
import pro09 from "../../assets/images/project/project05.jpg";
import pro10 from "../../assets/images/project/project06.jpg";
import pro11 from "../../assets/images/project/project07.jpg";
import pro12 from "../../assets/images/project/project08.jpg";

export default function Portfolio() {
  const projectList: object[] = [
    {
      id: 12,
      image: pro12,
    },
    {
      id: 11,
      image: pro11,
    },
    {
      id: 10,
      image: pro10,
    },
    {
      id: 9,
      image: pro09,
    },
    {
      id: 8,
      image: pro08,
    },
    {
      id: 7,
      image: pro07,
    },
    {
      id: 6,
      image: pro06,
    },
    {
      id: 5,
      image: pro05,
    },
    {
      id: 4,
      image: pro04,
    },
    {
      id: 3,
      image: pro03,
    },
    {
      id: 2,
      image: pro02,
    },
    {
      id: 1,
      image: pro01,
    },
  ];

  return (
    <S.PortfolioWrap>
      <S.PortfolioTitle>PORTFOLIO</S.PortfolioTitle>
      <S.PortfolioListArea>
        <S.ProjectList>
          {projectList?.map((item: IPropsPortItem) => {
            return (
              <S.ProjectImgItem key={item.id}>
                <S.ProjectImg
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                />
              </S.ProjectImgItem>
            );
          })}
        </S.ProjectList>
      </S.PortfolioListArea>

      <S.Div>
        <img src={pro01} alt="img" />
        <span>제목</span>
      </S.Div>
    </S.PortfolioWrap>
  );
}
