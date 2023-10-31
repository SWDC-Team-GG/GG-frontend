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
