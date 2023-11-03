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

const getLevel = async () => {
  const { data } = await backendAxios.get("/level");
  return data;
};

const getSearch = async () => {
  const { data } = await backendAxios.get("/search");
  return data;
};

export { getUser, getLogout, getSurvey, getLevel, getSearch };
