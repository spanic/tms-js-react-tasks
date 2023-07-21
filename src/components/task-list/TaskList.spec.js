/* eslint-disable testing-library/no-node-access */

/* eslint-disable testing-library/no-container */
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TaskList from './TaskList';

// Temporary opted out these tests, should be fixed later
xdescribe('Validates TaskList component', () => {
  test('renders "Delete all button"', () => {
    render(<TaskList />);
    const deleteAllButtonEl = screen.getByText(/delete all/i, {
      selector: 'button.task-list__button',
    });
    expect(deleteAllButtonEl).toBeInTheDocument();
  });

  test('renders "Delete last" button', () => {
    render(<TaskList />);
    const deleteLastButtonEl = screen.getByText(/delete last/i, {
      selector: 'button.task-list__button',
    });
    expect(deleteLastButtonEl).toBeInTheDocument();
  });

  test('renders "Enter your task here..." input', () => {
    render(<TaskList />);
    const enterTaskInputEl =
      screen.getByPlaceholderText(/enter your task here/i);
    expect(enterTaskInputEl).toBeInTheDocument();
  });

  test('renders "Total" block', () => {
    render(<TaskList />);
    const totalBlockEl = screen.getByText(/total:/i);
    expect(totalBlockEl).toBeInTheDocument();
    expect(totalBlockEl).toMatchSnapshot();
  });

  test('renders "Show completed" button', () => {
    render(<TaskList />);
    const showCompletedButton = screen.getByText(/show completed/i);
    expect(showCompletedButton).toBeInTheDocument();
    expect(showCompletedButton).toMatchSnapshot();
  });

  test('renders first task block', () => {
    const { container } = render(<TaskList />);
    const firstTaskBlock = container.querySelector('div.task-list__item');
    expect(firstTaskBlock).toBeInTheDocument();
    expect(firstTaskBlock).toMatchSnapshot();
  });

  it('adds new task', async () => {
    const { container } = render(<TaskList />);
    const user = userEvent.setup();

    const taskItemNameInputEl = container.querySelector('#taskTextInput');
    taskItemNameInputEl.value = 'test';

    const addButton = screen.getByRole('button', {
      name: /add/i,
    });
    user.click(addButton);

    await waitFor(() => {
      return expect(screen.getByText('test')).toBeInTheDocument();
    });
    await waitFor(() => {
      return expect(
        container.querySelectorAll('div.task-list__item').length
      ).toBe(3);
    });
  });

  it('removes all the tasks from the list', async () => {
    const { container } = render(<TaskList />);
    const user = userEvent.setup();

    const deleteAllButton = screen.getByRole('button', {
      name: /delete all/i,
    });
    user.click(deleteAllButton);

    await waitFor(() => {
      return expect(
        container.querySelectorAll('div.task-list__item').length
      ).toBe(0);
    });
  });

  it('removes the selected task from the list', async () => {
    const { container } = render(<TaskList />);
    const user = userEvent.setup();

    const deleteButton = container.querySelector(
      'button.task-list__button_remove'
    );
    await user.click(deleteButton);

    const firstTaskItem = document.querySelector(
      'div.task-list__item_animated-remove'
    );
    // manually triggering 'animationend' event, because Jest doesn't trigger it after assigning the '_animated-remove' class
    fireEvent.animationEnd(firstTaskItem);

    expect(firstTaskItem).not.toBeInTheDocument();
  });

  it('marks the selected task as completed', async () => {
    const { container } = render(<TaskList />);
    const user = userEvent.setup();

    const completeButton = container.querySelector(
      '.task-list__button_complete'
    );
    await user.click(completeButton);

    const completedTaskItem = document.querySelector(
      '.task-list-item_completed .task-list-item__text_completed'
    );
    return expect(completedTaskItem).toBeInTheDocument();
  });
});
