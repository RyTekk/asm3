import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    name: localStorage.getItem("isLogin")
      ? localStorage.getItem("isLogin").name
      : "",
    isLogin: localStorage.getItem("isLogin")
      ? localStorage.getItem("isLogin").isLogin
      : 0,
  },
  reducers: {
    login(state, action) {
      state.name = action.payload;
      state.isLogin = 1;
      localStorage.setItem("isLogin", JSON.stringify(state));
    },
    logout(state) {
      state.name = "";
      state.isLogin = 0;
      localStorage.setItem("isLogin", JSON.stringify(state));
    },
  },
});

export const loginAction = loginSlice.actions;

export default loginSlice.reducer;
