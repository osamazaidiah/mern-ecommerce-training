import { Row } from "./Row";
import { updateItemInCart } from "../utils/cartManagement";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

export const CartItem = ({ index, item }) => {
  const [, setCartItems] = useContext(CartContext);
  return (
    <>
      <p style={{ textAlign: "right", flex: 1 }}>{index + 1}</p>
      <p style={{ textAlign: "left", flex: 5 }}>{item.title}</p>
      <p style={{ textAlign: "left", flex: 2 }}>${item.price}</p>
      <Row style={{ flexWrap: "nowrap" }}>
        <button
          onClick={() =>
            setCartItems((pre) => updateItemInCart("remove", item, pre))
          }
          style={{ flex: 2 }}
        >
          ➖
        </button>
        <p style={{ textAlign: "left", flex: 2 }}>{item.count}</p>
        <button
          onClick={() =>
            setCartItems((pre) => updateItemInCart("add", item, pre))
          }
          style={{ flex: 2 }}
        >
          ➕
        </button>
      </Row>
      <button
        onClick={() =>
          setCartItems((pre) => updateItemInCart("delete", item, pre))
        }
        style={{ flex: 2 }}
      >
        ✖
      </button>
    </>
  );
};
