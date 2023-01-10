import React, { Children } from "react";
import { createContext } from "react";
import { signInUser } from "../api/auth";
const AuthContext = createContext();
const defaultAuthInfo = {
  profile: null,
  isLoggedIn: false,
  isPending: false,
  error: "",
};
export default function AuthProvider({ Children }) {
  const [authInfo, setAuthInfo] = useState({
    ...defaultAuthInfo,
  });
  const [isAuth, setIsAuth] = useState(false);
  const handleLogin = async (email, password) => {
    setAuthInfo({ ...authInfo, isPending: true });
    const { error, user } = await signInUser({ email, password });
    if (error) {
      return setAuthInfo({ ...authInfo, error, isPending: false });
    }
    setAuthInfo({
      profile: { ...user },
      isLoggedIn: true,
      isPending: false,
      error: "",
    });
    localStorage.setItem("auth-token", user.token);
  };

  return (
    <AuthContext.Provider
      value={{ authInfo, handleLogin, handleLogout, isAuth }}
    >
      {Children}
    </AuthContext.Provider>
  );
}
