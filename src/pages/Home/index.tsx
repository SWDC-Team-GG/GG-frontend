import React, { useRef } from "react";
import IWordprops from "interfaces/IWordprops";
import Word from "components/Word";
import camera from "assets/camera.png";
import copy from "assets/copy.png";
import { ToastContainer, toast } from "react-toastify";
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

  const handleCopy = async (text: string | undefined) => {
    if (typeof text === "undefined") {
      return toast.error("텍스트가 없습니다!");
    }
    try {
      await navigator.clipboard.writeText(text);
      return toast.success("복사되었습니다");
    } catch {
      return toast.error("복사 실패");
    }
  };

  return (
    <>
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
                <S.Addons>
                  <S.ButtomNav
                    onClick={() => handleCopy(textareaRef.current?.value)}
                  >
                    <S.Img src={copy} />
                  </S.ButtomNav>
                  <S.ButtomNav>
                    <S.Img src={camera} />
                  </S.ButtomNav>
                </S.Addons>
                <S.TranslateButton>번역하기</S.TranslateButton>
              </S.ButtomNavBox>
            </S.InputBox>
            <S.InputBox>
              <S.TranslateType>번역문</S.TranslateType>
              <S.TextBox>{translateText}</S.TextBox>
              <S.ButtomNavBox>
                <S.ButtomNav onClick={() => handleCopy(translateText)}>
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
        </S.Container>
      </S.Layout>
      <ToastContainer />
    </>
  );
}

export default Home;
