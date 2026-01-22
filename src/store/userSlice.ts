import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the UserDTO type
export interface UserDTO {
  sub: string;
  name: string;
  avatar: string;
  username: string;
  email: string;
  role: string;
}

// Define the state shape
interface UserState {
  user: UserDTO | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserDTO>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
