import { Given, When, Then, Before, After } from '@badeball/cypress-cucumber-preprocessor';

// Before each scenario
Before(() => {
  cy.log('Starting a new scenario');
  console.log('Starting a new scenario');
});

// After each scenario  
After(() => {
  cy.log('Scenario completed');
  console.log('Scenario completed');
});

Given('I am on the logins page', () => {
  cy.visit('https://www.linkedin.com');
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