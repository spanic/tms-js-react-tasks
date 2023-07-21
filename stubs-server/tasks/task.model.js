class Task {
  completed;
  lastModified;

  constructor(text) {
    this.text = text;
  }
}

const tasks = new Map([
  [
    1,
    new Task(
      'Architecto aspernatur aut consectetur dicta, expedita iure laboriosam magni nesciunt nobis pariatur quae quas rem ullam? Dolor ex maxime temporibus vel velit.'
    ),
  ],
  [
    2,
    new Task(
      'A aliquam corporis cum, cumque debitis eius eligendi fuga fugit iusto molestiae necessitatibus nemo neque odio possimus quisquam recusandae tenetur ut. Nostrum?'
    ),
  ],
]);

export { Task, tasks };
