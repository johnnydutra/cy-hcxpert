/// <reference types = "cypress" />

class LandingPage {
  locators = {
    loginEmailInput: '[data-qa="login-email"]',
    loginPasswordInput: '[data-qa="login-password"]',
    loginButton: '[data-qa="login-button"]',
    signupNameInput: '[data-qa="signup-name"]',
    signupEmailInput: '[data-qa="signup-email"]',
    signupButton: '[data-qa="signup-button"]',
  };

  submitLoginForm(email, password) {
    this.fillLoginEmail(email);
    this.fillLoginPassword(password);
    this.clickLoginButton();
  }

  submitSignupForm(name, email) {
    this.fillSignupName(name);
    this.fillSignupEmail(email);
    this.clickSignupButton();
  }

  fillLoginEmail(email) {
    cy.get(this.locators.loginEmailInput).type(email);
  }

  fillLoginPassword(password) {
    cy.get(this.locators.loginPasswordInput).type(password);
  }

  clickLoginButton() {
    cy.get(this.locators.loginButton).click();
  }

  fillSignupName(name) {
    cy.get(this.locators.signupNameInput).type(name);
  }

  fillSignupEmail(email) {
    cy.get(this.locators.signupEmailInput).type(email);
  }

  clickSignupButton() {
    cy.get(this.locators.signupButton).click();
  }
}

export const landingPage = new LandingPage();
