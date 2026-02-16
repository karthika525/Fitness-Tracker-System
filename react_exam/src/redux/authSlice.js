import { createSlice } from "@reduxjs/toolkit";

const savedUser = JSON.parse(localStorage.getItem("user"));
const savedUsers = JSON.parse(localStorage.getItem("users")) || [];

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: savedUser || null,
    users: savedUsers,
  },
  reducers: {
    register: (state, action) => {
      const exists = state.users.find((u) => u.email === action.payload.email);
      if (exists) {
        alert("User already registered!");
        return;
      }
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    login: (state, action) => {
      const user = state.users.find(
        (u) => u.email === action.payload.email && u.password === action.payload.password);
      if (user) {
        state.user = user;
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        alert("Invalid email or password");
      }
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
