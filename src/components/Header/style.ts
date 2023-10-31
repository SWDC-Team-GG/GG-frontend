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
`;

export const Title = styled.p`
  color: #3084f2;
  font-weight: 400;
  text-align: center;
  font-size: 1.2rem;
`;

export const NavTitle = styled(Title)`
  padding-left: 30px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
