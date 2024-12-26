/// <reference types="cypress" />

class ProductsPage {
  locators = {
    searchInput: '#search_product',
    searchButton: '#submit_search',
    productCards: '.product-image-wrapper',
    productName: '.productinfo p',
    viewProductLink: 'a[href^="/product_details"]',
  };

  fillSearchInput(searchTerm) {
    cy.get(this.locators.searchInput).type(searchTerm);
  }

  clickSearchButton() {
    cy.get(this.locators.searchButton).click();
  }

  listSizeShouldBe(quantity) {
    cy.get(this.locators.productCards).should('have.length', quantity);
  }

  accessProductDetails(productName) {
    cy.get(this.locators.productCards).each(($el) => {
      cy.wrap($el)
        .find(this.locators.productName)
        .invoke('text')
        .then((name) => {
          if (name === productName) {
            cy.wrap($el).find(this.locators.viewProductLink).click();
          }
        });
    });
  }
}
export const productsPage = new ProductsPage();
