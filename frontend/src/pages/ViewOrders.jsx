import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Column } from "../components/Column";
import { CurrentUserContext } from "../context/CurrentUserProvider";
import { CartItem } from "../components/CartItem";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { Row } from "../components/Row";
import { useNavigate } from "react-router-dom";

export const ViewOrders = () => {
  const [, token] = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [orders, setOrders] = useState([]);

  if (!token) navigate("/");

  useEffect(() => {
    if (!isLoading) return;

    const getUserOrders = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/orders", {
          headers: { authorization: `Bearer ${token}` },
        });
        const { data } = response;
        console.log("Successfully loaded orders:", data);
        setOrders(() => data);
        setIsLoading(false);
      } catch (e) {
        setErrorMessage("Error loading orders.");
        console.log("Error loading orders:", e);
        setIsLoading(false);
      }
    };

    getUserOrders();
  }, [isLoading]);

  if (isLoading) return <LoadingSpinner />;

  if (errorMessage) return <p>Error loading orders...</p>;

  if (orders.length < 1) return <p>You have no orders yet.</p>;

  return (
    <Column>
      <h3>Your orders:</h3>
      {orders.map((order) => (
        <Column style={{ borderBlockEnd: "2px solid white" }} key={order._id}>
          <Row style={{ justifyContent: "flex-start" }}>
            <h3>Order Date:</h3>
            <p>{new Date(order.orderDate).toString()}</p>
          </Row>
          <p style={{ alignSelf: "flex-start" }}>
            Information: {order.firstName} {order.lastName}, {order.location}
          </p>
          <p style={{ alignSelf: "flex-start" }}>Order Id: {order._id}</p>
          <div
            style={{
              display: "grid",
              gap: "8px 8px",
              gridTemplateColumns: "1fr 5fr 2fr 2fr 2fr",
              justifyContent: "space-between",
              alignContent: "center",
            }}
          >
            {order.cartItems.map((item, index) => (
              <CartItem
                key={item.title + index}
                item={item}
                editable={false}
                index={index}
              />
            ))}
          </div>
        </Column>
      ))}
    </Column>
  );
};
