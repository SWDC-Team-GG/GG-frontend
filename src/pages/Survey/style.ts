import styled from "styled-components";

export const CheckLabel = styled.div`
  display: block;
  font-size: 16px;
  margin-top: 30px;
`;

export const Input = styled.input`
  margin-right: 10px;
  width: 14px;
  height: 14px;
  border-radius: 24px;
`;

export const SubTitle = styled.div`
  text-align: center;
  font-size: 16px;
  margin: 20px 0px 5px 0px;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 27px;
  font-weight: 900;
  margin-bottom: 60px;
`;

export const DescTitle = styled(Title)`
  text-align: left;
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 20px;
`;

export const Container = styled.div`
  width: 470px;
  margin: 60px auto 0 auto;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  padding: 1px 30px 40px 30px;
`;

export const Before = styled.button`
  width: 100px;
  background-color: lightgray;
  border: none;
  padding: 20px 0;
  border-radius: 8px;
  font-size: 16px;
  color: white;
`;

export const After = styled(Before)`
  width: 300px;
  background-color: #3084f2;
  margin-right: 10;
  border-radius: 8px;
  font-size: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: space-between;
`;
