import { useState } from "react";

export const useToken = () => {
  const [token, setInternalToken] = useState(() =>
    localStorage.getItem("token")
  );
  console.log("setToken fired, token:", token);

  const setToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setInternalToken(newToken);
  };

  return [token, setToken];
};
