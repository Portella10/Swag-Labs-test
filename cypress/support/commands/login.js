Cypress.Commands.add("fazerLoginValido", () => {
    cy.get("#user-name").click().type("problem_user");
    cy.get("#password").click().type("secret_sauce");
    cy.get("#login-button").click();
});
