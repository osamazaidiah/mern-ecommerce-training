import { getDbConnection } from "../db";
import jwt from "jsonwebtoken";

export const placeOrderRoute = {
  path: "/api/place-order",
  method: "post",
  handler: async (req, res) => {
    // Debug log
    console.log("Received post request on /api/place-order");

    const { uid, email, cartItems } = req.body;
    console.log(uid, email);
    if (!uid || !email || !cartItems) return res.sendStatus(400);

    const db = getDbConnection("ecommerce");
    const user = await db.collection("users").findOne({ email });

    if (!user) return res.sendStatus(401);

    const { location, firstName, lastName } = user;
    const orderDate = Date.now();

    const result = await db.collection("orders").insertOne({
      uid,
      firstName,
      lastName,
      email,
      orderDate,
      cartItems,
      location,
    });

    if (!result) return res.sendStatus(500);

    const { insertedId } = result;

    if (insertedId) return res.sendStatus(200);
    res.sendStatus(500);
  },
};
