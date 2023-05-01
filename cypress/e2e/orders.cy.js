/* eslint-disable no-undef */

/// <reference types="Cypress" />

describe('Orders component test', () => {
  it.skip('performs the full acquisition flow', () => {
    /**
     * Intercepting & stubbing API requests
     */
    cy.intercept('GET', '/orders/api/orders', {
      fixture: 'orders/orders.json',
    }).as('getOrders');
    cy.intercept('GET', '/orders/api/restaurants', {
      fixture: 'orders/restaurants.json',
    }).as('getRestaurants');
    cy.intercept('GET', '/orders/api/offers*', {
      fixture: 'orders/offers.json',
    }).as('getOffers');
    cy.intercept('POST', 'orders/api/orders/init', cy.spy().as('initOrder'));

    /**
     * Navigating to Orders component
     */
    cy.visit('/');
    cy.get('[href="/orders"]').click();
    cy.url().should('include', '/orders');
    cy.wait('@getOrders').its('response.body').should('not.be.empty');
    cy.get('[data-cy="orders-list"]').should('be.visible');

    /**
     * Opening new order modal
     */
    cy.get('[data-cy="new-order-button"]').should('be.visible').click();
    // Wait till modal animation will be finished. Works fine w/o it, but looks better in Cypress report
    cy.wait(1000);
    cy.get('[data-cy="new-order-modal"] .ant-modal-content').should(
      'be.visible'
    );

    /**
     * Choosing restaurant
     */
    cy.get('[data-cy="restaurants-list"]').should('be.visible');
    cy.wait('@getRestaurants').its('response.body').should('not.be.empty');
    const restaurantsNextStepBtn = cy.get(
      '[data-cy="restaurants-next-step-btn"]'
    );
    restaurantsNextStepBtn.should('be.disabled');
    cy.get('[data-cy="restaurant-radio-btn"]').first().check();
    restaurantsNextStepBtn.click();

    /**
     * Choosing offers
     */
    cy.get('[data-cy="offers-list"]').should('be.visible');
    const offersSubmitOrderBtn = cy.get('[data-cy="offers-submit-order-btn"]');
    offersSubmitOrderBtn.should('be.disabled');
    cy.get('[data-cy="offer-checkbox"]').each(($checkbox) => {
      cy.wrap($checkbox).check();
      offersSubmitOrderBtn.should('not.be.disabled');
    });

    /**
     * Creating new order
     */
    cy.get('[data-cy="offers-submit-order-btn"]').click();
    cy.get('@initOrder').should('be.calledOnce');
    cy.wait('@getOrders').its('response.body').should('not.be.empty');

    /**
     * Confirmation
     */
    cy.get('.cy-new-order-confirmation').should('be.visible');
    cy.get('[data-cy="back-to-list-btn"]')
      .should('be.visible')
      .and('be.enabled')
      .then(($button) => cy.wrap($button).click());

    /**
     * End
     */
    cy.get('[data-cy="new-order-modal"] .ant-modal-content').should(
      'not.exist'
    );
  });
});
