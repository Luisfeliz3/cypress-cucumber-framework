import { getPageElements, getElement as _getElement, getPageUrl } from '../utilities/element-manager.js';

class BasePage {
  constructor(pageName) {
    this.pageName = pageName;
    this.elements = getPageElements(pageName);
  }

  // Common methods available to all pages
  getElement(path) {
    return _getElement(`${this.pageName}.${path}`);
  }

  navigateTo(urlType = 'main') {
    const url = getPageUrl(this.pageName, urlType);
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

export default BasePage;