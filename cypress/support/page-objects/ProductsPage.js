class ProductsPage {
  locators = {
    searchInput: '#search_product',
    searchButton: '#submit_search',
    productCard: {
      container: '.product-image-wrapper',
      price: `${this.locators.productCard} .productinfo h2`,
      title: `${this.locators.productCard} .productinfo p`,
      addToCart: `${this.locators.productCard} .productinfo add-to-cart`,
      viewProduct: `${this.locators.productCard} .choose a`,
    },
  };

  fillSearchInput(searchTerm) {
    cy.get(this.locators.searchInput).type(searchTerm);
  }

  clickSearchButton() {
    cy.get(this.locators.searchButton).click();
  }

  listSizeShouldBe(quantity) {
    cy.get(this.locators.productCard.container).should('have.length', quantity);
  }
}

export const productsPage = new ProductsPage();
