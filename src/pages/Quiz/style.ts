import styled from "styled-components";

export const QuizBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  height: 88vh;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const SmallTitle = styled.span`
  color: #999;
  letter-spacing: -1px;
`;

export const MainTitle = styled.p`
  font-size: 30px;
  color: #3084f2;
  letter-spacing: -1px;
`;

export const Line = styled.div`
  width: 2rem;
  height: 2.5px;
  background-color: #3195dd;
`;

export const SelectArea = styled.div`
  display: flex;
  gap: 0.7rem;
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
