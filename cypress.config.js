const { defineConfig } = require('cypress');
const webpackPreprocessor = require('@cypress/webpack-preprocessor');

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const webpackOptions = {
        resolve: {
          extensions: ['.ts', '.js']
        },
        module: {
          rules: [
            {
              test: /\.feature$/,
              use: [
                {
                  loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                  options: config,
                },
              ],
            },
          ],
        },
        // Handle Node.js built-in modules
        node: {
          __dirname: true,
          __filename: true,
          global: true,
        }
      };

      on('file:preprocessor', webpackPreprocessor({ webpackOptions }));

      // Import and use the cucumber preprocessor
      const cucumberPreprocessor = require('@badeball/cypress-cucumber-preprocessor');
      await cucumberPreprocessor.addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    specPattern: 'cypress/e2e/features/**/*.feature',
    supportFile: 'cypress/support/e2e.js',
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true,
    videoCompression: 32,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true
  },
});