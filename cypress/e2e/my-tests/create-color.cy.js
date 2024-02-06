/// <reference types="cypress" />

const color = [
    { name: "cypress", hash: '#eeeeee' },
  ];
  
  describe("e2e", () => {
    beforeEach(() => {
      cy.visit("localhost:3000/");
    });

    it("create color", () => {
      cy.dataTest("add-color").click();
      cy.dataTest("new-color-modal").should("be.visible");
      cy.dataTest("data_name").type("cypress");
      cy.dataTest("data_hash").type("#FFFFFF");
      cy.dataTest("save-color").click();
      cy.wait(500);
      cy.dataTest("new-color-modal").should('not.exist');
      cy.dataTest('item_21').scrollIntoView().should("be.visible");
    });

    it("delete color", () => {
      cy.dataTest('item_1').should("be.visible");
      cy.dataTest("delete_item_1").click();
      cy.dataTest('item_1').should("not.exist");
    })
  });
  