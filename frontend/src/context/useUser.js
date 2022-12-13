import { useEffect, useState } from "react";
import { useToken } from "./useToken";

export const useUser = () => {
  const [token] = useToken();

  const getEncodedPayload = (token) => {
    const payload = token.split(".")[1];
    return JSON.parse(atob(payload));
  };

  const [user, setUser] = useState(() => {
    if (!token) return null;
    return getEncodedPayload(token);
  });

  useEffect(() => {
    if (!token) {
      setUser(null);
    } else {
      setUser(getEncodedPayload(token));
    }
  }, [token]);

  return user;
};
