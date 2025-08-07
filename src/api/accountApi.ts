// services/api.ts
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// 🔓 Публичный экземпляр — без токена
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
