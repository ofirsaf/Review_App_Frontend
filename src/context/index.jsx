import React from "react";
import AuthProvider from "./AuthProvider";
import NotificationProvider from "./NotifcationProvider";
import ThemeProvider from "./ThemeProvider";
export default function ContextProviders({ children }) {
  return (
    <NotificationProvider>
      <AuthProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </AuthProvider>
    </NotificationProvider>
  );
}
