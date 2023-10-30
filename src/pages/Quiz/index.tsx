import React from "react";
import * as S from "./style";

function Quiz() {
  const { data, subject, question } = {
    data: [1, 2, 3, 4],
    subject: "퀴즈",
    question: "당신은 살아 있습니까?",
  };

  return (
    <S.QuizBox>
      <S.TitleBox>
        <S.SmallTitle>{subject}</S.SmallTitle>
        <S.MainTitle>{question}</S.MainTitle>
      </S.TitleBox>
      <S.Line />
      <S.SelectArea>
        {data.map((item) => (
          <S.SelectBox>{item}</S.SelectBox>
        ))}
      </S.SelectArea>
    </S.QuizBox>
  );
}

export default Quiz;
