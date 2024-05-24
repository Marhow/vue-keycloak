const { test, expect } = require('@playwright/test');

test('LOGIN', async ({ page }) => {

  //Navigate to the keycloak admin page.
  const pageURL = 'http://localhost:8080/admin'
  await page.goto( pageURL );
  expect ( pageURL ).toContain('/admin');

  // Set the username field to 'test'.
  const inputUsername = page.locator('[id="username"]');
  await inputUsername.type('test');

  // Check the value passed in to the username field.
  const checkInput = await inputUsername.inputValue();
  expect( checkInput ).toEqual('test');

  // Set the password field to 'test'.
  const inputPassword = page.locator('[id="password"]');
  await inputPassword.type('test');

  // Check the value passed in to the password field.
  const checkPassword = await inputPassword.inputValue();
  expect( checkPassword ).toEqual('test');

  // Locate the sign in button and click it to login.
  const loginButton = page.locator('[id="kc-login"]');
  await loginButton.click();

});

test('SETUP REALM', async ({ page }) => {

  const pageURL = 'http://localhost:8080/admin/master/console/';
  await page.goto( pageURL );
  expect ( pageURL ).toContain('/admin/master/console/');

  // Set the username field to 'test'.
  const inputUsername = page.locator('[id="username"]');
  await inputUsername.type('test');

  // Check the value passed in to the username field.
  const checkInput = await inputUsername.inputValue();
  expect( checkInput ).toEqual('test');

  // Set the password field to 'test'.
  const inputPassword = page.locator('[id="password"]');
  await inputPassword.type('test');

  // Check the value passed in to the password field.
  const checkPassword = await inputPassword.inputValue();
  expect( checkPassword ).toEqual('test');

  // Locate the sign in button and click it to login.
  const loginButton = page.locator('[id="kc-login"]');
  await loginButton.click();

  const dropDownMenu = page.locator('[class="pf-c-dropdown__toggle keycloak__realm_selector_dropdown__toggle"]');
  await dropDownMenu.click();

  const CRButton = page.locator('[class="pf-c-button pf-m-primary pf-m-block"]');
  await CRButton.click();

  const inputField = page.locator('[id="kc-realm-name"]');
  await inputField.type("vue-keycloak");

  const createRealm = page.locator('[class="pf-c-button pf-m-primary"]');
  await createRealm.click();

  const newPageURL = 'http://localhost:8080/admin/master/console/#/vue-keycloak';
  expect ( newPageURL ).toContain('/#/vue-keycloak');

});

test('SETUP CLIENT', async ({ page }) => {

  const pageURL = 'http://localhost:8080/admin/master/console/#/vue-keycloak/clients';
  await page.goto( pageURL );
  expect ( pageURL ).toContain('/#/vue-keycloak/clients');

  // Set the username field to 'test'.
  const inputUsername = page.locator('[id="username"]');
  await inputUsername.type('test');

  // Check the value passed in to the username field.
  const checkInput = await inputUsername.inputValue();
  expect( checkInput ).toEqual('test');

  // Set the password field to 'test'.
  const inputPassword = page.locator('[id="password"]');
  await inputPassword.type('test');

  // Check the value passed in to the password field.
  const checkPassword = await inputPassword.inputValue();
  expect( checkPassword ).toEqual('test');

  // Locate the sign in button and click it to login.
  const loginButton = page.locator('[id="kc-login"]');
  await loginButton.click();

  const clientButton = page.locator('[class="pf-c-button pf-m-primary"]');
  await clientButton.click();

  const inputField = page.locator('[id="kc-client-id"]');
  await inputField.type('vue-app');

  const nextButton = page.locator('[class="pf-c-button pf-m-primary"]');
  await nextButton.click();
  await nextButton.click();

  const rootURL = page.locator('[id="kc-root-url"]').locator('nth=0');
  await rootURL.type('http://localhost:8081/*');

  const validRedirectUris = page.locator('[class="pf-c-form-control"]').locator('nth=2');
  await validRedirectUris.type('http://localhost:8081/*');

  const webOrigins = page.locator('[class="pf-c-form-control"]').locator('nth=4');
  await webOrigins.type('*');
  await nextButton.click();

});

test('SETUP USER', async ({ page }) => {

  //Navigate to the keycloak admin page.
  const pageURL = 'http://localhost:8080/admin/master/console/#/vue-keycloak/users'
  await page.goto( pageURL );
  expect ( pageURL ).toContain('/#/vue-keycloak/users');

  // Set the username field to 'test'.
  const inputUsername = page.locator('[id="username"]');
  await inputUsername.type('test');

  // Check the value passed in to the username field.
  const checkInput = await inputUsername.inputValue();
  expect( checkInput ).toEqual('test');

  // Set the password field to 'test'.
  const inputPassword = page.locator('[id="password"]');
  await inputPassword.type('test');

  // Check the value passed in to the password field.
  const checkPassword = await inputPassword.inputValue();
  expect( checkPassword ).toEqual('test');

  // Locate the sign in button and click it to login.
  const loginButton = page.locator('[id="kc-login"]');
  await loginButton.click();

  const createUserButton = page.locator('[class="pf-c-button pf-m-primary"]');
  await createUserButton.click();

  const fillUsername = page.locator('[name="username"]');
  await fillUsername.type('mhowe');

  const checkUsername = await fillUsername.inputValue();
  expect( checkUsername ).toEqual('mhowe');
  await createUserButton.click();

});

test('SETUP USER PASSWORD', async ({ page }) => {
  const pageURL = 'http://localhost:8080/admin/master/console/#/vue-keycloak/users';
  await page.goto( pageURL );
  expect ( pageURL ).toContain('/#/vue-keycloak/users');

  // Set the username field to 'test'.
  const inputUsername = page.locator('[id="username"]');
  await inputUsername.type('test');

  // Check the value passed in to the username field.
  const checkInput = await inputUsername.inputValue();
  expect( checkInput ).toEqual('test');

  // Set the password field to 'test'.
  const inputPassword = page.locator('[id="password"]');
  await inputPassword.type('test');

  // Check the value passed in to the password field.
  const checkPassword = await inputPassword.inputValue();
  expect( checkPassword ).toEqual('test');

  // Locate the sign in button and click it to login.
  const loginButton = page.locator('[id="kc-login"]');
  await loginButton.click();

  const selectUser = page.getByText('mhowe', { exact: true });
  await selectUser.click();

  const selectCredentialsTab = page.locator('[class="pf-c-tabs__item-text"]').locator('nth=2');
  await selectCredentialsTab.click();

  const selectSetPassword = page.getByText('Set password', { exact: true });
  await selectSetPassword.click();

  const inputUserPassword = page.locator('[id="password"]');
  await inputUserPassword.type('test');

  const checkUserPassword = await inputUserPassword.inputValue();
  expect( checkUserPassword ).toEqual('test');

  const confirmPassword= page.locator('[id="passwordConfirmation"]');
  await confirmPassword.type('test');

  const checkConfirmPassword = await confirmPassword.inputValue();
  expect( checkConfirmPassword ).toEqual('test');

  const nonTemporaryPassword = page.locator('div').filter({ hasText: /^OnOff$/ }).locator('span').first();
  await nonTemporaryPassword.click();

  //User 2
  const selectUser2 = page.getByText('test', { exact: true });
  await selectUser2.click();

  const selectCredentialsTab2 = page.locator('[class="pf-c-tabs__item-text"]').locator('nth=2');
  await selectCredentialsTab2.click();

  const selectSetPassword2 = page.getByText('Set password', { exact: true });
  await selectSetPassword2.click();

  const inputUserPassword2 = page.locator('[id="password"]');
  await inputUserPassword2.type('test');

  const checkUserPassword2 = await inputUserPassword.inputValue();
  expect( checkUserPassword2 ).toEqual('test');

  const confirmPassword2= page.locator('[id="passwordConfirmation"]');
  await confirmPassword2.type('test');

  const checkConfirmPassword2 = await confirmPassword.inputValue();
  expect( checkConfirmPassword2 ).toEqual('test');

  const nonTemporaryPassword2 = page.locator('div').filter({ hasText: /^OnOff$/ }).locator('span').first();
  await nonTemporaryPassword2.click();

  const savePasswordButton = page.locator('[class="pf-c-modal-box__footer"]').getByTestId('confirm');
  await savePasswordButton.click();
  await savePasswordButton.click();

});