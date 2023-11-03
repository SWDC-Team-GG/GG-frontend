import axios, { AxiosInstance } from "axios";

const backendAxios: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
});

export default backendAxios;
