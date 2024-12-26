import { cartModal } from './page-objects/CartModal';
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

Cypress.Commands.add('checkoutSelectedProduct', (quantity) => {
  productDetailsPage.setQuantity(quantity);
  productDetailsPage.clickAddToCartButton();
  cartModal.isVisible(true);
  cartModal.clickCartLink();
  cartModal.isVisible(false);
});
