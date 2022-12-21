import { useContext } from "react";
import { useState } from "react";
import { CurrentUserContext } from "../context/CurrentUserProvider";
import { Column } from "./Column";
import { Modal } from "./Modal";
import { Row } from "./Row";
import axios from "axios";
import { CartContext } from "../context/CartProvider";

export const ConfirmModal = ({ setIsConfirmed, label }) => {
  const [user, token, setToken] = useContext(CurrentUserContext);
  const [cartItems] = useContext(CartContext);
  const [isVisible, setVisibility] = useState(false);

  return (
    <>
      <button onClick={() => setVisibility(true)}>{label}</button>
      {isVisible && (
        <Modal setVisibility={setVisibility}>
          <Column>
            <h3>{label}. Are you Sure?</h3>
            <Row style={{ justifyContent: "center" }}>
              <button
                onClick={async () => {
                  console.log(user);
                  try {
                    const response = await axios.post(
                      "http://localhost:8080/api/place-order",
                      { ...user, cartItems },
                      { headers: { authorization: `Bearer ${token}` } }
                    );

                    setIsConfirmed(true);
                    setVisibility(false);
                  } catch (e) {
                    console.log("Error placing order", e);
                  }
                }}
              >
                🛒 Confirm
              </button>
              <button onClick={() => setVisibility(false)}>✖ Cancel</button>
            </Row>
          </Column>
        </Modal>
      )}
    </>
  );
};
