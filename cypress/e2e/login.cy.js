/// <reference types="cypress" />
describe("login", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("Deve fazer login com as credencias corretas", () => {
        //act
        cy.get("#user-name").click().type("problem_user");
        cy.get("#password").click().type("secret_sauce");
        cy.get("#login-button").click();

        //assert

        cy.contains(".title", "Products").should("be.visible");
    });

    it("login com o campo password vazio deve apresentar uma mensagem de erro", () => {
        //act
        cy.get("#user-name").click().type("problem_user");
        cy.get("#login-button").click();
        cy.get(".error-message-container").should("have.text", "Epic sadface: Password is required");
    });

    it("login com o campo username vazio deve apresentar uma mensagem de erro", () => {
        cy.get("#password").click().type("secret_sauce");
        cy.get("#login-button").click();
        cy.get(".error-message-container").should("have.text", "Epic sadface: Username is required");
    });

    it("login com credencias incorretas deve apresentar mensagem de erro", () => {
        cy.get("#user-name").click().type("alfred");
        cy.get("#password").click().type("123456");
        cy.get("#login-button").click();
        cy.get(".error-message-container").should("have.text", "Epic sadface: Username and password do not match any user in this service");
    });
});
