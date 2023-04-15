class Task {
  completed = false;

  constructor(text) {
    this.text = text;
  }
}

const tasks = new Map();

export { Task, tasks };
