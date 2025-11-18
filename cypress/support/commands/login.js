Cypress.Commands.add("fazerLoginValido", () => {
    cy.get("#user-name").click().type("problem_user");
    cy.get("#password").click().type("secret_sauce");
    cy.get("#login-button").click();
});

Cypress.Commands.add("loginComCredenciaisInvalidas", (username, password) => {
    cy.get("#user-name").click().type(username);
    cy.get("#password").click().type(password);
    cy.get("#login-button").click();
});

Cypress.Commands.add("mensagemDeErro", (mensagem) => {
    cy.get(".error-message-container").should("have.text", mensagem);
});
