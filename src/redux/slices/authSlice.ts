import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { AxiosError } from "axios";
import { loginUser, registerUser, verifyCode, sendPhone } from "../../services/authService";


type Nullable<T> = T | null;

export interface AuthState {
    token: Nullable<String>;
    isAuthenticated: boolean;
    loading: boolean;
    error: Nullable<string>;
}

const initialToken = typeof localStorage !== "undefined" ? localStorage.getItem("access_token") : null;

const initialState: AuthState = {
    token: initialToken,
    isAuthenticated: Boolean(initialToken),
    loading: false,
    error: null,
} 


export const login = createAsyncThunk<
    { access_token: string }, // что вернёт запрос при успехе.
    { email: string; password: string }, // что мы передаём в dispatch(login(...)).
    { rejectValue: string } // /что вернёт при ошибке
>(
    "auth/login", // уникальный идентификатор экшена (для отладки и Redux DevTools).
    async ({email, password}, { rejectWithValue }) => {
        try {
            const data = await loginUser(email, password);
            return data;
        } catch (err) {
            const e = err as AxiosError<{ detail?: string; message?: string}>;
            const msg = e.response?.data?.detail || e.response?.data?.message || e.message || "Ошибка входа";
            return rejectWithValue(msg);
        }
    }
)


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout(state) {
            state.token = null;
            state.isAuthenticated = false;
            state.error = null;
            if (typeof localStorage !== "undefined") localStorage.removeItem("access_token");
        },
        clearError(state) {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
      builder
        .addCase(login.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(login.fulfilled, (state, action: PayloadAction<{access_token: string}>) => {
            state.loading = false;
            state.token = action.payload.access_token;
            state.isAuthenticated = true;
            if (typeof localStorage !== "undefined") {
                localStorage.setItem("acccess_token", action.payload.access_token);
            }
        })
        .addCase(login.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload ?? "Ошибка входа";
        })
    },
})


export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
