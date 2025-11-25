/// <reference types="cypress" />

const { produtos } = require("../fixtures/produtos.json");

describe("Produtos", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.fazerLoginValido();
    });

    produtos.forEach((p) => {
        it(`Valida produto: ${p.nome}`, () => {
            cy.acessarProduto(p.seletor);
            cy.validarNomeProduto(p.nome);
        });
    });

    it("Adiciona item ao carrinho", () => {
        cy.adicionarProduto("#add-to-cart-sauce-labs-backpack");
        cy.carrinhoTemItens();
    });

    it("Remove item do carrinho", () => {
        cy.adicionarProduto("#add-to-cart-sauce-labs-backpack");
        cy.removerProduto("#remove-sauce-labs-backpack");
        cy.carrinhoVazio();
    });

    it("Verifica filtros", () => {
        cy.selecionarFiltro("lohi");
        cy.get(".active_option").should("have.text", "Price (low to high)");
    });
});
