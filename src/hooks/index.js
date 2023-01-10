import { useContext } from "react";
import { NotificationContext } from "../context/NotifcationProvider";
import { ThemeContext } from "../context/ThemeProvider";

export const useTheme = () => {
  return useContext(ThemeContext);
};
export const useNotfication = () => {
    return useContext(NotificationContext);
  };
  