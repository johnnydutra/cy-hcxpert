class Navbar {
  locators = {
    homeLink: '.shop-menu a[href="/"]',
    productsLink: '.shop-menu a[href="/products"]',
    cartLink: '.shop-menu a[href="/view_cart"]',
    signupLoginLink: '.shop-menu a[href="/login"]',
    logoutLink: '.shop-menu a[href="/logout"]',
    deleteAccountLink: '.shop-menu a[href="/delete_account"]',
    testCasesLink: '.shop-menu a[href="/test_cases"]',
    apiTestingLink: '.shop-menu a[href="/api_list"]',
    videoTutorialsLink:
      '.shop-menu a[href="https://www.youtube.com/c/AutomationExercise"]',
    contactUsLink: '.shop-menu a[href="/contact_us"]',
    loggedInUser: '.shop-menu a:not([href])',
  };

  goToHomePage() {
    cy.get(this.locators.homeLink).click();
  }

  goToProducts() {
    cy.get(this.locators.productsLink).click();
  }

  goToCart() {
    cy.get(this.locators.cartLink).click();
  }

  goToLoginPage() {
    cy.get(this.locators.signupLoginLink).click();
  }

  clickLogout() {
    cy.get(this.locators.logoutLink).click();
  }

  clickDeleteAccount() {
    cy.get(this.locators.deleteAccountLink).click();
  }

  goToTestCases() {
    cy.get(this.locators.testCasesLink).click();
  }

  goToApiTesting() {
    cy.get(this.locators.apiTestingLink).click();
  }

  goToVideoTutorials() {
    cy.get(this.locators.videoTutorialsLink).click();
  }

  goToContactUsPage() {
    cy.get(this.locators.contactUsLink).click();
  }

  assertLoggedInUser(name) {
    cy.get(this.locators.loggedInUser).should('contain', name);
  }
}

export const navbar = new Navbar();
