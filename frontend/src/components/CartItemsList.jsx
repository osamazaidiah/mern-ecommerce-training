import { CartItem } from "./CartItem";
import { getNumberOfItemsInCart, getCartTotal } from "../utils/cartManagement";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

export const CartItemsList = () => {
  const [cartItems] = useContext(CartContext);
  const numberOfItemsInCart = getNumberOfItemsInCart(cartItems);
  const cartTotal = getCartTotal(cartItems);

  return (
    <div>
      <div
        style={{
          display: "grid",
          gap: "8px 8px",
          gridTemplateColumns: "1fr 5fr 2fr 2fr 2fr",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        {cartItems.map((item, index) => (
          <CartItem key={item.title + index} item={item} index={index} />
        ))}
      </div>
      <div>
        <p>{numberOfItemsInCart} items in cart.</p>
        <p>Your total is ${cartTotal}</p>
      </div>
    </div>
  );
};
