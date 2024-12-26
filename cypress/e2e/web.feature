Feature: Web Challenge

  Background: User reaches the logged in area of the website
    Given I am logged into the Automation Exercise store website

  Scenario Outline: End-to-end purchase flow with different products
    When I add a product to the cart
    And I proceed to checkout
    Then I should be presented with

    Examples:
      | product            | quantity | total |
      | Stylish Dress      | 1        | 1500  |
      | Men Tshirt         | 3        | 1200  |
      | Soft Stretch Jeans | 5        | 3995  |
