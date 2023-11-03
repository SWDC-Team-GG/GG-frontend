import React, { useEffect, useState } from "react";
import search from "assets/search.svg";
import Word from "components/Word";
import { ITranslateWord } from "interfaces/ITranslateWord";
import { getSearch } from "api/allGets";
import { ToastContainer, toast } from "react-toastify";
import * as S from "./style";

function Dict() {
  const [data, setData] = useState<ITranslateWord[]>();

  const findMySerach = async () => {
    try {
      const res = await getSearch();
      setData(res);
    } catch {
      toast.error("에러가 발생하였습니다");
    }
  };

  useEffect(() => {
    findMySerach();
  });

  return (
    <>
      <S.DictMain>
        <S.MainText>
          <S.Blue>단어</S.Blue>사전
        </S.MainText>
        <S.SearchBox>
          <S.SearchImg src={search} />
          <S.SearchBoxInput placeholder="Search" />
        </S.SearchBox>
        <S.WordArea>
          <S.RecentText>검색기록</S.RecentText>
          {data?.map((word) => <Word word={word} />)}
        </S.WordArea>
      </S.DictMain>
      <ToastContainer />
    </>
  );
}

export default Dict;
