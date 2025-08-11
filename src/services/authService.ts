import { publicApi } from "../api/accountApi";

interface LoginResponse {
  access_token: string;
}

interface EmailResponse {
  codeStatus: string;
}

const AUTH_PREFIX = "/auth"

export const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
  const response = await publicApi.post<LoginResponse>(`${AUTH_PREFIX}/user/login`, { email, password });
  return response.data;
};

export const registerUser = async (username: string, email: string, password: string, phoneNumber: string): Promise<LoginResponse> => {
  const response = await publicApi.post<LoginResponse>(`${AUTH_PREFIX}/user/register`, { username, email, password, phoneNumber });
  return response.data;
};

export const verifyCode = async (code: string): Promise<LoginResponse> => {
  const response = await publicApi.post<LoginResponse>(`${AUTH_PREFIX}/send_code`, { code });
  return response.data;
};

export const sendPhone = async (phoneEmail: string): Promise<EmailResponse> => {
  const response = await publicApi.post<EmailResponse>(`${AUTH_PREFIX}/get_code`, { 
    phone_email: phoneEmail 
  });
  return response.data;
};
