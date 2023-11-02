import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 70vh;
  align-items: center;
  justify-content: center;
`;

export const SurveyBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 80vh;
  border-radius: 25px;
  padding: 2rem;
  gap: 1rem;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 2.5rem;
  width: 100%;
  gap: 2rem;
`;

export const QuestionBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RadioBox = styled.input`
  width: 1rem;
`;

export const InputNumber = styled.input`
  width: 2.5rem;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  text-align: center;
  border-radius: 0.3rem;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const AfterButton = styled.div`
  background-color: #314fdd;
  border: none;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  background-color: #314fdd;
  border: none;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 1rem;
`;
