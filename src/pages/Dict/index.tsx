import React from "react";
import search from "assets/search.svg";
import * as S from "./style";

function Dict() {
  const data = [
    {
      id: 1,
      pos: "명사",
      beforeWord: "미망인",
      similarWord: ["과부"],
      mean: "남편이 죽고 배우자 없이 홀로 사는 여자",
    },
    {
      id: 2,
      pos: "명사",
      beforeWord: "금일",
      similarWord: ["오늘", "wkflaf", "wdijad"],
      mean: "지금 지나가고 있는 이날",
    },
    {
      id: 3,
      pos: "명사",
      beforeWord: "나흘",
      similarWord: ["4일", "배고파"],
      mean: "하루가 네 번 있는 시간의 길이. 곧, 네 날",
    },
  ];
  return (
    <S.DictMain>
      <S.SearchBox>
        <S.SearchImg src={search} />
        <S.SearchBoxInput placeholder="Search" />
      </S.SearchBox>
      <S.WordArea>
        {data.map((item) => (
          <S.WordBox>
            <S.WordBoxBwSw>
              {item.beforeWord}
              {item.similarWord.map((word) => (
                <S.SimilarWord>{word}</S.SimilarWord>
              ))}
            </S.WordBoxBwSw>
            <S.WordBoxMean>
              <S.Blue>{item.pos}</S.Blue> {item.mean}
            </S.WordBoxMean>
          </S.WordBox>
        ))}
      </S.WordArea>
    </S.DictMain>
  );
}

export default Dict;
