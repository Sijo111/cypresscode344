const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    Env:{
      test:{
        url:"https://practicetestautomation.com/practice-test-login/",
        username:"student",
        password:"Password123"
      }
    }
  },
});
