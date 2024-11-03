import SolarCalculator from "@/Components/Calculator_Components/SolarCalculator";

export default function Calculator() {
  return (
    <section className="container mx-auto py-10 px-5">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Solar Viability Calculator</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Calculate the financial viability of your solar power project including ROI, payback period, and NPV
          </p>
        </div>
        <SolarCalculator />
      </div>
    </section>
  );
} 