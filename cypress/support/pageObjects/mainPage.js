import { mainPageSelectors } from "../../fixtures/selectors.cy";

class MainPage {
  getContactButton() {
    return cy.get(mainPageSelectors.contactButton);
  }

  getSpecificContactButton() {
    return cy
      .get(mainPageSelectors.contactButton)
      .contains("Get in touch")
      .first();
  }

  clickContactButton() {
    this.getSpecificContactButton().click();
    return this;
  }
}

export default MainPage;
