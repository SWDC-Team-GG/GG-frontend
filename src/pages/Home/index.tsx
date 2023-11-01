import React, { useRef } from "react";
import IWordprops from "interfaces/IWordprops";
import Word from "components/Word";
import { getUser } from "api/allGets";
import copy from "assets/copy.png";
import * as S from "./style";

function Home() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { translateText, data }: { translateText: string; data: IWordprops[] } =
    {
      translateText: "깊은 사과의 말씀 드립니다.",
      data: [
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
        {
          id: 4,
          pos: "명사",
          beforeWord: "나흘",
          similarWord: ["4일", "배고파"],
          mean: "하루가 네 번 있는 시간의 길이. 곧, 네 날",
        },
      ],
    };

  const handleTextareaHeight = () => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  const handleUser = async () => {
    try {
      const res = await getUser();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.Layout>
      <S.Container>
        <S.TranslateBox>
          <S.InputBox>
            <S.TranslateType>원문</S.TranslateType>
            <S.TextBox>
              <S.Textarea
                rows={1}
                ref={textareaRef}
                onChange={() => handleTextareaHeight()}
                placeholder="번역할 내용을 입력하세요."
              />
            </S.TextBox>
            <S.ButtomNavBox>
              <S.ButtomNav>
                <S.Img src={copy} />
              </S.ButtomNav>
              <S.TranslateButton>번역하기</S.TranslateButton>
            </S.ButtomNavBox>
          </S.InputBox>
          <S.InputBox>
            <S.TranslateType>번역문</S.TranslateType>
            <S.TextBox>{translateText}</S.TextBox>
            <S.ButtomNavBox>
              <S.ButtomNav>
                <S.Img src={copy} />
              </S.ButtomNav>
            </S.ButtomNavBox>
          </S.InputBox>
        </S.TranslateBox>
        <S.Line />
        <S.WordBox>
          {data.map((item) => (
            <Word item={item} key={item.id} />
          ))}
        </S.WordBox>
        <button type="button" onClick={handleUser}>
          내정보확인
        </button>
      </S.Container>
    </S.Layout>
  );
}

export default Home;
