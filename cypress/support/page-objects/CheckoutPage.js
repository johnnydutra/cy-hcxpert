class CheckoutPage {
  locators = {
    firstProductName: 'tbody tr:nth-of-type(1) h4',
    firstProductPrice: 'tbody tr:nth-of-type(1) .cart_price p',
    firstProductQuantity: 'tbody tr:nth-of-type(1) .cart_quantity button',
    firstProductTotal: 'tbody tr:nth-of-type(1) .cart_total p',
    orderTotalPrice: 'tbody tr:nth-of-type(2) .cart_total_price',
  };

  validateFirstProductName(name) {
    cy.get(this.locators.firstProductName).should('have.text', name);
  }

  validateFirstProductPrice(price) {
    cy.get(this.locators.firstProductPrice).should('have.text', price);
  }

  validateFirstProductQuantity(quantity) {
    cy.get(this.locators.firstProductQuantity).should('have.text', quantity);
  }

  validateFirstProductTotal(productTotal) {
    cy.get(this.locators.firstProductTotal).should('have.text', productTotal);
  }

  validateOrderTotal(orderTotal) {
    cy.get(this.locators.orderTotalPrice).should('have.text', orderTotal);
  }
}

export const checkoutPage = new CheckoutPage();
