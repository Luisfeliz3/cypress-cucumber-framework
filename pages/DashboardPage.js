import BasePage from './BasePage';

class DashboardPage extends BasePage {
  constructor() {
    super('dashboard');
  }

  // Dashboard specific methods
  shouldSeeWelcomeMessage() {
    this.shouldBeVisible('selectors.welcomeMessage');
  }

  clickUserProfile() {
    this.click('selectors.userProfile');
    return this;
  }

  clickLogout() {
    this.click('selectors.logoutButton');
    return this;
  }

  search(query) {
    this.type('selectors.searchInput', query);
    this.click('selectors.searchButton');
    return this;
  }

  // Widget methods
  shouldSeeStatsWidget() {
    this.shouldBeVisible('widgets.stats.container');
  }

  getTotalUsers() {
    return cy.getElement(`${this.pageName}.widgets.stats.totalUsers`);
  }

  // Navigation methods
  openNotifications() {
    this.click('widgets.notifications.bellIcon');
    return this;
  }

  shouldSeeNotificationsDropdown() {
    this.shouldBeVisible('widgets.notifications.dropdown');
  }
}

export default DashboardPage;