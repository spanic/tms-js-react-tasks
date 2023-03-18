const { Task, tasks } = require('./task.model');
const { randomUUID } = require('crypto');

exports.getAllTasks = function (req, res) {
  res.status(200).send(Object.fromEntries(tasks));
};

exports.addTask = function (req, res) {
  const { text } = req.body;
  if (!text) {
    res.status(400).send('Provided incorrect task data');
    return;
  }
  const task = new Task(text);
  const id = randomUUID();
  tasks.set(id, task);
  res.status(200).send(id);
};

exports.removeTask = function (req, res) {
  const ids = req.query.id?.split(',');
  if (!Array.isArray(ids) || !ids.length) {
    res.status(400).send('No task id(s) provided');
  }
  const areTasksDeleted = ids.reduce((acc, id) => {
    return acc || tasks.delete(id);
  }, false);

  if (areTasksDeleted) {
    res.status(204).send();
  } else {
    res.status(404).send('Provided id(s) not found');
  }
};

exports.removeAllTasks = function (req, res) {
  let areTasksDeleted = false;
  for (let id of tasks.keys()) {
    areTasksDeleted += tasks.delete(id);
  }
  if (areTasksDeleted) {
    res.status(204).send();
  } else {
    res.status(404).send('There are no tasks to be deleted');
  }
};

exports.updateTask = function (req, res) {
  const id = req.params.id;
  let task = tasks.get(id);
  if (!task) {
    res.status(404).send('Provided task id is not found');
    return;
  }
  const { completed } = req.body;
  task = {
    ...task,
    completed,
  };
  tasks.set(id, task);
  res.status(200).send();
};
