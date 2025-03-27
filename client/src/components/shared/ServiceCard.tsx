import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  serviceType: string;
}

export function ServiceCard({ title, description, price, image, serviceType }: ServiceCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="service-card bg-[#F5E6D3] rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
      <img src={image} alt={title} className="w-full h-48 sm:h-56 object-cover" />
      <div className="p-6">
        <h4 className="text-xl font-bold text-primary mb-2">{title}</h4>
        <p className="mb-4 text-[#666666]">{description}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-primary">{price}</span>
          <button 
            className="text-primary hover:underline flex items-center"
            onClick={() => setShowDetails(true)}
          >
            Подробнее <i className="ri-arrow-right-line ml-1"></i>
          </button>
        </div>
      </div>

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="bg-white p-0 rounded-lg overflow-hidden max-w-2xl">
          <div>
            <img 
              src={image} 
              alt={title} 
              className="w-full h-60 object-cover"
            />
          </div>
          <div className="p-6">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-primary mb-2">{title}</DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              <p className="text-[#666666] mb-6">{description}</p>
              <div className="flex justify-between items-center">
                <p className="font-bold text-primary text-lg">{price}</p>
                <span className="text-[#666666] text-sm italic">*Окончательная стоимость зависит от сложности проекта</span>
              </div>
              <div className="mt-8 flex justify-center">
                <a 
                  href="#contact" 
                  className="bg-primary text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-90 transition-all inline-flex items-center"
                  onClick={() => setShowDetails(false)}
                >
                  <i className="ri-calculator-line mr-2"></i>Рассчитать стоимость
                </a>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
