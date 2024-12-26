class CartPage {
  locators = {
    section: '#cart_items',
    emptyCartState: '#empty_cart',
    proceedToCheckoutButton: '.check_out',
    removeButton: '.cart_quantity_delete',
  };

  clickProceedToCheckoutButton() {
    cy.get(this.locators.proceedToCheckoutButton).click();
  }

  clearCartItems() {
    cy.get(this.locators.emptyCartState)
      .invoke('attr', 'style')
      .then((style) => {
        cy.log(style);
        if (style === 'display: none;') {
          cy.get(this.locators.removeButton).each(($el) => {
            cy.wrap($el).click();
          });
        }
      });
  }
}

export const cartPage = new CartPage();
