import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import store from "@/store";
import { clearUser } from "@/store/userSlice";

const baseURL =
  typeof process !== "undefined"
    ? `${process.env.NEXT_PUBLIC_API_BASE}/auth-service` || "http://localhost:8160"
    : "http://localhost:8160";

export const axiosAuth = axios.create({
  baseURL,
  withCredentials: true,
});

axiosAuth.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retried?: boolean;
    };
      console.error("error happening", error.response);

    if (error.response?.status !== 401 || !originalRequest) {
      console.error("error happening", error.response);
      return Promise.reject(error);
    }

    // const isRefreshRequest = originalRequest.url?.includes("/api/auth/refresh");
    // if (isRefreshRequest || originalRequest._retried) {
    //   store.dispatch(clearUser());
    //   if (typeof window !== "undefined") window.location.href = "/login";
    //   return Promise.reject(error);
    // }
    //
    // originalRequest._retried = true;
    //
    // try {
    //   await axiosAuth.post("/api/auth/refresh");
    //   return axiosAuth(originalRequest);
    // } catch {
    //   store.dispatch(clearUser());
    //   if (typeof window !== "undefined") window.location.href = "/login";
    //   return Promise.reject(error);
    // }
  }
);
