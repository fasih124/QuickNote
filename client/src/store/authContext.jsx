import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({
  user: null,
  token: null,
  isLogin: false,
  //   authLogin: (user, token) => {},
  authLogout: () => {},
});

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null); // store user info
  const [token, setToken] = useState(null); // store JWT token

  // 3️⃣ Load token and user from localStorage on app start
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }
  }, []);

  //   function login(user, token) {
  //     setUser(user);
  //     setToken(token);
  //     localStorage.setItem("token", token);
  //     localStorage.setItem("user", JSON.stringify(user));
  //   }

  function logout() {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  const ctxValue = {
    user,
    token,
    isLogin: !!token, // true if token exists
    // authLogin,
    authLogout,
  };

  return (
    <AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>
  );
}
