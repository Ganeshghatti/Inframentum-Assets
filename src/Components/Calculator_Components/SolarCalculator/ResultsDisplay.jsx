export default function ResultsDisplay({ results }) {
  const resultItems = [
    { label: "Number of Panels", value: Math.round(results.numberofPanels).toLocaleString() },
    { label: "Panel Cost", value: `₹${Math.round(results.panelCost).toLocaleString()}` },
    { label: "Number of Inverters", value: Math.round(results.numberofInverters).toLocaleString() },
    { label: "Inverter Cost", value: `₹${Math.round(results.inverterCost).toLocaleString()}` },
    { label: "Annual Energy Production", value: `${Math.round(results.annualEnergyProduction).toLocaleString()} kWh` },
    { label: "Annual Revenue", value: `₹${Math.round(results.annualRevenue).toLocaleString()}` },
    { label: "Total Project Cost", value: `₹${Math.round(results.totalProjectCost).toLocaleString()}` },
    { label: "Debt Amount", value: `₹${Math.round(results.debt).toLocaleString()}` },
    { label: "Equity Required", value: `₹${Math.round(results.equity).toLocaleString()}` },
    { label: "Annual Debt Repayment", value: `₹${Math.round(results.annualDebtRepayment).toLocaleString()}` },
    { label: "Payback Period", value: `${results.paybackPeriod} years` },
    { label: "Return on Investment (ROI)", value: `${results.roi}%` },
    { label: "Net Present Value (NPV)", value: `₹${results.npv}` },
  ];

  return (
    <div className="bg-slate-50 p-6 rounded-lg space-y-6">
      <h2 className="text-2xl font-bold">Calculation Results</h2>
      <div className="grid gap-4">
        {resultItems.map((item, index) => (
          <div 
            key={index}
            className="flex justify-between items-center border-b border-slate-200 py-2"
          >
            <span className="text-slate-600">{item.label}</span>
            <span className="font-semibold">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
