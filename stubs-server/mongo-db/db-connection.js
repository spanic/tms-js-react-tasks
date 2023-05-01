import { MongoClient } from 'mongodb';

async function connect(database) {
  const connectionString =
    'mongodb://' +
    `${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}` +
    `@${
      process.env.IN_DOCKER ? 'mongo' : 'localhost'
    }:27017/?authMechanism=DEFAULT`;

  const client = new MongoClient(connectionString);

  let connection;
  try {
    connection = await client.connect();
  } catch (e) {
    console.error(e);
  }

  return connection.db(database);
}

export default connect;
