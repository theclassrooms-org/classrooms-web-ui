"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { setUser } from "@/store/userSlice";
import { axiosAuth } from "@/lib/axios-auth";

export default function AuthSync() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const sync = async () => {
      try {
        const response = await axiosAuth.get("/api/my-info");
        dispatch(setUser(response.data));
      } catch {
        try {
          await axiosAuth.post("/api/auth/refresh");
          const retry = await axiosAuth.get("/api/my-info");
          dispatch(setUser(retry.data));
        } catch {
          // Leave user null; interceptor will redirect on protected requests
        }
      }
    };
    sync();
  }, [dispatch]);

  return null;
}
