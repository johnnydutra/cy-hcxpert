Feature: Web Challenge

  Background: User reaches the logged in area of the website
    Given I am logged into the Automation Exercise store website

  Scenario Outline: End-to-end purchase flow with different products
    When I add a specific product "<product>" with quantity <quantity> to the cart
    And I proceed to checkout
    Then I should be presented with correct product <name>, price <price>, quantity <quantity> and order total <total> data

    Examples:
      | product       | quantity | price    | total    |
      | Stylish Dress | 1        | Rs. 1500 | Rs. 1500 |
# | Men Tshirt         | 3        | Rs. 400  | Rs. 1200 |
# | Soft Stretch Jeans | 5        | Rs. 799  | Rs. 3995 |
