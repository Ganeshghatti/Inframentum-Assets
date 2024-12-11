class SolarViabilityCalculator {
  constructor(
    systemCapacity,
    sunlightHours,
    efficiency,
    panelWattage,
    costPerPanel,
    costPerInverter,
    invertersPerMw,
    salePriceOfPower,
    installCost,
    omCost,
    electricityTariff,
    annualConsumption,
    projectLifetime,
    debtToEquity,
    interestRate,
    loanTenure,
    currencyConversionRate = 1,
    degradationRate = 0.005,
    discountRate = 0.07,
    incentives = 0
  ) {
    this.systemCapacity = parseFloat(systemCapacity);
    this.sunlightHours = parseFloat(sunlightHours);
    this.efficiency = parseFloat(efficiency);
    this.panelWattage = parseFloat(panelWattage);
    this.costPerPanel = parseFloat(costPerPanel) * currencyConversionRate;
    this.costPerInverter = parseFloat(costPerInverter) * currencyConversionRate;
    this.invertersPerMw = parseFloat(invertersPerMw);
    this.salePriceOfPower = parseFloat(salePriceOfPower) * currencyConversionRate;
    this.installCost = (parseFloat(installCost) - parseFloat(incentives)) * currencyConversionRate;
    this.omCost = parseFloat(omCost) * currencyConversionRate;
    this.electricityTariff = parseFloat(electricityTariff) * currencyConversionRate;
    this.annualConsumption = parseFloat(annualConsumption);
    this.projectLifetime = parseInt(projectLifetime);
    this.debtToEquity = parseFloat(debtToEquity);
    this.interestRate = parseFloat(interestRate) / 100;
    this.loanTenure = parseInt(loanTenure);
    this.currencyConversionRate = parseFloat(currencyConversionRate);
    this.degradationRate = degradationRate;
    this.discountRate = discountRate;
  }

  numberOfPanels() {
    return (this.systemCapacity * 1000) / this.panelWattage;
  }

  panelCost() {
    return this.numberOfPanels() * this.costPerPanel;
  }

  numberOfInverters() {
    return (this.systemCapacity / 1000) * this.invertersPerMw;
  }

  inverterCost() {
    return this.numberOfInverters() * this.costPerInverter;
  }

  annualEnergyProduction() {
    return this.systemCapacity * this.sunlightHours * 365 * (this.efficiency / 100);
  }

  annualRevenue() {
    return this.annualEnergyProduction() * this.salePriceOfPower;
  }

  totalProjectCost() {
    return this.panelCost() + this.inverterCost() + this.installCost;
  }

  debtEquitySplit() {
    const totalCost = this.totalProjectCost();
    const debt = totalCost * (this.debtToEquity / (1 + this.debtToEquity));
    return { debt, equity: totalCost - debt };
  }

  annualDebtRepayment() {
    const { debt } = this.debtEquitySplit();
    const numerator = debt * this.interestRate;
    const denominator = 1 - Math.pow(1 + this.interestRate, -this.loanTenure);
    return numerator / denominator;
  }

  paybackPeriod() {
    return this.totalProjectCost() / this.annualRevenue();
  }

  calculateROI() {
    let totalRevenue = 0;
    for (let year = 0; year < this.projectLifetime; year++) {
      totalRevenue += this.annualRevenue() * Math.pow(1 - this.degradationRate, year);
    }
    return ((totalRevenue - this.totalProjectCost()) / this.totalProjectCost()) * 100;
  }

  calculateNPV() {
    let npv = -this.totalProjectCost();
    for (let year = 1; year <= this.projectLifetime; year++) {
      const annualRevenue = this.annualRevenue() * Math.pow(1 - this.degradationRate, year);
      npv += annualRevenue / Math.pow(1 + this.discountRate, year);
    }
    return npv;
  }
}

export default SolarViabilityCalculator;
