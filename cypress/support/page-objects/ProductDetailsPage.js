class ProductDetailsPage {
  locators = {
    name: '.product-information h2',
    price: '.product-information > span > span',
    quantity: '#quantity',
    addToCartButton: '.cart',
  };

  productNameIs(name) {
    cy.get(this.locators.name).should('have.text', name);
  }

  setQuantity(quantity) {
    cy.get(this.locators.quantity).clear().type(quantity);
  }

  clickAddToCartButton() {
    cy.get(this.locators.addToCartButton).click();
  }
}

export const productDetailsPage = new ProductDetailsPage();
