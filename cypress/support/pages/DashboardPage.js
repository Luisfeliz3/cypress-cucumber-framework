class DashboardPage {
  constructor() {
    this.elements = window.elementManager.getCategory('dashboard');
  }

  shouldBeVisible() {
    cy.shouldSeeElement('dashboard.header');
    return this;
  }

  search(query) {
    cy.typeInElement('dashboard.searchInput', query);
    cy.clickElement('dashboard.searchButton');
    return this;
  }

  openNotifications() {
    cy.clickElement('dashboard.widgets.notifications.bellIcon');
    return this;
  }

  shouldSeeNotifications() {
    cy.shouldSeeElement('dashboard.widgets.notifications.dropdown');
    return this;
  }

  logout() {
    cy.clickElement('dashboard.logoutButton');
    return this;
  }

  navigateTo(menuItem) {
    cy.clickElement(`dashboard.navigation.sidebar.menuItem[data-item="${menuItem}"]`);
    return this;
  }
}

window.DashboardPage = DashboardPage;