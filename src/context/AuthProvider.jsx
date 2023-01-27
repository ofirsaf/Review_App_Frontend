import React, { createContext, useState } from "react";
import { signInUser } from "../api/auth";
import { getIsAuth } from "../api/auth";
import { useEffect } from "react";
import { useNotfication } from "../hooks";
import { useHistory } from "react-router-dom";

export const AuthContext = createContext();

const defaultAuthInfo = {
  profile: null,
  isLoggedIn: false,
  isPending: false,
  error: "",
};

export default function AuthProvider({ children }) {
  const history = useHistory();
  const { updateNotifcation } = useNotfication();
  const handleLogout = () => {
    setAuthInfo({ ...defaultAuthInfo });
    localStorage.removeItem("auth-token");
    history.push("/");
  };
  const [authInfo, setAuthInfo] = useState({ ...defaultAuthInfo });

  const handleLogin = async (email, password) => {
    setAuthInfo({ ...authInfo, isPending: true });
    const { error, user } = await signInUser({ email, password });

    if (error) {
      updateNotifcation("error", error);
      return setAuthInfo({ ...authInfo, isPending: false, error });
    }
    history.push("/", { replace: true });
    const arr = {
      profile: { ...user },
      isPending: false,
      isLoggedIn: true,
      error: "",
    };
    setAuthInfo(arr);
    localStorage.setItem("auth-token", user.token);
  };

  const isAuth = async () => {
    const token = localStorage.getItem("auth-token");
    if (!token) return;
    setAuthInfo({ ...authInfo, isPending: true });
    const { error, user } = await getIsAuth(token);
    if (error) {
      updateNotifcation("error", error);
      return setAuthInfo({ ...authInfo, isPending: false, error });
    }
    setAuthInfo({
      profile: { ...user },
      isPending: false,
      isLoggedIn: true,
      error: "",
    });
  };
  useEffect(() => {
    isAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{ authInfo, handleLogin, isAuth, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
