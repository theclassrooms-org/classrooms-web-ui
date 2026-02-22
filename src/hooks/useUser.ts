import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store";
import { setUser, clearUser, type UserDTO } from "@/store/userSlice";

export function useUser() {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch<AppDispatch>();

  const setUserAction = useCallback(
    (payload: UserDTO) => dispatch(setUser(payload)),
    [dispatch]
  );

  const clearUserAction = useCallback(
    () => dispatch(clearUser()),
    [dispatch]
  );

  return {
    user,
    isAuthenticated: user != null,
    setUser: setUserAction,
    clearUser: clearUserAction,
  };
}
