import { ObjectId } from 'mongodb';

import connect from '../mongo-db/db-connection.js';

const db = await connect(process.env.MONGO_TASKS_DB);

async function getAllTasks(req, res) {
  const collection = await db.collection('tasks');
  const results = await collection.find({}).toArray();
  const resultsMappedById = results.reduce((acc, task) => {
    return acc.set(task._id, { ...task, _id: undefined });
  }, new Map());
  res.status(200).send(Object.fromEntries(resultsMappedById));
}

async function addTask(req, res) {
  const { text } = req.body;
  if (!text) {
    res.status(400).send('"Provided incorrect task data"');
    return;
  }
  const collection = await db.collection('tasks');
  const { insertedId } = await collection.insertOne({ text });
  res.send(insertedId).status(204);
}

async function removeTask(req, res) {
  let ids = req.query.id
    ?.split(',')
    .map((id) => {
      id = id?.trim();
      let objectId;
      try {
        objectId = new ObjectId(id);
      } catch (e) {
        console.warn(`Incorrect object id passed: ${id}, skipping it`);
      }
      return objectId;
    })
    .filter((id) => !!id);

  if (!Array.isArray(ids) || !ids.length) {
    res.status(400).send('"No valid task id(s) provided"');
    return;
  }

  const collection = await db.collection('tasks');
  const { deletedCount } = await collection.deleteMany({
    _id: { $in: ids },
  });

  if (deletedCount) {
    res.status(204).send();
  } else {
    res.status(404).send('"Provided id(s) not found"');
  }
}

async function removeAllTasks(req, res) {
  const collection = await db.collection('tasks');
  const { deletedCount } = await collection.deleteMany({});
  if (deletedCount) {
    res.status(204).send();
  } else {
    res.status(404).send('"There are no tasks to be deleted"');
  }
}

async function updateTask(req, res) {
  const id = req.params.id;
  const { completed } = req.body || {};
  if (completed === null || typeof completed !== 'boolean') {
    res.status(400).send('"Provided invalid request body"');
    return;
  }

  const collection = await db.collection('tasks');
  const { modifiedCount } = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: { completed } }
  );
  if (modifiedCount) {
    res.status(200).send();
  } else {
    res.status(400).send('"Cannot find task by provided id"');
  }
}

export default { getAllTasks, addTask, removeTask, removeAllTasks, updateTask };
