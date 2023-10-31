import React from "react";
import logo from "assets/logo.svg";
import * as S from "./style";

function Header() {
  return (
    <S.Layout>
      <S.LogoBox to="/">
        <S.LogoImg src={logo} />
        <S.LogoText>readable</S.LogoText>
      </S.LogoBox>
      <S.NavigationBox>
        <S.Navigation to="/quiz">퀴즈</S.Navigation>
        <S.Navigation to="/dict">검색기록&사전</S.Navigation>
      </S.NavigationBox>
      <S.AccountBox>
        <S.Account>회원가입</S.Account>
        <S.Account>로그인</S.Account>
      </S.AccountBox>
    </S.Layout>
  );
}

export default Header;
