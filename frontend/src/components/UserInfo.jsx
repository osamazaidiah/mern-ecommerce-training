import { useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserProvider";

export const UserInfo = () => {
  const [user] = useContext(CurrentUserContext);

  return <>{user ? <p>Hello, {user.firstName}</p> : <p>Unknown user</p>}</>;
};
