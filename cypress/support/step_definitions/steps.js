import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am logged into the Automation Exercise store website', () => {
  cy.login();
});

When(
  'I add a specific product {string} with quantity {int} to the cart',
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
  'I should be presented with correct product <name>, price {string}, quantity {int} and order total {string} data',
  (product, quantity, price, total) => {
    checkout.verifyOrderDetails(product, quantity, price, total);
  }
);
