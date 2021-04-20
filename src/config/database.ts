import { assert } from "console";
import { MongoClient, MongoError } from "mongodb";
import { mongoPassword, mongoPort, mongoUrl, mongoUserName } from "../utilities/environment/environment";
import { terminalLogger } from "../utilities/logging/logger";

export const dbUrl = `mongodb://localhost:${mongoPort}?poolsize=200&retryWrites=false`;
// export const dbUrl = `mongodb://${mongoUserName}:${mongoPassword}@${mongoUrl}:${mongoPort}?poolsize=200&retryWrites=false`;

export const db = `mongodb+srv://${mongoUserName}:${mongoPassword}@cluster0.gv00x.mongodb.net/cbt?retryWrites=true&w=majority`;
export const dbName = `${process.env.MONGO_LOG_DB_NAME}`;

export const logs = `${process.env.MONGO_LOG_COLLECTION}`;

let dbConPool: MongoClient;
let database: any;

export const createDbConnection = async () => {
  try {
    // console.log(dbUrl);

    let connection = await MongoClient.connect(dbUrl, { useUnifiedTopology: true });
    return connection;
  } catch (error) {
    throw error;
  }
};

// export const mongoConnection = new MongoClient.connect(dbUrl, { useUnifiedTopology: true });

export const establishConnection = () => {
  MongoClient.connect(
    dbUrl,
    { useUnifiedTopology: true, poolSize: 200, retryWrites: false } as any,
    (error: MongoError, result: MongoClient) => {
      assert(error == null);
      dbConPool = result;
    }
  );
};

export const getConnection = (): MongoClient => {
  return dbConPool;
};

export const initializeDB = (callback: Function) => {
  if (database) {
    terminalLogger.warn("Trying to reconnect to database");
    return callback(null, database);
  }

  MongoClient.connect(
    db,
    { useUnifiedTopology: true, poolSize: 200, retryWrites: false } as any,
    (error: MongoError, result: MongoClient) => {
      console.log("creating connection");
      assert(error == null);
      dbConPool = result;
      return callback(null, database);
    }
  );
};

export const getDb = () => {
  assert(database, "Database has not been initialized");
  return database;
};
