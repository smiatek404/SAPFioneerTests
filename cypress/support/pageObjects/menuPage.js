import { menuSelectors } from "../../fixtures/selectors.cy";

class MenuPage {
  getFinanceAndESG() {
    return cy.get(menuSelectors.financeAndESG);
  }

  hoverFinanceAndESG() {
    this.getFinanceAndESG()
      .trigger("mouseover")
      .trigger("mousemove")
      .trigger("mouseover");
    return this;
  }

  getESGKPIEngine() {
    return cy.get(menuSelectors.financeAndESG).contains("ESG KPI Engine");
  }

  clickESGKPIEngine() {
    this.getESGKPIEngine().click();
    return this;
  }
}

export default MenuPage;
