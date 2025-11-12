class LoginPage {
  constructor() {
    this.elements = window.elementManager.getCategory('login');
  }

  visit() {
    cy.visit('/login');
    return this;
  }

  enterUsername(username) {
    cy.typeInElement('login.username', username);
    return this;
  }

  enterPassword(password) {
    cy.typeInElement('login.password', password);
    return this;
  }

  clickLogin() {
    cy.clickElement('login.loginButton');
    return this;
  }

  clickRememberMe() {
    cy.clickElement('login.rememberMe');
    return this;
  }

  login(username, password) {
    this.enterUsername(username)
      .enterPassword(password)
      .clickLogin();
    return this;
  }

  shouldSeeErrorMessage() {
    cy.shouldSeeElement('login.errorMessage');
    return this;
  }

  shouldSeeSuccessMessage() {
    cy.shouldSeeElement('login.successMessage');
    return this;
  }
}

// Make available globally
window.LoginPage = LoginPage;