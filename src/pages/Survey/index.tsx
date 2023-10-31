import React from "react";
import * as S from "./style";

function Home() {
  const exp = ["초등학교", "중학교", "고등학교"];
  return (
    <S.ROOT>
      <S.Container>
        <S.PageNumber>2 / 2</S.PageNumber>
        <S.Title>해당하는 사항에 체크해주세요</S.Title>
        <form>
          <S.SurveyContents>자신의 학력</S.SurveyContents>
          {exp.map((item) => (
            <S.RadioLabel>
              <S.RadioBox type="radio" name="color" value="item" />
              {item}
            </S.RadioLabel>
          ))}
          <S.ButtonContainer>
            <S.BeforeButton>이전</S.BeforeButton>
            {/* color를 통해 이전, 다음 구분 */}
            <S.AfterButton>다음</S.AfterButton>
          </S.ButtonContainer>
        </form>
      </S.Container>
    </S.ROOT>
  );
}

export default Home;
