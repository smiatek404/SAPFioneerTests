import { contactPageSelectors } from "../../fixtures/selectors.cy";

class ContactPage {
  getEmailField() {
    return cy
      .get('[id="hs-form-iframe-0"]')
      .its("0.contentDocument.body")
      .then(cy.wrap)
      .find(contactPageSelectors.email);
  }

  getEmailError() {
    return cy
      .get('[id="hs-form-iframe-0"]')
      .its("0.contentDocument.body")
      .then(cy.wrap)
      .find(contactPageSelectors.formContent);
  }

  clickAndTypeEmail(email) {
    this.getEmailField().click().type(email);
    return this;
  }
}

export default ContactPage;
