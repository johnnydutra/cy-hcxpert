class CartPage {
  locators = {
    proceedToCheckoutButton: '.check_out',
  };

  clickProceedToCheckoutButton() {
    cy.get(this.locators.proceedToCheckoutButton).click();
  }
}

export const cartPage = new CartPage();
