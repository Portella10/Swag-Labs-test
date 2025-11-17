/// <reference types="cypress" />

describe("Efetuando Compra", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get("#user-name").click().type("problem_user");
        cy.get("#password").click().type("secret_sauce");
        cy.get("#login-button").click();
    });

    it("Deve fazer a compra de um produto", () => {
        cy.get("#item_1_title_link").click();
        cy.get("#add-to-cart").click();
        cy.get(".shopping_cart_link").click();
        cy.get("#checkout").click();
        cy.get("#first-name").type("Jon");
        cy.get("#last-name").type("Jones");
        cy.get("#postal-code").type("00000-000");
        cy.get("#continue").click();
    });
});
