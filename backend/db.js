import { MongoClient } from "mongodb";

let client;

const dbURI = "";

export const initializeDbConnection = async () => {
  client = await MongoClient.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export const getDbConnection = (dbName) => client.db(dbName);
