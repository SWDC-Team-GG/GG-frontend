import { useState } from "react";
import logo from "assets/logo.svg";
import { signIn } from "api/allPosts";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import * as S from "./style";

function SignIn() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userId.length === 0 || name.length === 0 || password.length === 0) {
      return toast.error("아이디, 닉네임, 비밀번호를 입력해주세요!");
    }
    try {
      const data = await signIn(userId, name, password);
      navigate("/login");
      return toast.success(`${data}`);
    } catch (err) {
      const axiosError = err as AxiosError;
      if (err && axiosError.response) {
        return toast.error(`${axiosError.response.data}`);
      }
      return toast.error("알 수 없는 에러가 발생하였습니다!");
    }
  };
  return (
    <>
      <S.Layout onSubmit={handleSignIn}>
        <S.Logo src={logo} />
        <S.LogoText>readable</S.LogoText>
        <S.Input
          placeholder="아이디"
          onChange={(e) => setUserId(e.currentTarget.value)}
          value={userId}
        />
        <S.Input
          placeholder="닉네임"
          onChange={(e) => setName(e.currentTarget.value)}
          value={name}
        />
        <S.Input
          type="password"
          placeholder="비밀번호"
          onChange={(e) => setPassword(e.currentTarget.value)}
          value={password}
        />
        <S.Register>회원가입</S.Register>
      </S.Layout>
      <ToastContainer />
    </>
  );
}

export default SignIn;
