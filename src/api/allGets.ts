import customAxios from "libs/customAxios";

const getUser = async () => {
  const res = await customAxios.get("/");
  return res;
};

const logout = async () => {
  const res = await customAxios.get("/logout");
  return res;
};

export { getUser, logout };
