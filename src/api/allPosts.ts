import customAxios from "libs/customAxios";

const login = async (userId: string, password: string) => {
  const { data } = await customAxios.post("/login", {
    userId,
    password,
  });
  return data;
};

const signIn = async (userId: string, name: string, password: string) => {
  const { data } = await customAxios.post("/signin", {
    userId,
    name,
    password,
  });
  return data;
};

export { login, signIn };
