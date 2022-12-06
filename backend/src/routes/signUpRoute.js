import { getDbConnection } from "../db";
import bcrypt from "bcrypt";

export const signUpRoute = {
  path: "/api/signup",
  method: "post",
  handler: async (req, res) => {
    // Debug Log
    console.log("Received a POST request on /api/signup");

    const { email, password } = req.body;
    if (!email || !password) return res.sendStatus(500);

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const passwordHash = await bcrypt.hash(password, salt);

    // // Debug Log
    // console.log(`Password:${password}\nSalt: ${salt}\nHash:${hash}`);
    // console.log(`Email: ${email}, password: ${password}`);

    const db = getDbConnection("ecommerce");
    const result = await db.collection("users").insertOne({
      email,
      passwordHash,
    });

    if (!result) return res.sendStatus(500);

    const { insertedId } = result;

    console.log(`InsertedId: ${insertedId}`);
    return res.sendStatus(200);
  },
};
