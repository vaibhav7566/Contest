import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "user",
  initialState: { user: null },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("CurrentUser", JSON.stringify(action.payload));
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
