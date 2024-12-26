const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const {
  createEsbuildPlugin,
} = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)], // Ensure this is properly imported
      });

      on('file:preprocessor', bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    specPattern: ['**/*.feature', '**/*.cy.js'],
  },
  env: {
    defaultEmail: 'sdetjohnny@gmail.com',
    defaultName: 'Testy McTester',
    defaultPassword: '2LD8haiRxp',
    url: 'https://www.automationexercise.com/',
  },
});
