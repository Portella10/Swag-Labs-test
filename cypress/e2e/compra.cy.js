/// <reference types="cypress" />

describe("Efetuando Compra", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.fazerLoginValido();
    });

    it("Deve fazer a compra de um produto", () => {
        //act
        cy.fazerCompra();
    });
});
