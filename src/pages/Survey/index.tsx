import React from "react";
import * as S from "./style";

function Home() {
  const exp = ["초등학교", "중학교", "고등학교"];
  return (
    <S.Layout>
      <S.SurveyBox>
        <div>2 / 2</div>
        <S.Title>해당하는 사항에 체크해주세요</S.Title>
        <S.Form>
          {exp.map((item) => (
            <label>
              <S.RadioBox type="radio" name="school" value={item} /> {item}
            </label>
          ))}
        </S.Form>
        <S.ButtonContainer>
          {/* color를 통해 이전, 다음 구분 */}
          <S.AfterButton>다음</S.AfterButton>
        </S.ButtonContainer>
      </S.SurveyBox>
    </S.Layout>
  );
}

export default Home;
