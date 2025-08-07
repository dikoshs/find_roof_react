import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { sendPhone, verifyCode } from "../../services/authService";

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  codeStatus: string | null;
}

const tokenFromStorage = localStorage.getItem("access_token");

const initialState: AuthState = {
  token: null,
  isAuthenticated: !!tokenFromStorage,
  loading: false,
  error: null,
  codeStatus: null,
};

// Асинхронный `thunk` для логина
export const login = createAsyncThunk(
  "auth/login",
  async ({ code }: { code: string }, { rejectWithValue }) => {
    try {
      const data = await verifyCode(code);
      const token = data.access_token;

      // Сохраняем токен в localStorage
      localStorage.setItem("access_token", token);

      return { token };
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

export const sendPhoneNumber = createAsyncThunk(
  "auth/send_phone_number",
  async ({ phoneNumber }: { phoneNumber: string }, { rejectWithValue }) => {
    try {
      const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");
      const data = await sendPhone(cleanedPhoneNumber);
      return { codeStatus: data.codeStatus };
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("access_token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<{ token: string }>) => {
        state.loading = false;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(sendPhoneNumber.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendPhoneNumber.fulfilled, (state, action: PayloadAction<{ codeStatus: string }>) => {
        state.loading = false;
        state.codeStatus = action.payload.codeStatus;
        state.isAuthenticated = true;
      })
      .addCase(sendPhoneNumber.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
