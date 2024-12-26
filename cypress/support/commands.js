import { cartModal } from './page-objects/CartModal';
import { cartPage } from './page-objects/CartPage';
import { checkoutPage } from './page-objects/CheckoutPage';
import { landingPage } from './page-objects/LandingPage';
import { navbar } from './page-objects/Navbar';
import { productDetailsPage } from './page-objects/ProductDetailsPage';
import { productsPage } from './page-objects/ProductsPage';

Cypress.Commands.add(
  'login',
  (
    email = Cypress.env('defaultEmail'),
    password = Cypress.env('defaultPassword'),
    name = Cypress.env('defaultName')
  ) => {
    cy.visit(Cypress.env('url'));
    navbar.goToLoginPage();
    landingPage.fillLoginEmail(email);
    landingPage.fillLoginPassword(password);
    landingPage.clickLoginButton();
    navbar.assertLoggedInUser(name);
  }
);

Cypress.Commands.add(
  'searchForProduct',
  (productName, isSingleMatchExpected = false) => {
    navbar.goToProducts();
    productsPage.fillSearchInput(productName);
    productsPage.clickSearchButton();
    if (isSingleMatchExpected) productsPage.listSizeShouldBe(1);
  }
);

Cypress.Commands.add('selectProductByName', (product) => {
  productsPage.accessProductDetails(product);
  productDetailsPage.productNameIs(product);
});

Cypress.Commands.add('addSelectedProductToCart', (quantity) => {
  productDetailsPage.setQuantity(quantity);
  productDetailsPage.clickAddToCartButton();
  cartModal.assertVisibility(true);
  cartModal.clickContinueButton();
  cartModal.assertVisibility(false);
});

Cypress.Commands.add('checkout', () => {
  navbar.goToCart();
  cartPage.clickProceedToCheckoutButton();
});

Cypress.Commands.add(
  'verifySingleProductOrderDetails',
  (productName, productPrice, productQuantity, orderTotal) => {
    const productTotal = orderTotal;
    checkoutPage.validateFirstProductName(productName);
    checkoutPage.validateFirstProductPrice(productPrice);
    checkoutPage.validateFirstProductQuantity(productQuantity);
    checkoutPage.validateFirstProductTotal(productTotal);
    checkoutPage.validateOrderTotal(orderTotal);
  }
);

Cypress.Commands.add('emptyCart', () => {
  navbar.goToCart();
  cartPage.clearCartItems();
});
