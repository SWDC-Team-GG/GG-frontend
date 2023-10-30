import { VscArrowLeft } from "react-icons/vsc";
import React from "react";
import * as S from "./style";

function Header() {
  return (
    <S.Header>
      <VscArrowLeft onClick={() => {}} size={24} style={{ color: "#3084f2" }} />
      <S.Title>타이틀</S.Title>
      <VscArrowLeft size={24} style={{ visibility: "hidden" }} />
    </S.Header>
  );
}

export default Header;
