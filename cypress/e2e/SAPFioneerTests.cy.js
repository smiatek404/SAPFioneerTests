import MainPage from "../support/pageObjects/mainPage";
import MenuPage from "../support/pageObjects/menuPage";
import ContactPage from "../support/pageObjects/contactPage";
const mainPage = new MainPage();
const menuPage = new MenuPage();
const contactPage = new ContactPage();
const colorRGBYellow = "rgb(255, 212, 60)";

describe("SAP Fioneers page", () => {
  beforeEach(() => {
    cy.on("uncaught:exception", () => {
      return false;
    });
    cy.visit("/");
  });

  it("verifies proper contact button colour", () => {
    mainPage
      .getContactButton()
      .should("have.css", "background-color", colorRGBYellow);
  });

  it("hovers over the Finance & ESG bookmark, clicks at ESG KPI Engine field and verifies url", () => {
    menuPage.hoverFinanceAndESG().clickESGKPIEngine();
    cy.url("eq", "https://www.sapfioneer.com/finance-esg/esg-kpi-engine/");
  });

  it("searches for contact button and verifies url, passes wrong email and checks validation message", () => {
    mainPage.clickContactButton();
    cy.url("eq", "https://www.sapfioneer.com/contact/");
    contactPage.clickAndTypeEmail("4356");
    contactPage
      .getEmailError()
      .should("contain", "Email must be formatted correctly.");
  });
});
