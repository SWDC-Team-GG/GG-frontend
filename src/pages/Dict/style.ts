import styled from "styled-components";

export const DictMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  width: 100%;
  margin-top: 5rem;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 35%;
  border: 1px solid #ececec;
  border-radius: 25px;
  background-color: #fbfbfb42;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
`;

export const SearchBoxInput = styled.input`
  width: 100%;
  font-size: 1.2rem;
  border: none;
  outline: none;
`;

export const SearchImg = styled.img`
  width: 4%;
`;

export const WordArea = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const WordBox = styled.div`
  width: 100%;
  padding: 1% 0;
  background: #ccc;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  border: 1px solid #e6e6e6;
  background-color: #fbfbfb;
`;

export const WordBoxBwSw = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1rem;
  font-size: 1.3rem;
  font-weight: bold;
  gap: 0.5rem;
`;

export const Blue = styled.span`
  color: #3084f2;
`;

export const SimilarWord = styled.span`
  color: #3084f2;
  background-color: #e6e6e6;
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 400;
`;

export const WordBoxMean = styled.div`
  padding-bottom: 1rem;
  padding-left: 1rem;
`;
