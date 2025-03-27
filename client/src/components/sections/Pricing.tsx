import { prices } from "@/lib/data";

interface PricingProps {
  onOpenCalculation: () => void;
}

export function Pricing({ onOpenCalculation }: PricingProps) {
  return (
    <section id="prices" className="py-16 bg-[#F5E6D3]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-2">Прайс-лист</h2>
          <p className="text-[#666666] max-w-2xl mx-auto">
            Наши цены на установку заборов, навесов и ворот. Окончательная стоимость зависит от сложности проекта.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="py-4 px-6 text-left">Услуга</th>
                  <th className="py-4 px-6 text-left">Стоимость</th>
                  <th className="py-4 px-6 text-left">Примечание</th>
                </tr>
              </thead>
              <tbody>
                {prices.map((price, index) => (
                  <tr key={index} className="border-b border-[#D3D3D3] hover:bg-[#F5E6D3] transition-colors">
                    <td className="py-4 px-6">{price.service}</td>
                    <td className="py-4 px-6 font-bold">{price.price}</td>
                    <td className="py-4 px-6">{price.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="text-center mt-8 text-[#666666] italic">
          Окончательная стоимость зависит от сложности проекта, особенностей участка и используемых материалов.
          <span className="block mt-2 font-bold text-primary">Бесплатный выезд на замер!</span>
        </div>
        
        <div className="mt-10 text-center">
          <button 
            className="bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-opacity-90 transition-all inline-flex items-center"
            onClick={onOpenCalculation}
          >
            <i className="ri-calculator-line mr-2"></i>Рассчитать точную стоимость
          </button>
        </div>
      </div>
    </section>
  );
}
