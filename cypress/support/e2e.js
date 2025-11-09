import './commands';
import '@badeball/cypress-cucumber-preprocessor';
import elementManager from '../../config/element-manager';


// Make elementManager available globally for debugging
if (window.Cypress) {
  window.elementManager = elementManager;
}