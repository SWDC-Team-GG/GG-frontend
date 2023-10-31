import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  justify-content: flex-start;
`;

export const SurveyBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35%;
  border-radius: 25px;
  padding: 2rem;
`;

export const PageNumber = styled.div`
  text-align: center;
  font-size: 1rem;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 1.3rem;
  font-weight: 900;
  margin-bottom: 60px;
`;

export const Line = styled.div`
  height: 2px;
  width: 100%;
  background-color: black;
`;

export const SurveyContents = styled(Title)`
  text-align: left;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const RadioLabel = styled.div`
  font-size: 16px;
  margin-top: 30px;
`;

export const RadioBox = styled.input`
  width: 1rem;
`;

export const BeforeButton = styled.button`
  width: 30%;
  background-color: lightgray;
  border: none;
  padding: 20px 0;
  border-radius: 8px;
  font-size: 1rem;
  color: white;
`;

export const AfterButton = styled(BeforeButton)`
  width: 66%;
  background-color: #3084f2;
  border-radius: 8px;
  font-size: 1rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 90%;
  margin-top: 50px;
  justify-content: space-between;
`;
