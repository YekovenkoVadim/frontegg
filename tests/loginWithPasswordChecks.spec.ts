import { test, expect } from '@playwright/test'
import { LoginPage } from '../page-objects/LoginPage.js'

test.describe.configure({ mode: 'parallel'})  // mode: 'serial'

test('@e2e Check logging with password using Frontegg - valid credentials', async({ page }) => {

  const loginPage = new LoginPage(page)
  // go to login page
  await page.goto('./')
  // move through logging flow with valid credentials
  await loginPage.signInWithPassword(process.env.USERNAME, process.env.PASSWORD)
  // check status code 200 for auth endpoint
  const response = await page.waitForResponse((response) => response.url().includes("/v1/me/authorization"));
  expect(response.status()).toBe(200)
  // check the title correctness
  await expect(page).toHaveTitle(/React App/)
  // check the url correctness
  await page.waitForURL('/')
  // check that app page is loaded successfully
  await page.waitForLoadState('domcontentloaded')
})

test('@e2e Check logging with password using Frontegg - invalid password', async({ page }) => {
  
  const loginPage = new LoginPage(page)
  // go to login page
  await page.goto('./')
  // move through logging flow with invalid password
  await loginPage.signInWithPassword(process.env.USERNAME, 'invalidPassword')
  // check status code 401 for auth endpoint
  const response = await page.waitForResponse((response) => response.url().includes("/v1/user"));
  expect(response.status()).toBe(401)
  // check the title correctness
  await expect(page).toHaveTitle(/Vadym Yekovenko login/)
  // check that login page is still present
  await expect(page).toHaveURL(/\/login/);
})