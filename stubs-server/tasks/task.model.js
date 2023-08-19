class Task {
  completed;
  lastModified;

  constructor(text) {
    this.text = text;
  }
}

const tasks = new Map([
  [
    '31c0bf7f-ba08-47d8-9123-09eb9f1ed96d',
    new Task(
      'Architecto aspernatur aut consectetur dicta, expedita iure laboriosam magni nesciunt nobis pariatur quae quas rem ullam? Dolor ex maxime temporibus vel velit.'
    ),
  ],
  [
    'a5a84e6d-6df8-4e53-b42e-e8699a82d963',
    new Task(
      'A aliquam corporis cum, cumque debitis eius eligendi fuga fugit iusto molestiae necessitatibus nemo neque odio possimus quisquam recusandae tenetur ut. Nostrum?'
    ),
  ],
]);

export { Task, tasks };
