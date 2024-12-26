const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    defaultEmail: 'sdetjohnny@gmail.com',
    defaultName: 'Testy McTester',
    defaultPassword: '2LD8haiRxp',
  },
});
