import { useState, useContext } from "react";
import { Modal } from "./Modal";
import { getNumberOfItemsInCart } from "../utils/cartManagement";
import { CartItemsList } from "./CartItemsList";
import { CartContext } from "../context/CartProvider";
import { useNavigate } from "react-router-dom";

export const ViewCart = () => {
  const [cartItems] = useContext(CartContext);
  const navigate = useNavigate();
  const [isVisible, setVisibility] = useState(false);
  const numberOfItemsInCart = getNumberOfItemsInCart(cartItems);
  return (
    <>
      <button onClick={() => setVisibility(true)}>
        🛒{numberOfItemsInCart > 0 ? `(${numberOfItemsInCart})` : ""}
      </button>
      {isVisible && (
        <Modal setVisibility={setVisibility}>
          <>
            {numberOfItemsInCart > 0 ? (
              <>
                <CartItemsList />
                <button
                  onClick={() => {
                    navigate("/check-out");
                    setVisibility(false);
                  }}
                >
                  Continue to Check Out
                </button>
              </>
            ) : (
              <p>Your cart is empty.</p>
            )}
          </>
        </Modal>
      )}
    </>
  );
};
