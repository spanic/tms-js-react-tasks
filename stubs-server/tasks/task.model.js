class Task {
  completed = false;

  constructor(text) {
    this.text = text;
  }
}

const tasks = new Map();

module.exports = {
  Task,
  tasks,
};
