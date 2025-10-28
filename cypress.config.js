const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        reporter: "cypress-mochawesome-reporter",
        baseUrl: "https://www.saucedemo.com",
        setupNodeEvents(on, config) {
            // implement node event listeners here
            require("cypress-mochawesome-reporter/plugin")(on);
        },
    },
});
