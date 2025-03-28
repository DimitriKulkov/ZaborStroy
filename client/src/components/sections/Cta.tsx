interface CtaProps {
  onOpenMeasurement: () => void;
}

export function Cta({ onOpenMeasurement }: CtaProps) {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Готовы установить качественный забор?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Закажите бесплатный замер прямо сейчас и получите консультацию специалиста
        </p>
        <div className="flex justify-center">
          <button 
            className="bg-white text-primary font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-opacity-90 transition-all inline-flex items-center"
            onClick={onOpenMeasurement}
          >
            <i className="ri-ruler-line mr-2"></i>Бесплатный замер
          </button>
        </div>
      </div>
    </section>
  );
}
