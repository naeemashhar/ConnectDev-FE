import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return savedTheme || (prefersDark ? "dark" : "light");
};

const themeSlice = createSlice({
  name: "theme",
  initialState: getInitialTheme(),
  reducers: {
    toggleTheme: (state) => {
      return state === "light" ? "dark" : "light";
    },
    setTheme: (_, action) => {
      return action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
