import styled from "styled-components";
import { Link } from "react-router-dom";

export const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 7vh;
  align-items: center;
  border-bottom: 1px solid #3195dd;
`;

export const LogoBox = styled(Link)`
  width: 15%;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

export const LogoText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #314fdd;
`;

export const LogoImg = styled.img`
  width: 15%;
`;

export const NavigationBox = styled.div`
  display: flex;
  gap: 2rem;
  width: 70%;
`;

export const Navigation = styled(Link)`
  color: black;
`;

export const AccountBox = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Account = styled.div`
  cursor: pointer;
`;
