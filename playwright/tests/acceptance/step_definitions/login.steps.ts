import {Given, Then} from "@cucumber/cucumber";

import { ICustomWorld } from './custom-world'
import {isUserLoggedInSuccessfully, login, logout, registerUser} from "../modules/login";

import { user } from '../utils/createUser'

Given('customer login to the app', async  function (this: ICustomWorld) {
    const page = this.page!
    await page.goto('http://localhost:8080/parabank/index.htm?ConnType=JDBC');
    console.log('Object during login', user);
    await login(page, user)
});

Then('customer should be logged in successfully', async function (this: ICustomWorld) {
    const page = this.page!
    await isUserLoggedInSuccessfully(page, user);
    await logout(page);
});

Given('A customer register as new user', async  function (this: ICustomWorld) {
    const page = this.page!
    await page.goto('http://localhost:8080/parabank/register.htm');
    console.log('Object during registering', user);
    await registerUser(page, user);
    await page.locator("[value='Register']").click();
    console.log('Object during checking after login', user);
    await isUserLoggedInSuccessfully(page, user);
    await logout(page);
});
