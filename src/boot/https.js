import axios from "axios";

export const HTTP_WEB = () => {
  const defaultHeaders = {
    Accept: "application/json",
  };
  const webAxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: defaultHeaders,
  });
  return webAxiosInstance;
};

export const HTTP_API = () => {
  const token = localStorage.getItem("access_token");
  const defaultHeaders = {
    "Content-type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}` 
  };
  const webAxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: defaultHeaders,
  });
  return webAxiosInstance;
};
