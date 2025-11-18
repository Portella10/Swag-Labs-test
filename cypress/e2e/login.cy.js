/// <reference types="cypress" />
describe("login", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("Deve fazer login com as credencias corretas", () => {
        //act
        cy.fazerLoginValido();

        //assert
        cy.contains(".title", "Products").should("be.visible");
    });

    it("login com o campo password vazio deve apresentar uma mensagem de erro", () => {
        //act
        cy.get("#user-name").click().type("problem_user");
        cy.get("#login-button").click();

        //assert
        cy.mensagemDeErro("Epic sadface: Password is required");
    });

    it("login com o campo username vazio deve apresentar uma mensagem de erro", () => {
        //act
        cy.get("#password").click().type("secret_sauce");
        cy.get("#login-button").click();

        //assert
        cy.mensagemDeErro("Epic sadface: Username is required");
    });

    it("login com credencias incorretas deve apresentar mensagem de erro", () => {
        //act
        cy.loginComCredenciaisInvalidas("alfred", "123456");

        //assert
        cy.mensagemDeErro("Epic sadface: Username and password do not match any user in this service");
    });
});
