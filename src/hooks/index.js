import { useContext } from "react";
import { NotificationContext } from "../context/NotifcationProvider";
import { ThemeContext } from "../context/ThemeProvider";
import { AuthContext } from "../context/AuthProvider";
export const useTheme = () => {
  return useContext(ThemeContext);
};
export const useNotfication = () => {
  return useContext(NotificationContext);
};
export const useAuth = () => {
  return useContext(AuthContext);
};
