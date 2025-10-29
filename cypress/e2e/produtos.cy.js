/// <reference types="cypress" />

describe("Produtos", () => {
    const produtos = [
        { nome: "Sauce Labs Backpack", seletor: "#item_4_title_link" },
        { nome: "Sauce Labs Bike Light", seletor: "#item_0_title_link" },
        { nome: "Sauce Labs Bolt T-Shirt", seletor: "#item_1_title_link" },
        { nome: "Sauce Labs Fleece Jacket", seletor: "#item_5_title_link" },
        { nome: "Sauce Labs Onesie", seletor: "#item_2_title_link" },
        { nome: "Test.allTheThings() T-Shirt (Red)", seletor: "#item_3_title_link" },
    ];

    beforeEach(() => {
        cy.visit("/");
        cy.get("#user-name").click().type("problem_user");
        cy.get("#password").click().type("secret_sauce");
        cy.get("#login-button").click();
    });
    produtos.forEach((produto) => {
        it(`Verifica se o link do produto corresponde a sua pagina ${produto.nome}`, () => {
            cy.get(produto.seletor).click();
            cy.log(`Validando produto: ${produto.nome}`);
            cy.get(".inventory_details_name").should("have.text", produto.nome);
        });
    });
});
