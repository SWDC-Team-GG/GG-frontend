import styled from "styled-components";

export const DictMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  width: 100%;
  height: 100vh;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 35%;
  height: 5vh;
  border: 1px solid #ececec;
  border-radius: 25px;
  background-color: #fbfbfb42;
  gap: 0.5rem;
  padding: 1rem 1rem;
`;

export const SearchBoxInput = styled.input`
  width: 100%;
  height: 4.5vh;
  border: none;
  outline: none;
  /* margin-left: 10px; */
`;

export const SearchImg = styled.img`
  width: 4%;
  height: 4vh;
  /* margin-left: 10px; */
`;

export const WordArea = styled.div`
  width: 70%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const WordBox = styled.div`
  width: 70%;
  height: 25%;
  background: #ccc;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid #e6e6e6;
  background-color: #fbfbfb;
`;

export const WordBoxBwSw = styled.div`
  display: flex;
  padding: 1rem 1rem;
  font-size: 21px;
  font-weight: bold;
  gap: 0.5rem;
`;

export const Blue = styled.span`
  color: #3084f2;
  font-weight: bold;
`;

export const SimilarWord = styled.span`
  color: #3084f2;
  background-color: #e6e6e6;
  padding: 0.25rem;
  border-radius: 5px;
  font-size: 18px;
`;

export const WordBoxMean = styled.div`
  padding-bottom: 1rem;
  padding-left: 1rem;
  font-size: 15px;
  font-weight: lighter;
`;

export const Example = styled.div`
  color: #55f;
  font-size: 10px;
`;
