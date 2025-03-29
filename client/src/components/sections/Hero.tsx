import fenceWithGate from "../../assets/fence-with-gate.svg";

interface HeroProps {
  onOpenMeasurement: () => void;
  onOpenCalculation: () => void;
}

export function Hero({ onOpenMeasurement, onOpenCalculation }: HeroProps) {
  return (
    <section className="relative bg-primary text-white">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 lg:w-1/2 mb-10 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Качественные заборы, навесы и ворота в Москве</h1>
            <p className="text-lg mb-8">Профессиональная установка от опытных мастеров с гарантией качества</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                className="bg-white text-primary font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-90 transition-all"
                onClick={onOpenMeasurement}
              >
                <i className="ri-ruler-line mr-2"></i>Бесплатный замер
              </button>
              <button 
                className="bg-transparent border-2 border-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-primary transition-all"
                onClick={onOpenCalculation}
              >
                <i className="ri-calculator-line mr-2"></i>Рассчитать стоимость
              </button>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-5/12">
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <img 
                src={fenceWithGate} 
                alt="Красивый забор с воротами" 
                className="w-full object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1533873568950-8c2def8eb85c?ixlib=rb-1.2.1&auto=format&fit=crop&q=80")' }}
      ></div>
    </section>
  );
}
