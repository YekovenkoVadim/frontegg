export class HomePage {
  constructor(page) {
    this.page = page

    this.adminPortalBtn = page.getByRole('button', { name: 'Open admin portal' })
  }

  clickAdminPortalBtn = async () => {
    await this.adminPortalBtn.waitFor()
    await this.adminPortalBtn.click()
  }

}