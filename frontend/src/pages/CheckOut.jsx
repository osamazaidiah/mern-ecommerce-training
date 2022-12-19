import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartItemsList } from "../components/CartItemsList";
import { ConfirmModal } from "../components/ConfirmModal";
import { OrderIsConfirmed } from "../components/OrderIsConfirmed";
import { Row } from "../components/Row";
import { UserInfo } from "../components/UserInfo";
import { CartContext } from "../context/CartProvider";

export const CheckOut = () => {
  const [, setCartItems] = useContext(CartContext);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const waitTime = 5 * 1000;
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
        <OrderIsConfirmed secondsTimer={secondsTimer} />
      ) : (
        <>
          <UserInfo />
          <h2>Order Summary: </h2>
          <CartItemsList />
          <Row style={{ justifyContent: "center" }}>
            <ConfirmModal
              label={"Confirm Order"}
              setIsConfirmed={setIsConfirmed}
            />
            <button onClick={() => navigate("/")}>Continue Shopping ⬅</button>
          </Row>
        </>
      )}
    </div>
  );
};
