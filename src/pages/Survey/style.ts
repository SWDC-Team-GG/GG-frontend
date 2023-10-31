import styled from "styled-components";

export const ROOT = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 60%;
  height: 50%;
  margin-top: 60px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  padding: 0 40px 40px 40px;
`;

export const PageNumber = styled.div`
  text-align: center;
  font-size: 1rem;
  margin: 20px 0px 5px 0px;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 60px;
`;

export const SurveyContents = styled(Title)`
  text-align: left;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const RadioLabel = styled.div`
  display: block;
  font-size: 16px;
  margin-top: 30px;
`;

export const RadioBox = styled.input`
  margin-right: 10px;
  width: 14px;
  height: 14px;
  border-radius: 24px;
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
  margin-top: 50px;
  justify-content: space-between;
`;
