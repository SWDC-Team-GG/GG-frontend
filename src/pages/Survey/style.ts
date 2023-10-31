import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  align-items: center;
  justify-content: center;
`;

export const SurveyBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35%;
  height: 80%;
  border-radius: 25px;
  padding: 2rem;
  gap: 1rem;
  border: 1px solid black;
`;

export const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 90%;
  margin-top: 5%;
  gap: 2rem;
`;

export const RadioBox = styled.input`
  width: 1rem;
`;

export const AfterButton = styled.div`
  position: absolute;
  top: 70%;
  background-color: #314fdd;
  border: none;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  color: white;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
