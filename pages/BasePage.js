const elementManager = require('../config/element-manager');

class BasePage {
  constructor(pageName) {
    this.pageName = pageName;
    this.elements = elementManager.getPageElements(pageName);
  }

  // Common methods available to all pages
  getElement(path) {
    return elementManager.getElement(`${this.pageName}.${path}`);
  }

  navigateTo(urlType = 'main') {
    const url = elementManager.getPageUrl(this.pageName, urlType);
    cy.visit(url);
  }

  waitForPageLoad() {
    cy.wait(1000); // Adjust based on your application
  }

  // Common element interactions
  click(path) {
    cy.clickElement(`${this.pageName}.${path}`);
  }

  type(path, text) {
    cy.typeInElement(`${this.pageName}.${path}`, text);
  }

  clearAndType(path, text) {
    cy.clearAndType(`${this.pageName}.${path}`, text);
  }

  shouldBeVisible(path) {
    cy.shouldSeeElement(`${this.pageName}.${path}`);
  }

  shouldContainText(path, text) {
    cy.shouldContainText(`${this.pageName}.${path}`, text);
  }

  shouldNotBeVisible(path) {
    cy.shouldNotSeeElement(`${this.pageName}.${path}`);
  }
}

module.exports = BasePage;