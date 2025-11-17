// ------------------------------
// AÇÕES COM PRODUTOS
// ------------------------------
Cypress.Commands.add("acessarProduto", (seletor) => {
    cy.get(seletor).click();
});

Cypress.Commands.add("adicionarProduto", (seletor) => {
    cy.get(seletor).click();
});

Cypress.Commands.add("removerProduto", (seletor) => {
    cy.get(seletor).click();
});

// ------------------------------
// VALIDAÇÕES DE PRODUTO
// ------------------------------
Cypress.Commands.add("validarNomeProduto", (nome) => {
    cy.get(".inventory_details_name").should("be.visible").and("have.text", nome);
});

// ------------------------------
// CARRINHO
// ------------------------------
Cypress.Commands.add("carrinhoTemItens", () => {
    cy.get(".shopping_cart_badge")
        .should("be.visible")
        .and(($el) => {
            const qtd = Number($el.text());
            expect(qtd).to.be.greaterThan(0);
        });
});

Cypress.Commands.add("carrinhoVazio", () => {
    cy.get(".shopping_cart_badge").should("not.exist");
});

// ------------------------------
// FILTROS
// ------------------------------
Cypress.Commands.add("selecionarFiltro", (value) => {
    cy.get('[data-test="product-sort-container"]').select(value);
});
