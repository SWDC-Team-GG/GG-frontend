import axios from "axios";
import backendAxios from "libs/backendAxios";

const getUser = async () => {
  const { data } = await backendAxios.get("/");
  return data;
};

const getLogout = async () => {
  const { data } = await backendAxios.get("/logout");
  return data;
};

const getSurvey = async () => {
  const { data } = await backendAxios.get("/survey");
  return data;
};

const getTranslate = async (text: string) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_FLASK_BASE_URL}/translate?text=${text}`,
  );
  return data;
};

const getSearch = async () => {
  const { data } = await backendAxios.get("/search");
  return data;
};

export { getUser, getLogout, getSurvey, getTranslate, getSearch };
