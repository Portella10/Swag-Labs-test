/// <reference types="cypress" />

describe("Produtos", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get("#user-name").click().type("problem_user");
        cy.get("#password").click().type("secret_sauce");
        cy.get("#login-button").click();
    });

    it("Ao clicar no link do produto deve ser redirecionado para a pagina do produto ", () => {
        cy.get("#item_4_title_link").click();
        cy.log("Bug, Link do produto nao corresponde ao da pagina");
        cy.get(".inventory_details_name").should("have.text", "Sauce Labs Backpack");
    });
});
