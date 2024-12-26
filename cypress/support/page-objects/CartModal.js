class CartModal {
  locators = {
    container: '#cartModal',
    title: `${this.locators.container} h4`,
    text: `${this.locators.container} p:nth-of-type(1)`,
    link: `${this.locators.container} a`,
    button: `${this.locators.container} button`,
  };

  isVisible() {}

  clickCartLink() {}

  clickContinueButton() {}
}

export const cartModal = new CartModal();
