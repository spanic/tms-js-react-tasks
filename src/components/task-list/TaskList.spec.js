/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */

import TaskList from './TaskList';
import { render, screen } from '@testing-library/react';

describe('Validates TaskList component', () => {
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
});
