import { Task, tasks } from './task.model.js';

const { randomUUID } = await import('node:crypto');

function getAllTasks(req, res) {
  res.status(200).send(Object.fromEntries(tasks));
}

function addTask(req, res) {
  const { text } = req.body;
  if (!text) {
    res.status(400).send('"Provided incorrect task data"');
    return;
  }
  const task = new Task(text);
  const id = randomUUID();
  tasks.set(id, task);
  res.send(`"${id}"`).status(204);
}

function removeTask(req, res) {
  const ids = req.query.id?.split(',');
  if (!Array.isArray(ids) || !ids.length) {
    res.status(400).send('"No task id(s) provided"');
    return;
  }
  const areTasksDeleted = ids.reduce((acc, id) => {
    return acc || tasks.delete(id);
  }, false);

  if (areTasksDeleted) {
    res.status(204).send();
  } else {
    res.status(404).send('"Provided id(s) not found"');
  }
}

function removeAllTasks(req, res) {
  let areTasksDeleted = false;
  for (let id of tasks.keys()) {
    areTasksDeleted += tasks.delete(id);
  }
  if (areTasksDeleted) {
    res.status(204).send();
  } else {
    res.status(404).send('"There are no tasks to be deleted"');
  }
}

function updateTask(req, res) {
  const id = req.params.id;
  const { completed } = req.body;
  if (completed === null || typeof completed !== 'boolean') {
    res.status(400).send('"Provided invalid request body"');
    return;
  }
  let task = tasks.get(id);
  if (!task) {
    res.status(400).send('"Cannot find task by provided id"');
    return;
  }
  task = {
    ...task,
    completed,
  };
  tasks.set(id, task);
  res.status(200).send();
}

export default { getAllTasks, addTask, removeTask, removeAllTasks, updateTask };
