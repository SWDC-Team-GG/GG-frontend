import logo from "assets/logo.svg";
import * as S from "./style";

function Register() {
  return (
    <S.Layout>
      <S.Logo src={logo} />
      <S.LogoText>readable</S.LogoText>
      <S.Input placeholder="아이디" />
      <S.Input placeholder="닉네임" />
      <S.Input placeholder="비밀번호" />
      <S.Register>회원가입</S.Register>
    </S.Layout>
  );
}

export default Register;
