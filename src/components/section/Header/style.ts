import styled from "styled-components";

export const Header = styled.div`
  @media screen and (max-width: 500px) {
    justify-content: space-between;
  }
  width: 100%;
  height: 70px;
  padding: 10px 10px 10px 30px;
  display: flex;
  align-items: center;
  background-color: white;
  border-bottom: 2px solid #3084f2;
  box-shadow: 0px 0px 20px -10px #3084f2;
  .arrow {
    @media screen and (min-width: 500px) {
      display: none;
    }
  }
  gap: 2rem;
`;

export const Title = styled.p`
  color: #3084f2;
  font-weight: 400;
  text-align: center;
  font-size: 1.1rem;
`;

export const NavTitle = styled(Title)`
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
export const Logo = styled.div`
  color: #3084f2;
  font-size: 1.5rem;
  font-weight: 900;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 5vh;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
