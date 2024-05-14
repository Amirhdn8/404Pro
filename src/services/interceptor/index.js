import axios from "axios";

export const http = axios.create({
  baseURL: "https://classapi.sepehracademy.ir/api",
});
