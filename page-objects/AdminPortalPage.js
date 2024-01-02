export class AdminPortalPage {
  constructor(page) {
    this.page = page

    this.accountDetailsBtn = page.locator('[data-test-id="account"]')
    this.pageHeader = page.locator('[data-test-id="page-header-container"]')
    this.accountDetailsHeaderText = 'Account Details'
  }

  clickAccountDetailsBtn = async () => {
    await this.accountDetailsBtn.waitFor()
    await this.accountDetailsBtn.click()
  }

}