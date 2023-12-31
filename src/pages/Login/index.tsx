import logo from "assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "api/allPosts";
import { getSurvey } from "api/allGets";
import { AxiosError } from "axios";
import * as S from "./style";

function Login() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userId.length === 0 || password.length === 0) {
      return toast.error("아이디와 비밀번호를 입력해주세요!");
    }
    try {
      const data = await login(userId, password);
      const isSurveyed = await getSurvey();
      if (!isSurveyed) {
        navigate("/survey");
      } else {
        navigate("/");
      }
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
      <S.Layout onSubmit={handleLogin}>
        <S.Logo src={logo} />
        <S.LogoText>readable</S.LogoText>
        <S.Input
          placeholder="아이디"
          onChange={(e) => setUserId(e.currentTarget.value)}
          value={userId}
        />
        <S.Input
          type="password"
          placeholder="비밀번호"
          onChange={(e) => setPassword(e.currentTarget.value)}
          value={password}
        />
        <S.Login>로그인</S.Login>
      </S.Layout>
      <ToastContainer />
    </>
  );
}

export default Login;
