/* eslint-disable */

// root user authentication: I need this to create another user only for the new database
db.getSiblingDB(process.env.MONGO_INITDB_DATABASE).auth(
  process.env.MONGO_INITDB_ROOT_USERNAME,
  process.env.MONGO_INITDB_ROOT_PASSWORD
);

db = db.getSiblingDB(process.env.MONGO_DB);

db.createUser({
  user: process.env.MONGO_USER,
  pwd: process.env.MONGO_PASSWORD,
  roles: ['readWrite'],
});

db.createCollection('tasks');

db.tasks.insertOne({
  text: 'This is a sample task, if you see it - everything works fine',
});
