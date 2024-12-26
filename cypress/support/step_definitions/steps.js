import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am logged into the Automation Exercise store website', () => {
  cy.login();
});

Given('I have no products in my shopping cart', () => {
  cy.emptyCart();
});

When(
  'I add a specific product {string} with quantity {string} to the cart',
  (product, quantity) => {
    cy.searchForProduct(product, true);
    cy.selectProductByName(product);
    cy.addSelectedProductToCart(quantity);
  }
);

When('I proceed to checkout', () => {
  cy.checkout();
});

Then(
  'I should be presented with correct product {string}, price {string}, quantity {string} and order total {string} data',
  (product, quantity, price, total) => {
    cy.verifySingleProductOrderDetails(product, quantity, price, total);
  }
);
