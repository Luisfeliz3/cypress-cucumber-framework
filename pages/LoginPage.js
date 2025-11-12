import BasePage from './BasePage';

class LoginPage extends BasePage {
  constructor() {
    super('login');
  }

  // Specific methods for login page
  enterUsername(username) {
    this.type('selectors.username', username);
    return this;
  }

  enterPassword(password) {
    this.type('selectors.password', password);
    return this;
  }

  clickLogin() {
    this.click('selectors.loginButton');
    return this;
  }

  clickRememberMe() {
    this.click('selectors.rememberMe');
    return this;
  }

  clickForgotPassword() {
    this.click('selectors.forgotPassword');
    return this;
  }

  login(username, password) {
    this.enterUsername(username)
      .enterPassword(password)
      .clickLogin();
  }

  shouldSeeErrorMessage() {
    this.shouldBeVisible('selectors.errorMessage');
  }

  shouldSeeSuccessMessage() {
    this.shouldBeVisible('selectors.successMessage');
  }

  navigateToForgotPassword() {
    this.navigateTo('forgotPassword');
  }

  navigateToRegister() {
    this.navigateTo('register');
  }
}

export default LoginPage;