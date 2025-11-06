import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the login page', () => {
  cy.visit('/login');
});

When('I enter username {string} and password {string}', (username, password) => {
  cy.get('#username').type(username);
  cy.get('#password').type(password);
});

When('I click the login button', () => {
  cy.get('#login-btn').click();
});

Then('I should be redirected to the dashboard', () => {
  cy.url().should('include', '/dashboard');
  cy.get('.dashboard-header').should('be.visible');
});

Then('I should see an error message', () => {
  cy.get('.error-message').should('be.visible');
});