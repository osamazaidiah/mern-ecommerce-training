import { MongoClient } from "mongodb";

let client;

const dbURI =
  "mongodb+srv://osama:O1234567@cluster0.wyvcxcd.mongodb.net/?retryWrites=true&w=majority";

export const initializeDbConnection = async () => {
  client = await MongoClient.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export const getDbConnection = (dbName) => client.db(dbName);
