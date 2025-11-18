Cypress.Commands.add("fazerCompra", () => {
    cy.get("#item_1_title_link").click();
    cy.get("#add-to-cart").click();
    cy.get(".shopping_cart_link").click();
    cy.get("#checkout").click();
    cy.get("#first-name").type("Jon");
    cy.get("#last-name").type("Jones");
    cy.get("#postal-code").type("00000-000");
    cy.get("#continue").click();
});
