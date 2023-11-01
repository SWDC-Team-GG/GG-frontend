import logo from "assets/logo.svg";
import * as S from "./style";

function Login() {
  return (
    <S.Layout>
      <S.Logo src={logo} />
      <S.LogoText>readable</S.LogoText>
      <S.Input placeholder="아이디" />
      <S.Input placeholder="비밀번호" />
      <S.Login>로그인</S.Login>
    </S.Layout>
  );
}

export default Login;
