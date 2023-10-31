import React from "react";
import * as S from "./style";

function Home() {
  const exp = ["초등학교", "중학교", "고등학교"];
  return (
    <S.Container>
      <S.SubTitle>1 / 2</S.SubTitle>
      <S.Title>해당하는 사항에 체크해주세요</S.Title>
      <form method="get" action="form-action.html">
        <S.DescTitle>자신의 학력</S.DescTitle>
        {exp.map((item) => (
          <S.CheckLabel>
            <S.Input type="radio" name="color" value="item" />
            {item}
          </S.CheckLabel>
        ))}
      </form>
    </S.Container>
  );
}

export default Home;
