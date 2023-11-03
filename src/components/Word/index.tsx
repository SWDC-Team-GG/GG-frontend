import React from "react";
import { ITranslateWord } from "interfaces/ITranslateWord";
import * as S from "./style";

function Word({ word }: { word: ITranslateWord }) {
  return (
    <S.WordBox>
      <S.WordBoxBwSw>
        {word.plainword}
        <S.SimilarWord>{word.translateWord}</S.SimilarWord>
      </S.WordBoxBwSw>
      <S.WordBoxMean>
        <S.Blue>{word.part}</S.Blue> {word.meaning}
      </S.WordBoxMean>
    </S.WordBox>
  );
}

export default Word;
