import { createContext, useCallback, useContext, useState } from "react";
import { getToken, setToken } from "./utils.js/token";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const checkAuth = useCallback(() => {
    const token = getToken();

    if (token) {
      try {
        const decodedJwt = JSON.parse(atob(token.split(".")[1]));
        return decodedJwt.exp * 1000 > Date.now();
      } catch (e) {
        console.log("Error message:", e);
        return false;
      }
    } else {
      return false;
    }
  }, []);
  
  const [isAuthenticated, setIsAuthenticated] = useState(checkAuth());

  const login = useCallback(
    (token) => {
      setToken(token);

      setIsAuthenticated(checkAuth());
    },
    [checkAuth]
  );

  const logout = useCallback(() => {
    setToken(null);
    setIsAuthenticated(checkAuth());
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout, login, checkAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
