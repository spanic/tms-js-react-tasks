/* eslint-disable no-undef */

/// <reference types="Cypress" />

describe('Task List v.1 component test', () => {
  beforeEach(() => {
    cy.intercept('GET', '/tasks', {
      fixture: 'tasks/tasks.json',
    }).as('getTasks');

    /**
     * Navigating to Task List v.1 component
     */
    cy.visit('/');
    cy.get('[href="/task-list-v1').click();
    cy.url().should('include', '/task-list-v1');
    cy.get('[data-cy="task-list-v.1-container"]')
      .should('be.visible')
      .as('taskListContainer');

    /**
     * Getting Tasks from the mocked API
     */
    cy.wait('@getTasks').its('response.body').should('not.be.empty');
    cy.get('[data-cy="task-list-v.1-task"]').as('tasksElements');
  });

  it.skip('adds new Task', () => {
    /**
     * Saving initial tasks quantity
     */
    cy.get('@tasksElements')
      .should('be.visible')
      .its('length')
      .as('initTasksQty');

    /**
     * Adding new Task
     */
    cy.get('[data-cy="task-list-v.1-text-input"]')
      .should('be.visible')
      .focus()
      .type('Occaecat incididunt sit magna commodo non.');

    cy.get('[data-cy="task-list-v.1-add-task-btn"]')
      .should('be.visible')
      .click()
      .blur();

    cy.get('@initTasksQty').then((initTasksQty) => {
      cy.get('@tasksElements')
        .its('length')
        .should('eq', initTasksQty + 1, 'New task has been successfully added');
    });
  });

  it.skip('marks Tasks as "Completed"', () => {
    /**
     * Clicking "Complete" button for each Task
     */
    cy.get('@tasksElements')
      .should('be.visible')
      .each((taskElement) => {
        cy.wrap(taskElement)
          .find('[data-cy="task-list-v.1-task-complete-btn"]')
          .should('be.visible')
          .click();
      });

    cy.get('@tasksElements').should('have.class', 'task-list-item_completed');
  });

  it.skip('removes each Task', () => {
    /**
     * Clicking "Complete" button for the first task to check that completed Task also can be deleted
     */
    cy.get('@tasksElements')
      .should('be.visible')
      .first()
      .find('[data-cy="task-list-v.1-task-complete-btn"]')
      .should('be.visible')
      .click();

    /**
     * Clicking "Remove" button for each Task
     */
    cy.get('@tasksElements').each((taskElement) => {
      cy.wrap(taskElement)
        .find('[data-cy="task-list-v.1-task-remove-btn"]')
        .should('be.visible')
        .click();
    });

    cy.get('@tasksElements').should('not.exist');
    cy.get('@taskListContainer').should('not.contain.html');
  });

  it.skip('removes all the Tasks', () => {
    /**
     * Clicking "Delete all" button
     */
    cy.get('[data-cy="task-list-v.1-task-remove-all-btn"]')
      .should('be.visible')
      .click()
      .blur();

    cy.get('@tasksElements').should('not.exist');
    cy.get('@taskListContainer').should('not.contain.html');
  });
});
