export default function ResultsDisplay({ results }) {
  const resultItems = [
    {
      label: "Number of Panels",
      value: Math.round(results.numberofPanels).toLocaleString(),
    },
    {
      label: "Panel Cost",
      value: `₹${Math.round(results.panelCost).toLocaleString()}`,
    },
    {
      label: "Number of Inverters",
      value: Math.round(results.numberofInverters).toLocaleString(),
    },
    {
      label: "Inverter Cost",
      value: `₹${Math.round(results.inverterCost).toLocaleString()}`,
    },
    {
      label: "Annual Energy Production",
      value: `${Math.round(
        results.annualEnergyProduction
      ).toLocaleString()} kWh`,
    },
    {
      label: "Annual Revenue",
      value: `₹${Math.round(results.annualRevenue).toLocaleString()}`,
    },
    {
      label: "Total Project Cost",
      value: `₹${Math.round(results.totalProjectCost).toLocaleString()}`,
    },
    {
      label: "Debt Amount",
      value: `₹${Math.round(results.debt).toLocaleString()}`,
    },
    {
      label: "Equity Required",
      value: `₹${Math.round(results.equity).toLocaleString()}`,
    },
    {
      label: "Annual Debt Repayment",
      value: `₹${Math.round(results.annualDebtRepayment).toLocaleString()}`,
    },
    { label: "Payback Period", value: `${results.paybackPeriod} years` },
    { label: "Return on Investment (ROI)", value: `${results.roi}%` },
    { label: "Net Present Value (NPV)", value: `₹${results.npv}` },
  ];

  return (
    <div className="bg-bgShade p-6 rounded-lg space-y-6 border border-secondaryColor/20 shadow-2xl shadow-secondaryColor/10">
      <h2 className="max-lg:text-xl text-2xl  text-center font-bold">
        Calculation Results
      </h2>
      <div className="grid gap-4">
        {resultItems.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b border-slate-200 py-2"
          >
            <span className="text-slate-600 max-lg:text-sm text-base">
              {item.label}
            </span>
            <span className="font-semibold max-lg:text-sm text-base">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
