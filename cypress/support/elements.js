// Centralized elements configuration - One single source of truth
const ELEMENTS = {
  // Login Page Elements
  login: {
    username: '#username',
    password: '#password',
    loginButton: '#login-btn',
    rememberMe: '#remember-me',
    forgotPassword: '.forgot-password',
    errorMessage: '.error-message',
    successMessage: '.success-message'
  },

  // Dashboard Page Elements
  dashboard: {
    header: '.dashboard-header',
    welcomeMessage: '.welcome-message',
    userProfile: '.user-profile',
    logoutButton: '#logout-btn',
    searchInput: '.search-input',
    searchButton: '.search-btn',
    
    // Dashboard Widgets
    widgets: {
      stats: {
        container: '.stats-widget',
        totalUsers: '.total-users',
        revenue: '.revenue',
        growth: '.growth'
      },
      recentActivity: {
        container: '.recent-activity',
        activityList: '.activity-list',
        activityItem: '.activity-item'
      },
      notifications: {
        bellIcon: '.notifications-bell',
        dropdown: '.notifications-dropdown',
        notificationItem: '.notification-item',
        markAsRead: '.mark-as-read'
      }
    },

    // Navigation
    navigation: {
      sidebar: {
        menu: '.sidebar-menu',
        menuItem: '.menu-item',
        subMenu: '.sub-menu'
      },
      topNav: {
        container: '.top-navigation',
        logo: '.nav-logo',
        userMenu: '.user-menu',
        settings: '.settings-menu'
      }
    }
  },

  // User Management Page Elements
  userManagement: {
    pageTitle: '.page-title',
    addUserButton: '#add-user-btn',
    userTable: '.user-table',
    
    tableHeaders: {
      name: '.table-header-name',
      email: '.table-header-email',
      role: '.table-header-role',
      actions: '.table-header-actions'
    },
    
    tableRows: {
      container: '.table-rows',
      row: '.user-row',
      editButton: '.edit-user-btn',
      deleteButton: '.delete-user-btn'
    },
    
    search: {
      input: '.user-search-input',
      button: '.user-search-btn'
    },
    
    pagination: {
      container: '.pagination',
      nextButton: '.pagination-next',
      prevButton: '.pagination-prev',
      pageNumber: '.page-number'
    }
  },

  // Common Elements (used across multiple pages)
  common: {
    loadingSpinner: '.loading-spinner',
    
    modal: {
      overlay: '.modal-overlay',
      container: '.modal-container',
      title: '.modal-title',
      closeButton: '.modal-close',
      confirmButton: '.modal-confirm',
      cancelButton: '.modal-cancel'
    },
    
    toast: {
      container: '.toast-container',
      success: '.toast-success',
      error: '.toast-error',
      warning: '.toast-warning',
      close: '.toast-close'
    },
    
    form: {
      submitButton: 'button[type="submit"]',
      cancelButton: 'button[type="button"]',
      resetButton: 'button[type="reset"]',
      requiredField: '.required-field',
      fieldError: '.field-error'
    }
  },

  // Component Elements (reusable components)
  components: {
    buttons: {
      primary: '.btn-primary',
      secondary: '.btn-secondary',
      danger: '.btn-danger',
      success: '.btn-success',
      warning: '.btn-warning',
      info: '.btn-info',
      small: '.btn-sm',
      large: '.btn-lg',
      disabled: '.btn:disabled'
    },

    forms: {
      input: {
        text: 'input[type="text"]',
        email: 'input[type="email"]',
        password: 'input[type="password"]',
        number: 'input[type="number"]',
        date: 'input[type="date"]',
        file: 'input[type="file"]'
      },
      select: {
        dropdown: 'select',
        option: 'option',
        multiSelect: '.multi-select'
      },
      checkbox: {
        container: '.checkbox-container',
        input: 'input[type="checkbox"]',
        label: '.checkbox-label'
      },
      radio: {
        container: '.radio-container',
        input: 'input[type="radio"]',
        label: '.radio-label'
      },
      textarea: 'textarea'
    },

    tables: {
      container: '.table-container',
      header: '.table-header',
      row: '.table-row',
      cell: '.table-cell',
      sortable: '.sortable',
      filter: '.table-filter'
    },

    navigation: {
      breadcrumb: '.breadcrumb',
      pagination: '.pagination',
      tabs: '.tabs-container',
      tab: '.tab-item'
    }
  }
};

// Element Manager Class
class ElementManager {
  constructor() {
    this.elements = ELEMENTS;
  }

  /**
   * Get element selector by path
   * @param {string} path - Dot notation path (e.g., 'login.username', 'dashboard.widgets.stats.container')
   * @returns {string} CSS selector
   */
  get(path) {
    const keys = path.split('.');
    let current = this.elements;

    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        throw new Error(`❌ Element not found: ${path}`);
      }
    }

    if (typeof current !== 'string') {
      throw new Error(`❌ Element path '${path}' does not resolve to a string selector`);
    }

    return current;
  }

  /**
   * Get all elements for a specific page/component
   * @param {string} category - Category name (e.g., 'login', 'dashboard', 'common')
   * @returns {Object} All elements for the category
   */
  getCategory(category) {
    if (!this.elements[category]) {
      throw new Error(`❌ Category '${category}' not found in elements configuration`);
    }
    return this.elements[category];
  }

  /**
   * Check if element exists in configuration
   * @param {string} path - Dot notation path
   * @returns {boolean} True if element exists
   */
  has(path) {
    try {
      this.get(path);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Print all available element categories
   */
  printCategories() {
    console.log('\n📋 Available Element Categories:');
    Object.keys(this.elements).forEach(category => {
      console.log(`  - ${category}`);
    });
  }

  /**
   * Print elements for a specific category
   * @param {string} category - Category name
   */
  printCategory(category) {
    if (!this.elements[category]) {
      console.log(`❌ Category '${category}' not found`);
      return;
    }

    console.log(`\n📋 Elements for '${category}':`);
    this._printObject(this.elements[category], '  ');
  }

  /**
   * Helper method to recursively print objects
   */
  _printObject(obj, indent) {
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] === 'string') {
        console.log(`${indent}${key}: "${obj[key]}"`);
      } else {
        console.log(`${indent}${key}:`);
        this._printObject(obj[key], indent + '  ');
      }
    });
  }
}

// Create global instance
const elementManager = new ElementManager();

// Make it available globally in Cypress
window.elementManager = elementManager;

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = elementManager;
}