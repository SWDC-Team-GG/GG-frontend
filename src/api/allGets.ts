import customAxios from "libs/customAxios";

const getUser = async () => {
  const { data } = await customAxios.get("/");
  return data;
};

const getLogout = async () => {
  const { data } = await customAxios.get("/logout");
  return data;
};

export { getUser, getLogout };
