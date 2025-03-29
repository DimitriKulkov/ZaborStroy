import { Check } from "lucide-react";
import { awningInstallationSteps } from "@/lib/data";

interface AwningInstallationStepsProps {
  className?: string;
}

export function AwningInstallationSteps({ className }: AwningInstallationStepsProps) {
  return (
    <section id="awning-installation-steps" className={`py-16 ${className || ""}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">Этапы установки навеса</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Наша компания выполняет монтаж навесов по отработанной технологии,
            обеспечивающей надежность, долговечность и эстетичный внешний вид конструкции.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awningInstallationSteps.map((step) => (
            <div 
              key={step.id}
              className="bg-card rounded-lg p-6 border border-border transition-transform duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 text-primary mr-4 font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-primary/10 text-primary px-6 py-3 rounded-lg">
            <Check className="mr-2 h-5 w-5" />
            <span className="font-medium">Все работы выполняются с гарантией качества</span>
          </div>
        </div>
      </div>
    </section>
  );
}