import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AxiosError } from "axios";
import { userInfo } from "api/allPosts";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

interface IField {
  [key: string]: number;
}

function Home() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [education, setEducation] = useState("");
  const [field, setField] = useState<IField>({
    철학: 0,
    문학: 0,
    경제: 0,
    과학: 0,
    IT: 0,
    만화: 0,
  });

  const data = [
    {
      question: "최종학력이 어떻게 되세요?",
      name: "education",
      option: ["초등학교", "중학교", "고등학교", "대학교", "대학원"],
    },
    {
      question: "관심을 가지시는 분야의 어휘 수준이 어떻게 되시나요?",
      name: "field",
      option: ["철학", "문학", "경제", "과학", "IT", "만화"],
    },
  ];

  const handleField = (item: string) => {
    if (field[item]) {
      setField({ ...field, [item]: 0 });
    } else {
      setField({ ...field, [item]: 1 });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (education.length === 0) {
        return toast.error("학력 정보를 입력하지 않았습니다");
      }
      const eduInt = data[0].option.indexOf(education) + 1;
      const fieldAvg =
        Object.values(field).reduce((a, b) => a + b, 0) /
        Object.values(field).length;

      const res = await userInfo(eduInt, fieldAvg);
      navigate("/");
      return toast.success(`${res}`);
    } catch (err) {
      const axiosError = err as AxiosError;
      if (err && axiosError.response) {
        return toast.error(`${axiosError.response.data}`);
      }
      return toast.error("알 수 없는 에러가 발생하였습니다!");
    }
  };
  return (
    <>
      <S.Layout>
        <S.SurveyBox>
          <div>{page + 1} / 2</div>
          <S.Title>{data[page].question}</S.Title>
          <S.Form onSubmit={handleSubmit}>
            {data[page].option.map((item) => (
              <S.QuestionBox>
                {page === 0 ? (
                  <label>
                    <S.OptionBox
                      type="radio"
                      name={data[page].name}
                      value={item}
                      checked={education === item}
                      onChange={() => setEducation(item)}
                    />{" "}
                    {item}
                  </label>
                ) : (
                  <>
                    <label>
                      <S.OptionBox
                        type="checkbox"
                        name={data[page].name}
                        value={item}
                        checked={field[item] >= 1}
                        onChange={() => handleField(item)}
                      />{" "}
                      {item}
                    </label>
                    <S.InputNumber
                      type="number"
                      name={item}
                      value={field[item]}
                      style={{ opacity: field[item] === 0 ? 0 : 1 }}
                      min={0}
                      max={10}
                      onChange={(e) =>
                        setField({
                          ...field,
                          [item]: parseInt(e.currentTarget.value, 10),
                        })
                      }
                    />
                  </>
                )}
              </S.QuestionBox>
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
      <ToastContainer />
    </>
  );
}

export default Home;
