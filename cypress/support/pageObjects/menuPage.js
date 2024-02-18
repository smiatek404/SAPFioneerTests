import { menuSelectors } from "../../fixtures/selectors.cy";

class MenuPage {
  getFinanceAndESG() {
    return cy.get(menuSelectors.financeAndESG);
  }

  getKPI() {
    return cy.get(menuSelectors.KPI);
  }

  hoverFinanceAndESG() {
    this.getFinanceAndESG().trigger("mouseover").trigger("mousemove");
    return this;
  }

  clickKPIEngine() {
    this.getKPI().contains("ESG KPI Engine").click();
    return this;
  }
}

export default MenuPage;
