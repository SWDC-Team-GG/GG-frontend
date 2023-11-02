import React from "react";
import { ToastContainer } from "react-toastify";
import useUser from "hooks/useUser";
import logo from "assets/logo.svg";
import * as S from "./style";

function Header() {
  const { user, isLogined, logout } = useUser();
  return (
    <>
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
          {isLogined ? (
            <>
              <div>{user?.name}님</div>
              <div onClick={logout}>로그아웃</div>
            </>
          ) : (
            <>
              <S.Navigation to="/login">로그인</S.Navigation>
              <S.Navigation to="/signin">회원가입</S.Navigation>
            </>
          )}
        </S.AccountBox>
      </S.Layout>
      <ToastContainer />
    </>
  );
}

export default Header;
