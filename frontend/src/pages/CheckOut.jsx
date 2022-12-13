import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartItemsList } from "../components/CartItemsList";
import { ConfirmModal } from "../components/ConfirmModal";
import { Row } from "../components/Row";
import { UserInfo } from "../components/UserInfo";
import { CartContext } from "../context/CartProvider";

export const CheckOut = () => {
  const waitTime = 3 * 1000;
  const [, setCartItems] = useContext(CartContext);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [secondsTimer, setSecondsTimer] = useState(waitTime / 1000);
  const navigate = useNavigate();

  useEffect(() => {
    if (isConfirmed) {
      setCartItems([]);
      setTimeout(() => navigate("/"), waitTime);
      setInterval(() => setSecondsTimer((pre) => pre - 1), 1000);
    }
  }, [isConfirmed]);

  return (
    <div>
      {isConfirmed ? (
        <div
          style={{ padding: "8px", margin: "8px", border: "2px solid yellow" }}
        >
          <p>
            Congratulations! Your order has been confirmed. You will be
            redirected to our homepage in {secondsTimer} seconds...
          </p>
        </div>
      ) : (
        <>
          <UserInfo />
          <h2>Order Summary: </h2>
          <CartItemsList />
          <Row justifyContent="center">
            {!isConfirmed && (
              <ConfirmModal
                label={"Confirm Order"}
                setIsConfirmed={setIsConfirmed}
              />
            )}
            <button onClick={() => navigate("/")}>Continue Shopping ⬅</button>
          </Row>
        </>
      )}
    </div>
  );
};
