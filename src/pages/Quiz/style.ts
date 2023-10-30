import styled from "styled-components";

export const QuizBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  width: 100%;
  height: 100vh;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const SmallTitle = styled.span`
  font-size: 17px;
  color: #000000;
  font-weight: bold;
`;

export const MainTitle = styled.p`
  font-size: 30px;
  color: #004ce0;
  font-weight: bold;
`;

export const Line = styled.div`
  width: 5%;
  height: 0.5%;
  background-color: #3084f2;
`;

export const SelectArea = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: center;
`;

export const SelectBox = styled.div`
  padding: 1rem 30rem;
  border-radius: 100px;
  border: 1px solid #e6e6e6;
  cursor: pointer;
  text-align: center;
  background: #fbfbfb;
`;
