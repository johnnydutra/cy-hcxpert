import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

import CartModal from '../page-objects/CartModal';
import CartPage from '../page-objects/CartPage';
import CheckoutPage from '../page-objects/CheckoutPage';
import LandingPage from '../page-objects/LandingPage';
import Navbar from '../page-objects/Navbar';
import ProductsPage from '../page-objects/ProductsPage';
import ProductDetailsPage from '../page-objects/ProductDetailsPage';

Given('I am logged into the Automation Exercise store website', () => {
  cy.login();
});

When('I search for a specific product', () => {});

When('');
