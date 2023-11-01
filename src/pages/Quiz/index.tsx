import React from "react";
import * as S from "./style";

function Quiz() {
  const { data, subject, question } = {
    data: [
      "독서로 도를 전한 세 명의 인물",
      "독서를 해야 하는 세 가지 이유",
      "독서를 하는 세 가지 방법",
    ],
    subject: "이럴 땐 사자성어",
    question: "독서삼도(讀書三到)의 뜻은?",
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
