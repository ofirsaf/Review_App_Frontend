import React, { useEffect } from "react";
import { createContext } from "react";
export const ThemeContext = createContext();
const defaultTheme = "light";
export default function ThemeProvider({ children }) {
  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      changeTheme("dark");
      return;
    }
    changeTheme("light");
  };
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (!theme) {
      localStorage.setItem("theme", defaultTheme);
      return;
    }
    document.documentElement.classList.add(theme);
  }, []);
  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
const changeTheme = (theme) => {
  if (theme === "dark") {
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add("light");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
};
