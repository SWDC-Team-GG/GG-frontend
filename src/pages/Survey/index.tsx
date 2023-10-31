import React from "react";
import * as S from "./style";

function Home() {
  const exp = ["초등학교", "중학교", "고등학교"];
  return (
    <S.Layout>
      <S.SurveyBox>
        {/* <S.PageNumber>2 / 2</S.PageNumber> */}
        <S.Title>해당하는 사항에 체크해주세요</S.Title>
        <S.Line />
        <S.Form>
          {exp.map((item) => (
            <S.RadioLabel>
              <S.RadioBox type="radio" value={item} />
              {item}
            </S.RadioLabel>
          ))}
        </S.Form>
        <S.ButtonContainer>
          <S.BeforeButton>이전</S.BeforeButton>
          {/* color를 통해 이전, 다음 구분 */}
          <S.AfterButton>다음</S.AfterButton>
        </S.ButtonContainer>
      </S.SurveyBox>
    </S.Layout>
  );
}

export default Home;
