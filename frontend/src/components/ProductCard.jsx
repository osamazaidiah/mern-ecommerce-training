import { Column } from "./Column";
import { Row } from "./Row";
import { Image } from "./Image";
import { addItemToCart } from "../utils/cartManagement";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

export const ProductCard = ({ product }) => {
  const [, setCartItems] = useContext(CartContext);
  const { id, title, alt, imageSource, price, availability } = product;

  return (
    <Column
      style={{
        width: "200px",
        height: "350px",
        margin: "8px",
        padding: "8px",
        border: "2px solid lightgray",
        borderRadius: "8px",
      }}
    >
      <Image src={imageSource} title={title} alt={alt} />
      <h3>{title}</h3>
      <Row justifyContent="space-between">
        <h4>${price}</h4>
        <p style={{ color: "red", fontStyle: "italic" }}>
          {availability ? "" : "Out of Stock"}
        </p>
      </Row>
      <button
        disabled={!availability}
        onClick={() => setCartItems((pre) => addItemToCart(product, pre))}
      >
        Add to Cart 🛒
      </button>
    </Column>
  );
};
