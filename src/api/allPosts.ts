import { ITranslateWord } from "interfaces/ITranslateWord";
import backendAxios from "libs/backendAxios";

const login = async (userId: string, password: string) => {
  const { data } = await backendAxios.post("/login", {
    userId,
    password,
  });
  return data;
};

const signIn = async (userId: string, name: string, password: string) => {
  const { data } = await backendAxios.post("/signin", {
    userId,
    name,
    password,
  });
  return data;
};

const userInfo = async (education: number, field: number) => {
  const { data } = await backendAxios.post("/level", { education, field });
  return data;
};

const search = async (words: ITranslateWord[]) => {
  const { data } = await backendAxios.post("/search", words);
  return data;
};

export { login, signIn, userInfo, search };
