import React, { useState } from "react";
import * as S from "./style";

function Home() {
  const [page, setPage] = useState(0);
  const data = [
    {
      question: "최종학력이 어떻게 되세요?",
      name: "education",
      option: ["초등학교", "중학교", "고등학교", "대학교", "대학원"],
    },
    {
      question: "현재 재직/전공중이거나 관심 있는 분야가 어디신가요?",
      name: "field",
      option: ["철학", "문학", "경제", "과학", "IT", "만화"],
    },
  ];
  return (
    <S.Layout>
      <S.SurveyBox>
        <div>{page + 1} / 2</div>
        <S.Title>{data[page].question}</S.Title>
        <S.Form>
          {data[page].option.map((item) => (
            <label>
              <S.RadioBox
                type={page === 0 ? "checkbox" : "radio"}
                name={data[page].name}
                value={item}
              />{" "}
              {item}
            </label>
          ))}
          <S.ButtonBox>
            {page + 1 === data.length ? (
              <S.SubmitButton>제출하기</S.SubmitButton>
            ) : (
              <S.AfterButton
                onClick={() => {
                  setPage(page + 1);
                }}
              >
                다음
              </S.AfterButton>
            )}
          </S.ButtonBox>
        </S.Form>
      </S.SurveyBox>
    </S.Layout>
  );
}

export default Home;
