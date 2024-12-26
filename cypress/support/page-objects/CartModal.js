class CartModal {
  locators = {
    container: '#cartModal',
    title: `#cartModal h4`,
    text: `#cartModal p:nth-of-type(1)`,
    link: `#cartModal a`,
    button: `#cartModal button`,
  };

  assertVisibility(isVisible = true) {
    const status = isVisible ? 'be.visible' : 'not.be.visible';
    cy.get(this.locators.container).should(status);
  }

  clickCartLink() {
    cy.get(this.locators.link).click();
  }

  clickContinueButton() {
    cy.get(this.locators.button).click();
  }
}

export const cartModal = new CartModal();
