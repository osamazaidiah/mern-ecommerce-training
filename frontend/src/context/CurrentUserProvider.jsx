import { useState, useEffect, createContext } from "react";
import { useToken } from "./useToken";
import jwtDecode from "jwt-decode";

export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
  const [token, setToken] = useToken();

  const [currentUser, setCurrentUser] = useState(() => {
    if (!token) return null;
    try {
      return jwtDecode(token);
    } catch (e) {
      console.log("Error decoding token", e);
      setToken(() => null);
    }
  });

  useEffect(
    () => setCurrentUser(() => (token ? jwtDecode(token) : null)),
    [token]
  );

  return (
    <CurrentUserContext.Provider value={[currentUser, token, setToken]}>
      {children}
    </CurrentUserContext.Provider>
  );
};
