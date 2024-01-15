import { test, expect } from '@playwright/test'
import { LoginPage } from '../page-objects/LoginPage.js'
import { HomePage } from '../page-objects/HomePage.js'
import { AdminPortalPage } from '../page-objects/AdminPortalPage.js'
import { AccountDetailsPage } from '../page-objects/AccountDetailsPage.js'

test.describe.configure({ mode: 'parallel'})  // mode: 'serial'

test('@e2e Validate account details in admin portal', async({ page }) => {
  
  const loginPage = new LoginPage(page)
  const homePage = new HomePage(page)
  const adminPortalPage = new AdminPortalPage(page)
  const accountDetailsPage = new AccountDetailsPage(page)

  // login
  await page.goto('./')
  await loginPage.signInWithPassword(process.env.USERNAME, process.env.PASSWORD)
  // move to Admin Portal page
  await homePage.clickAdminPortalBtn()
  // check URL changes
  await expect(page).toHaveURL(/\/admin-box/)
  await page.waitForLoadState('domcontentloaded')
  // open Account Details
  await adminPortalPage.clickAccountDetailsBtn()
  await page.waitForLoadState('domcontentloaded')
  // check header name
  await adminPortalPage.pageHeader.waitFor()
  await expect(adminPortalPage.pageHeader).toContainText(adminPortalPage.accountDetailsHeaderText)
  // verify values on Account details
  await accountDetailsPage.verifyAccountDetails()
})