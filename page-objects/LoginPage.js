export class LoginPage {
  constructor(page) {
    this.page = page

    this.emailNumberField = page.locator('[data-test-id="input-identifier"]')
    this.passwordField = page.locator('[data-test-id="input-password"]')
    this.continueBtn = page.locator('[data-test-id="submit-btn"]')
    this.signInBtn = page.locator('[data-test-id="submit-btn"]')
  }

  signInWithPassword = async (user, pass) => {
    await this.emailNumberField.waitFor()
    await this.emailNumberField.click()
    await this.emailNumberField.clear()
    await this.emailNumberField.fill(user)
    await this.continueBtn.click()
    await this.passwordField.isHidden()
    await this.passwordField.waitFor()
    await this.passwordField.click()
    await this.passwordField.fill(pass)
    await this.signInBtn.waitFor()
    await this.signInBtn.click()
  }

}