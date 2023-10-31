import React from "react";
import IWordprops from "interfaces/IWordprops";
import * as S from "./style";

function Word({ item }: { item: IWordprops }) {
  return (
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
  );
}

export default Word;
