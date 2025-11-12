// import elementManager from '../../utilities/element-manager.js';


// Cypress.Commands.add('login', (username, password) => {
//   cy.get('#username').type(username);
//   cy.get('#password').type(password);
//   cy.get('#login-btn').click();
// });

// /**
//  * Get element by path - Main command for element selection
//  * @param {string} path - Dot notation path to element
//  * @param {Object} options - Additional options
//  * @returns {Chainable} Cypress chainable
//  */
// Cypress.Commands.add('getElement', (path, options = {}) => {
//   const selector = elementManager.getElement(path);
//   return cy.get(selector, options);
// });

// /**
//  * Find element within a container
//  * @param {string} containerPath - Path to container element
//  * @param {string} elementPath - Path to element within container
//  * @returns {Chainable} Cypress chainable
//  */
// Cypress.Commands.add('findElement', (containerPath, elementPath) => {
//   const containerSelector = elementManager.getElement(containerPath);
//   const elementSelector = elementManager.getElement(elementPath);
//   return cy.get(containerSelector).find(elementSelector);
// });

// /**
//  * Click element by path
//  * @param {string} path - Dot notation path to element
//  * @param {Object} options - Click options
//  */
// Cypress.Commands.add('clickElement', (path, options = {}) => {
//   cy.getElement(path).click(options);
// });

// /**
//  * Type text into element by path
//  * @param {string} path - Dot notation path to element
//  * @param {string} text - Text to type
//  * @param {Object} options - Type options
//  */
// Cypress.Commands.add('typeInElement', (path, text, options = {}) => {
//   cy.getElement(path).type(text, options);
// });

// /**
//  * Clear and type text into element by path
//  * @param {string} path - Dot notation path to element
//  * @param {string} text - Text to type
//  */
// Cypress.Commands.add('clearAndType', (path, text) => {
//   cy.getElement(path).clear().type(text);
// });

// /**
//  * Select option from dropdown by path
//  * @param {string} path - Dot notation path to dropdown
//  * @param {string} value - Value to select
//  */
// Cypress.Commands.add('selectOption', (path, value) => {
//   cy.getElement(path).select(value);
// });

// /**
//  * Check checkbox by path
//  * @param {string} path - Dot notation path to checkbox
//  * @param {boolean} check - Whether to check or uncheck
//  */
// Cypress.Commands.add('checkElement', (path, check = true) => {
//   const element = cy.getElement(path);
//   if (check) {
//     element.check();
//   } else {
//     element.uncheck();
//   }
// });

// /**
//  * Verify element is visible
//  * @param {string} path - Dot notation path to element
//  * @param {Object} options - Assertion options
//  */
// Cypress.Commands.add('shouldSeeElement', (path, options = {}) => {
//   cy.getElement(path).should('be.visible', options);
// });

// /**
//  * Verify element contains text
//  * @param {string} path - Dot notation path to element
//  * @param {string} text - Expected text
//  */
// Cypress.Commands.add('shouldContainText', (path, text) => {
//   cy.getElement(path).should('contain', text);
// });

// /**
//  * Verify element does not exist or is hidden
//  * @param {string} path - Dot notation path to element
//  */
// Cypress.Commands.add('shouldNotSeeElement', (path) => {
//   cy.getElement(path).should('not.exist');
// });

// /**
//  * Navigate to page using configured URL
//  * @param {string} pageName - Name of the page
//  * @param {string} urlType - Type of URL (default: 'main')
//  */
// Cypress.Commands.add('navigateToPage', (pageName, urlType = 'main') => {
//   const url = elementManager.getPageUrl(pageName, urlType);
//   cy.visit(url);
// });

// /**
//  * Wait for element to be visible
//  * @param {string} path - Dot notation path to element
//  * @param {number} timeout - Timeout in milliseconds
//  */
// Cypress.Commands.add('waitForElement', (path, timeout = 10000) => {
//   cy.getElement(path, { timeout }).should('be.visible');
// });

// /**
//  * Get element and return it for further chaining
//  * @param {string} path - Dot notation path to element
//  * @returns {Chainable} Cypress chainable
//  */
// Cypress.Commands.add('getElementChain', (path) => {
//   return cy.getElement(path);
// });

// // Debugging command to print available elements
// Cypress.Commands.add('printElements', (pageName = null) => {
//   elementManager.printElements(pageName);
// });

// // Command to get all elements for a page
// Cypress.Commands.add('getPageElements', (pageName) => {
//   return elementManager.getPageElements(pageName);
// });


import elementManager from './elements';

/**
 * Get element by path - Main command for element selection
 * @param {string} path - Dot notation path to element
 * @param {Object} options - Cypress get options
 * @returns {Chainable} Cypress chainable
 */
Cypress.Commands.add('getElement', (path, options = {}) => {
  const selector = elementManager.get(path);
  return cy.get(selector, options);
});

/**
 * Find element within a container
 * @param {string} containerPath - Path to container element
 * @param {string} elementPath - Path to element within container
 * @returns {Chainable} Cypress chainable
 */
Cypress.Commands.add('findElement', (containerPath, elementPath) => {
  const containerSelector = elementManager.get(containerPath);
  const elementSelector = elementManager.get(elementPath);
  return cy.get(containerSelector).find(elementSelector);
});

/**
 * Click element by path
 * @param {string} path - Dot notation path to element
 * @param {Object} options - Click options
 */
Cypress.Commands.add('clickElement', (path, options = {}) => {
  cy.getElement(path).click(options);
});

/**
 * Type text into element by path
 * @param {string} path - Dot notation path to element
 * @param {string} text - Text to type
 * @param {Object} options - Type options
 */
Cypress.Commands.add('typeInElement', (path, text, options = {}) => {
  cy.getElement(path).type(text, options);
});

/**
 * Clear and type text into element
 * @param {string} path - Dot notation path to element
 * @param {string} text - Text to type
 */
Cypress.Commands.add('clearAndType', (path, text) => {
  cy.getElement(path).clear().type(text);
});

/**
 * Select option from dropdown
 * @param {string} path - Dot notation path to dropdown
 * @param {string} value - Value to select
 */
Cypress.Commands.add('selectOption', (path, value) => {
  cy.getElement(path).select(value);
});

/**
 * Check or uncheck checkbox
 * @param {string} path - Dot notation path to checkbox
 * @param {boolean} check - Whether to check (true) or uncheck (false)
 */
Cypress.Commands.add('checkElement', (path, check = true) => {
  const element = cy.getElement(path);
  if (check) {
    element.check();
  } else {
    element.uncheck();
  }
});

/**
 * Verify element is visible
 * @param {string} path - Dot notation path to element
 * @param {Object} options - Assertion options
 */
Cypress.Commands.add('shouldSeeElement', (path, options = {}) => {
  cy.getElement(path).should('be.visible', options);
});

/**
 * Verify element contains text
 * @param {string} path - Dot notation path to element
 * @param {string} text - Expected text
 */
Cypress.Commands.add('shouldContainText', (path, text) => {
  cy.getElement(path).should('contain', text);
});

/**
 * Verify element does not exist or is hidden
 * @param {string} path - Dot notation path to element
 */
Cypress.Commands.add('shouldNotSeeElement', (path) => {
  cy.getElement(path).should('not.exist');
});

/**
 * Verify element is disabled
 * @param {string} path - Dot notation path to element
 */
Cypress.Commands.add('shouldBeDisabled', (path) => {
  cy.getElement(path).should('be.disabled');
});

/**
 * Verify element is enabled
 * @param {string} path - Dot notation path to element
 */
Cypress.Commands.add('shouldBeEnabled', (path) => {
  cy.getElement(path).should('be.enabled');
});

/**
 * Wait for element to be visible
 * @param {string} path - Dot notation path to element
 * @param {number} timeout - Timeout in milliseconds
 */
Cypress.Commands.add('waitForElement', (path, timeout = 10000) => {
  cy.getElement(path, { timeout }).should('be.visible');
});

// Specialized Commands
Cypress.Commands.add('login', (username, password) => {
  cy.typeInElement('login.username', username);
  cy.typeInElement('login.password', password);
  cy.clickElement('login.loginButton');
});

Cypress.Commands.add('logout', () => {
  cy.clickElement('dashboard.logoutButton');
});

Cypress.Commands.add('search', (query) => {
  cy.typeInElement('dashboard.searchInput', query);
  cy.clickElement('dashboard.searchButton');
});

// Debugging Commands
Cypress.Commands.add('printElements', (category = null) => {
  if (category) {
    elementManager.printCategory(category);
  } else {
    elementManager.printCategories();
  }
});

Cypress.Commands.add('validateElement', (path) => {
  const exists = elementManager.has(path);
  if (exists) {
    const selector = elementManager.get(path);
    cy.log(`✅ Element "${path}" exists: ${selector}`);
  } else {
    cy.log(`❌ Element "${path}" not found`);
  }
  return exists;
});