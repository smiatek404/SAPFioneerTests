import { mainPageSelectors } from "../../fixtures/selectors.cy";

class MainPage {
  getContactButton() {
    return cy.contains("Get in touch");
  }

  getSpecificContactButton() {
    return cy.contains("Get in touch").first();
  }

  clickContactButton() {
    this.getSpecificContactButton().click();
    return this;
  }
}

export default MainPage;
