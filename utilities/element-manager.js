const fs = require('fs-extra');
const path = require('path');

class ElementManager {
  constructor() {
    this.elements = {};
    this.loadElements();
  }

  loadElements() {
    try {
      const elementsPath = path.join(__dirname, 'elements.json');
      this.elements = fs.readJsonSync(elementsPath);
      console.log('✅ Elements configuration loaded successfully');
    } catch (error) {
      console.error('❌ Error loading elements configuration:', error.message);
      throw error;
    }
  }

  /**
   * Get element selector by path
   * @param {string} path - Dot notation path to element (e.g., 'login.selectors.username')
   * @returns {string} CSS selector
   */
  getElement(path) {
    const keys = path.split('.');
    let current = this.elements;

    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        throw new Error(`Element not found: ${path}`);
      }
    }

    if (typeof current !== 'string') {
      throw new Error(`Element path '${path}' does not resolve to a string selector`);
    }

    return current;
  }

  /**
   * Get all elements for a page
   * @param {string} pageName - Name of the page
   * @returns {Object} All elements for the page
   */
  getPageElements(pageName) {
    if (!this.elements.pages[pageName]) {
      throw new Error(`Page '${pageName}' not found in elements configuration`);
    }
    return this.elements.pages[pageName];
  }

  /**
   * Get all components
   * @returns {Object} All components
   */
  getComponents() {
    return this.elements.components;
  }

  /**
   * Get specific component
   * @param {string} componentName - Name of the component
   * @returns {Object} Component elements
   */
  getComponent(componentName) {
    if (!this.elements.components[componentName]) {
      throw new Error(`Component '${componentName}' not found in elements configuration`);
    }
    return this.elements.components[componentName];
  }

  /**
   * Get common elements
   * @returns {Object} Common elements
   */
  getCommonElements() {
    return this.elements.pages.common;
  }

  /**
   * Get URL for a page
   * @param {string} pageName - Name of the page
   * @param {string} urlType - Type of URL (default: 'main')
   * @returns {string} URL path
   */
  getPageUrl(pageName, urlType = 'main') {
    const page = this.getPageElements(pageName);
    if (!page.urls || !page.urls[urlType]) {
      throw new Error(`URL '${urlType}' not found for page '${pageName}'`);
    }
    return page.urls[urlType];
  }

  /**
   * Validate if element exists in configuration
   * @param {string} path - Dot notation path to element
   * @returns {boolean} True if element exists
   */
  hasElement(path) {
    try {
      this.getElement(path);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Get all available pages
   * @returns {string[]} Array of page names
   */
  getAvailablePages() {
    return Object.keys(this.elements.pages);
  }

  /**
   * Get all available components
   * @returns {string[]} Array of component names
   */
  getAvailableComponents() {
    return Object.keys(this.elements.components);
  }

  /**
   * Print element configuration for debugging
   * @param {string} pageName - Optional page name to filter
   */
  printElements(pageName = null) {
    if (pageName) {
      console.log(`\n📋 Elements for page: ${pageName}`);
      console.log(JSON.stringify(this.getPageElements(pageName), null, 2));
    } else {
      console.log('\n📋 All available pages:');
      this.getAvailablePages().forEach(page => {
        console.log(`  - ${page}`);
      });
      console.log('\n📋 All available components:');
      this.getAvailableComponents().forEach(component => {
        console.log(`  - ${component}`);
      });
    }
  }
}

// Create singleton instance
const elementManager = new ElementManager();

module.exports = elementManager;