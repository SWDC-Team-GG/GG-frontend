import axios, { AxiosInstance } from "axios";

const customAxios: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export default customAxios;
