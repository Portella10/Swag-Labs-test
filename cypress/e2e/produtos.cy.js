/// <reference types="cypress" />

// Carregamento síncrono do fixture (correto para gerar testes dinamicamente)
const { produtos } = require("../fixtures/produtos.json");

describe("Produtos", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.fazerLoginValido();
    });

    // ------------------------------
    // TESTES DINÂMICOS POR PRODUTO
    // ------------------------------
    produtos.forEach((p) => {
        it(`Valida produto: ${p.nome}`, () => {
            cy.acessarProduto(p.seletor);
            cy.validarNomeProduto(p.nome);
        });
    });

    // ------------------------------
    // TESTE: ADICIONAR AO CARRINHO
    // ------------------------------
    it("Adiciona item ao carrinho", () => {
        cy.adicionarProduto("#add-to-cart-sauce-labs-backpack");
        cy.carrinhoTemItens();
    });

    // ------------------------------
    // TESTE: REMOVER DO CARRINHO
    // ------------------------------
    it("Remove item do carrinho", () => {
        cy.adicionarProduto("#add-to-cart-sauce-labs-backpack");
        cy.removerProduto("#remove-sauce-labs-backpack");
        cy.carrinhoVazio();
    });

    // ------------------------------
    // TESTE: FILTROS
    // ------------------------------
    it("Verifica filtros", () => {
        cy.selecionarFiltro("lohi");
        cy.get(".active_option").should("have.text", "Price (low to high)");
    });
});
