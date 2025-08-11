// services/api.ts
import axios from "axios";

const RAW = import.meta.env.VITE_API_URL as string | undefined;

if (!RAW) {
  throw new Error("VITE_API_URL is not set. Add it to .env.local and restart Vite (npm run dev).");
}
const API_URL = RAW.replace(/\/+$/, "");

export const publicApi = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔒 Авторизованный экземпляр — автоматически подставляет токен
export const authApi = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

authApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
