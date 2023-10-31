import { VscArrowLeft } from "react-icons/vsc";
import React from "react";
import Logo from "assets/logo.svg";
import * as S from "./style";

function Header() {
  return (
    <S.Header>
      {/* <VscArrowLeft
        className="arrow"
        onClick={() => {}}
        size={24}
        style={{ color: "#3084f2" }}
      /> */}
      <S.LogoContainer>
        <S.LogoImg src={Logo} />
        <S.Logo>Readable</S.Logo>
      </S.LogoContainer>
      <S.Title>타이틀</S.Title>
      <S.NavTitle>단어 사전</S.NavTitle>
      <S.NavTitle>퀴즈</S.NavTitle>
      {/* <VscArrowLeft size={24} style={{ visibility: "hidden" }} /> */}
    </S.Header>
  );
}

export default Header;
