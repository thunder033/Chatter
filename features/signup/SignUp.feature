Feature: Sign Up

  As a new user
  I would like to create an account
  using the sign up page

  @SignUp @wip
  Scenario: Register an account
    Given I am viewing the Sign Up page
    When I enter the following details:
    | Field           | Value   |
    | Username        | User1   |
    | Password        | abc123  |
    | Repeat Password | abc123  |
    And I submit my registration
    Then I should receive a confirmation message

  @SignUp @wip
  Scenario: Enter taken username
    Given The following users exist:
    | Username |
    | User1    |
    And I am viewing the Sign Up page
    When I enter a Username of "User1"
    Then I should receive a Taken Username error
    When I submit my registration
    Then I should receive an Invalid Fields error

  @SignUp @wip
  Scenario: Enter mismatched passwords
    Given I am view the Sign Up page
    When I enter the following details:
      | Field           | Value   |
      | Username        | User1   |
      | Password        | abc123  |
      | Repeat Password | abc124  |
    Then I should receive a Mismatched Passwords error
    When I submit my registration
    Then I should receive an Invalid Fields error

  @SignUp @wip
  Scenario: Attempt to access Sign Up page as a registered user
    Given I have a valid session
    When I try to access the Sign Up page
    Then I should be redirected to my account summary
