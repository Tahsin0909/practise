import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  name: string | null;
  email: string | null;
}

const initialState: AuthState = {
  name: null,
  email: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ name: string; email: string }>
    ) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.name = null;
      state.email = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
