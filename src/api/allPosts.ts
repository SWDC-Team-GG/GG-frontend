import customAxios from "libs/customAxios";

const login = async (userId: string, password: string) => {
  await customAxios.post("/login", {
    userId,
    password,
  });
};

const signIn = async (userId: string, name: string, password: string) => {
  await customAxios.post("/signin", {
    userId,
    name,
    password,
  });
};

export { login, signIn };
