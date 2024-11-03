import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ui/form";
import ResultsDisplay from "./ResultsDisplay";

const formSchema = z.object({
  systemCapacity: z.number().positive("System capacity must be positive"),
  sunlightHours: z.number().positive().max(24, "Sunlight hours cannot exceed 24"),
  efficiency: z.number().positive().max(100, "Efficiency cannot exceed 100%"),
  panelWattage: z.number().positive(),
  costPerPanel: z.number().positive(),
  costPerInverter: z.number().positive(),
  invertersPerMw: z.number().positive(),
  salePriceOfPower: z.number().positive(),
  installCost: z.number().positive(),
  omCost: z.number().positive(),
  electricityTariff: z.number().positive(),
  annualConsumption: z.number().positive(),
  projectLifetime: z.number().int().positive(),
  debtToEquity: z.number().positive(),
  interestRate: z.number().positive().max(100),
  loanTenure: z.number().int().positive(),
  currencyConversionRate: z.number().positive(),
  incentives: z.number().nonnegative(),
});

const formFields = [
  { name: "systemCapacity", label: "System Capacity (kW)", placeholder: "Enter system capacity" },
  { name: "sunlightHours", label: "Average Sunlight Hours per Day", placeholder: "Enter sunlight hours" },
  { name: "efficiency", label: "Panel Efficiency (%)", placeholder: "Enter efficiency percentage" },
  { name: "panelWattage", label: "Panel Wattage (W)", placeholder: "Enter panel wattage" },
  { name: "costPerPanel", label: "Cost per Panel (₹)", placeholder: "Enter cost per panel" },
  { name: "costPerInverter", label: "Cost per Inverter (₹)", placeholder: "Enter cost per inverter" },
  { name: "invertersPerMw", label: "Inverters per MW", placeholder: "Enter inverters per MW" },
  { name: "salePriceOfPower", label: "Sale Price of Power (₹/kWh)", placeholder: "Enter sale price" },
  { name: "installCost", label: "Installation Cost (₹)", placeholder: "Enter installation cost" },
  { name: "omCost", label: "Annual O&M Cost (₹)", placeholder: "Enter O&M cost" },
  { name: "electricityTariff", label: "Electricity Tariff (₹/kWh)", placeholder: "Enter tariff" },
  { name: "annualConsumption", label: "Annual Consumption (kWh)", placeholder: "Enter consumption" },
  { name: "projectLifetime", label: "Project Lifetime (years)", placeholder: "Enter lifetime" },
  { name: "debtToEquity", label: "Debt to Equity Ratio", placeholder: "Enter ratio" },
  { name: "interestRate", label: "Interest Rate (%)", placeholder: "Enter interest rate" },
  { name: "loanTenure", label: "Loan Tenure (years)", placeholder: "Enter loan tenure" },
  { name: "currencyConversionRate", label: "Currency Conversion Rate", placeholder: "Enter rate" },
  { name: "incentives", label: "Incentives/Subsidies (₹)", placeholder: "Enter incentives" },
];

export default function SolarCalculator() {
  const [results, setResults] = useState(null);
  
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: formFields.reduce((acc, field) => ({
      ...acc,
      [field.name]: 0,
    }), {}),
  });

  function calculateResults(values) {
    const {
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
      projectLifetime,
      debtToEquity,
      interestRate,
      loanTenure,
      degradationRate = 0.005,
      discountRate = 0.07,
    } = values;

    // Basic calculations
    const numberofPanels = Math.floor((systemCapacity * 1000) / panelWattage);
    const panelCost = numberofPanels * costPerPanel;
    const numberofInverters = (systemCapacity / 1000) * invertersPerMw;
    const inverterCost = numberofInverters * costPerInverter;
    const annualEnergyProduction = systemCapacity * sunlightHours * 365 * (efficiency / 100);
    const annualRevenue = annualEnergyProduction * salePriceOfPower;
    const totalProjectCost = panelCost + inverterCost + installCost;

    // Financial calculations
    const debt = totalProjectCost * (debtToEquity / (1 + debtToEquity));
    const equity = totalProjectCost - debt;
    const interestRateDecimal = interestRate / 100;
    const annualDebtRepayment = (debt * interestRateDecimal) / (1 - Math.pow(1 + interestRateDecimal, -loanTenure));
    const paybackPeriod = totalProjectCost / annualRevenue;

    // ROI Calculation
    const totalRevenue = Array.from({ length: projectLifetime }, (_, year) => 
      annualRevenue * Math.pow(1 - degradationRate, year)
    ).reduce((sum, revenue) => sum + revenue, 0);
    
    const roi = ((totalRevenue - totalProjectCost) / totalProjectCost) * 100;

    // NPV Calculation
    const npv = -totalProjectCost + Array.from({ length: projectLifetime }, (_, year) => 
      (annualRevenue * Math.pow(1 - degradationRate, year)) / Math.pow(1 + discountRate, year + 1)
    ).reduce((sum, value) => sum + value, 0);

    return {
      numberofPanels,
      panelCost,
      numberofInverters,
      inverterCost,
      annualEnergyProduction,
      annualRevenue,
      totalProjectCost,
      debt,
      equity,
      annualDebtRepayment,
      paybackPeriod: paybackPeriod.toFixed(2),
      roi: roi.toFixed(2),
      npv: npv.toFixed(2),
    };
  }

  function onSubmit(values) {
    const results = calculateResults(values);
    setResults(results);
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            {formFields.map((field) => (
              <FormField
                key={field.name}
                control={form.control}
                name={field.name}
                render={({ field: formField }) => (
                  <FormItem>
                    <FormLabel>{field.label}</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        placeholder={field.placeholder}
                        {...formField}
                        onChange={(e) => formField.onChange(parseFloat(e.target.value) || 0)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>
          
          <Button type="submit" className="w-full">Calculate Viability</Button>
        </form>
      </Form>

      {results && <ResultsDisplay results={results} />}
    </div>
  );
} 