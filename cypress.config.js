const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.sapfioneer.com",
    chromeWebSecurity: false,
    defaultCommandTimeout: 5000,
    retries: {
      runMode: 2,
      openMode: 0,
    },
  },
});
