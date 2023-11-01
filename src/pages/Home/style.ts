import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 4rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75%;
`;

export const TranslateBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  gap: 2.5%;
`;

export const TranslateType = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  width: 100%;
  height: 3rem;
  border-bottom: 1px solid #ddd;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
  border-radius: 12px;
`;

export const TextBox = styled.div`
  padding: 1.5rem 1rem;
  min-height: 17.5rem;
  font-size: 1.75rem;
  letter-spacing: 1px;
`;

export const ButtomNavBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
  border-top: 1px solid #ddd;
`;

export const ButtomNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 100%;
  border-right: 1px solid #ddd;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 2.25rem;
`;

export const TranslateButton = styled.div`
  height: 100%;
  padding: 0 1.5rem;
  display: flex;
  border-bottom-right-radius: 12px;
  justify-content: center;
  align-items: center;
  background-color: #3084f2;
  font-size: 1.2rem;
  color: white;
  cursor: pointer;
`;

export const Textarea = styled.textarea`
  font-size: 1.75rem;
  letter-spacing: 1px;
  width: 100%;
  resize: none;
  border: none;
  overflow: hidden;
  outline: none;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid #ddd;
  margin: 2.5rem 0;
`;

export const WordBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
