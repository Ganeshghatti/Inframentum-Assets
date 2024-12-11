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
import Cal_Result_Sheet from "../Cal_Sheet";
import SolarViabilityCalculator from './SolarViabilityCalculator';

const formSchema = z.object({
  systemCapacity: z.string().refine((val) => parseFloat(val) > 0, {
    message: "System capacity must be positive",
  }),
  sunlightHours: z
    .string()
    .refine((val) => parseFloat(val) > 0 && parseFloat(val) <= 24, {
      message: "Sunlight hours must be between 0 and 24",
    }),
  efficiency: z
    .string()
    .refine((val) => parseFloat(val) >= 0 && parseFloat(val) <= 100, {
      message: "Efficiency must be between 0% and 100%",
    }),
  panelWattage: z
    .string()
    .refine((val) => parseFloat(val) > 0, {
      message: "Panel wattage must be positive",
    }),
  costPerPanel: z
    .string()
    .refine((val) => parseFloat(val) > 0, {
      message: "Cost per panel must be positive",
    }),
  costPerInverter: z
    .string()
    .refine((val) => parseFloat(val) > 0, {
      message: "Cost per inverter must be positive",
    }),
  invertersPerMw: z
    .string()
    .refine((val) => parseFloat(val) > 0, {
      message: "Inverters per MW must be positive",
    }),
  salePriceOfPower: z
    .string()
    .refine((val) => parseFloat(val) > 0, {
      message: "Sale price of power must be positive",
    }),
  installCost: z
    .string()
    .refine((val) => parseFloat(val) > 0, {
      message: "Installation cost must be positive",
    }),
  omCost: z
    .string()
    .refine((val) => parseFloat(val) >= 0, {
      message: "O&M cost must be non-negative",
    }),
  electricityTariff: z
    .string()
    .refine((val) => parseFloat(val) > 0, {
      message: "Electricity tariff must be positive",
    }),
  annualConsumption: z
    .string()
    .refine((val) => parseFloat(val) > 0, {
      message: "Annual consumption must be positive",
    }),
  projectLifetime: z
    .string()
    .refine((val) => parseInt(val) > 0, {
      message: "Project lifetime must be positive",
    }),
  debtToEquity: z
    .string()
    .refine((val) => parseFloat(val) >= 0, {
      message: "Debt-to-equity ratio must be non-negative",
    }),
  interestRate: z
    .string()
    .refine((val) => parseFloat(val) >= 0, {
      message: "Interest rate must be non-negative",
    }),
  loanTenure: z
    .string()
    .refine((val) => parseInt(val) > 0, {
      message: "Loan tenure must be positive",
    }),
  currencyConversionRate: z
    .string()
    .refine((val) => parseFloat(val) > 0, {
      message: "Currency conversion rate must be positive",
    }),
  incentives: z
    .string()
    .refine((val) => parseFloat(val) >= 0, {
      message: "Incentives must be non-negative",
    }),
});

const formFields = [
  { name: "systemCapacity", label: "System Capacity (kW)", placeholder: "1000" },
  { name: "sunlightHours", label: "Average Sunlight Hours (per day)", placeholder: "14" },
  { name: "efficiency", label: "Panel Efficiency (%)", placeholder: "22.5" },
  { name: "panelWattage", label: "Wattage of Each Solar Panel (W)", placeholder: "550" },
  { name: "costPerPanel", label: "Cost per Panel (₹)", placeholder: "35750" },
  { name: "costPerInverter", label: "Cost per Inverter (₹)", placeholder: "200000" },
  { name: "invertersPerMw", label: "Inverters Required per MW", placeholder: "4" },
  { name: "salePriceOfPower", label: "Sale Price of Power (₹/kWh)", placeholder: "4.5" },
  { name: "installCost", label: "Total Installation Cost (₹)", placeholder: "16000000" },
  { name: "omCost", label: "Annual O&M Cost (₹)", placeholder: "550000" },
  { name: "electricityTariff", label: "Electricity Tariff (₹/kWh)", placeholder: "9.2" },
  { name: "annualConsumption", label: "Annual Electricity Consumption (kWh)", placeholder: "1500000" },
  { name: "projectLifetime", label: "Project Lifetime (years)", placeholder: "25" },
  { name: "debtToEquity", label: "Debt-to-Equity Ratio", placeholder: "2.33" },
  { name: "interestRate", label: "Loan Interest Rate (%)", placeholder: "10" },
  { name: "loanTenure", label: "Loan Tenure (years)", placeholder: "10" },
  { name: "currencyConversionRate", label: "Currency Conversion Rate", placeholder: "1" },
  { name: "incentives", label: "Incentives/Subsidies (₹)", placeholder: "0" },
];

export default function SolarCalculator() {
  const [results, setResults] = useState(null);
  const [open, setOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      systemCapacity: "",
      sunlightHours: "",
      efficiency: "",
      panelWattage: "",
      costPerPanel: "",
      costPerInverter: "",
      invertersPerMw: "",
      salePriceOfPower: "",
      installCost: "",
      omCost: "",
      electricityTariff: "",
      annualConsumption: "",
      projectLifetime: "",
      debtToEquity: "",
      interestRate: "",
      loanTenure: "",
      currencyConversionRate: "",
      incentives: "",
    },
  });

  function calculateResults(values) {
    const calculator = new SolarViabilityCalculator(
      parseFloat(values.systemCapacity),
      parseFloat(values.sunlightHours),
      parseFloat(values.efficiency),
      parseFloat(values.panelWattage),
      parseFloat(values.costPerPanel),
      parseFloat(values.costPerInverter),
      parseFloat(values.invertersPerMw),
      parseFloat(values.salePriceOfPower),
      parseFloat(values.installCost),
      parseFloat(values.omCost),
      parseFloat(values.electricityTariff),
      parseFloat(values.annualConsumption),
      parseInt(values.projectLifetime),
      parseFloat(values.debtToEquity),
      parseFloat(values.interestRate),
      parseInt(values.loanTenure),
      parseFloat(values.currencyConversionRate),
      parseFloat(values.incentives)
    );

    const results = {
      numberofPanels: calculator.numberOfPanels(),
      panelCost: calculator.panelCost(),
      numberofInverters: calculator.numberOfInverters(),
      inverterCost: calculator.inverterCost(),
      annualEnergyProduction: calculator.annualEnergyProduction(),
      annualRevenue: calculator.annualRevenue(),
      totalProjectCost: calculator.totalProjectCost(),
      debt: calculator.debtEquitySplit().debt,
      equity: calculator.debtEquitySplit().equity,
      annualDebtRepayment: calculator.annualDebtRepayment(),
      paybackPeriod: calculator.paybackPeriod(),
      roi: calculator.calculateROI(),
      npv: calculator.calculateNPV(),
    };

    setResults(results);
    setOpen(true);
  }

  function onSubmit(values) {
    calculateResults(values);
  }

  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            {formFields.map((field) => (
              <FormItem key={field.name}>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={field.placeholder}
                    {...form.register(field.name)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            ))}
          </div>
          <Button type="submit" className="w-full">Calculate</Button>
        </form>
      </Form>
      <Cal_Result_Sheet open={open} setOpen={setOpen} results={results} />
    </div>
  );
}
