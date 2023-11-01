import styled from "styled-components";

export const Layout = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  gap: 2rem;
`;

export const Logo = styled.img`
  width: 6.5%;
`;

export const LogoText = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #314fdd;
`;

export const Input = styled.input`
  width: 20%;
  font-size: 1.1rem;
  padding: 1rem 0.5rem;
  border-radius: 5px;
  border: 1px solid black;
`;

export const Register = styled.button`
  border-radius: 5px;
  padding: 1rem 2rem;
  border: none;
  background-color: #314fdd;
  color: white;
`;
