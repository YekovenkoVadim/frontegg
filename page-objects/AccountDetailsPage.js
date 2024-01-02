import { expect } from '@playwright/test'

export class AccountDetailsPage {
  constructor(page) {
    this.page = page

    this.companyNameValue = page.locator('[data-test-id="account-details-companyName-list-item"]')
    this.addressValue = page.locator('[data-test-id="account-details-address-list-item"]')
    this.websiteValue = page.locator('[data-test-id="account-details-website-list-item"]')
    this.timeZoneValue = page.locator('[data-test-id="account-details-timezone-list-item"]')
    this.currencyValue = page.locator('[data-test-id="account-details-currency-list-item"]')
    this.company = 'vadimchyek'
    this.address = 'Lesya Serduka str., Building 16, Kharkiv, Kharkiv region, 61184, Ukraine'
    this.website = 'http://localhost:3000'
    this.timezone = '(GMT+2:00) Helsinki, Kiev, Riga, Sofia, Tallinn, Vilnius'
    this.currency = 'EUR'
  }

  clickAccountDetailsBtn = async () => {
    await this.accountDetailsBtn.waitFor()
    await this.accountDetailsBtn.click()
  }

  verifyAccountDetails = async () => {
    await expect(this.companyNameValue).toContainText(this.company)
    await expect(this.addressValue).toContainText(this.address)
    await expect(this.websiteValue).toContainText(this.website)
    await expect(this.timeZoneValue).toContainText(this.timezone)
    await expect(this.currencyValue).toContainText(this.currency)
  }

}