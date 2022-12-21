import { Row } from "./Row";
import { Column } from "./Column";
import { SignUp } from "./SignUp";
import { ViewCart } from "./ViewCart";
import { useNavigate } from "react-router-dom";
import { LogIn } from "./LogIn";
import { useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserProvider";

export const SiteHeader = () => {
  const [user, token, setToken] = useContext(CurrentUserContext);
  const navigate = useNavigate();
  return (
    <Column>
      <Row>
        <Column>
          <h1 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            Ecommerce App
          </h1>
        </Column>
        <Row>
          <ViewCart />
          {user ? (
            <>
              <button onClick={() => navigate("/orders")}>View Orders</button>
              <button
                onClick={() => {
                  setToken(() => null);
                  localStorage.removeItem("token");
                }}
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <SignUp />
              <LogIn />
            </>
          )}
        </Row>
      </Row>
    </Column>
  );
};
