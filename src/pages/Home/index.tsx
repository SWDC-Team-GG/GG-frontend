import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import useUser from "hooks/useUser";
import { getTranslate } from "api/allGets";
import { ITranslateWord, ITranslate } from "interfaces/ITranslateWord";
import Word from "components/Word";
import copy from "assets/copy.png";
import * as S from "./style";

function Home() {
  const { user, isLogined } = useUser();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [translateText, setTranslateText] = useState("");
  const [translateWords, setTranslateWords] = useState<ITranslateWord[]>([]);

  const handleTextareaHeight = () => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  const handleCopy = async (text: string | undefined) => {
    if (typeof text === "undefined") {
      return toast.error("텍스트가 없습니다");
    }
    try {
      await navigator.clipboard.writeText(text);
      return toast.success("복사되었습니다");
    } catch {
      return toast.error("복사 실패");
    }
  };

  const handleTranslate = async () => {
    try {
      if (!isLogined) {
        return toast.error("로그인 후 이용 가능한 서비스입니다");
      }
      if (textareaRef.current === null) {
        return toast.error("텍스트 영역이 없습니다");
      }
      const data: ITranslate = await getTranslate(textareaRef.current.value);
      setTranslateText(data.translateText);
      setTranslateWords(data.translateWords);
    } catch {
      return toast.error("에러가 발생하였습니다");
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
                </S.Addons>
                <S.TranslateButton onClick={handleTranslate}>
                  번역하기
                </S.TranslateButton>
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
            {translateWords.map((word) => (
              <Word word={word} />
            ))}
          </S.WordBox>
        </S.Container>
      </S.Layout>
      <ToastContainer />
    </>
  );
}

export default Home;
