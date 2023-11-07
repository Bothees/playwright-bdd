Feature: Login to ParaBank
  User wants to use login to the application

  Scenario: Login as User to application
    Given A customer register as new user
    Given customer login to the app
    Then customer should be logged in successfully