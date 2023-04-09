import * as dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config(process.env.IN_DOCKER ? undefined : { path: '../.env' });
const connectionString =
  'mongodb://' +
  `${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}` +
  `@${
    process.env.IN_DOCKER ? 'mongo' : 'localhost'
  }:27017/?authMechanism=DEFAULT&authSource=${process.env.MONGO_DB}`;

const client = new MongoClient(connectionString);

let connection;
try {
  connection = await client.connect();
} catch (e) {
  console.error(e);
}

let db = connection.db(process.env.MONGO_DB);

export default db;
