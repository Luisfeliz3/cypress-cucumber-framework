import './elements';
import './commands';
import '@badeball/cypress-cucumber-preprocessor';
// import elementManager from '../../utilities/element-manager.js';



 
// Import page objects
import '../support/pages/LoginPage';
import '../support/pages/DashboardPage';
 

// Make element manager available in Cypress console for debugging
Cypress.elementManager = window.elementManager;

// Global before each hook
beforeEach(() => {
  // You can add global setup here
  cy.log('Test started with centralized element management');
});

 



// Add error boundaries
Cypress.on('window:before:load', (win) => {
  win.addEventListener('error', (event) => {
    console.log('🚨 Global error caught:', event.error);
  });
});