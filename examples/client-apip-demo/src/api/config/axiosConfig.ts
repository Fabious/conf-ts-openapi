import axios from "axios";

export const api = axios.create({
  withCredentials: false,
  baseURL: "https://demo.api-platform.com",
});
