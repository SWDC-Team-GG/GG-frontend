import customAxios from "libs/customAxios";

const postLogin = async (userId: string, password: string) => {
  await customAxios.post("/login", {
    userId,
    password,
  });
};

export { postLogin };
