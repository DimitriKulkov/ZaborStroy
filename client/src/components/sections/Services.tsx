import { ServiceCard } from "@/components/shared/ServiceCard";
import { fences, canopies, gates } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-2">Наши услуги</h2>
          <p className="text-textgray max-w-2xl mx-auto">
            Мы предлагаем полный спектр услуг по установке заборов, навесов и ворот для частных домов и коммерческих объектов
          </p>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Заборы</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fences.map((fence) => (
              <ServiceCard 
                key={fence.id}
                title={fence.title}
                description={fence.description}
                price={fence.price}
                image={fence.image}
                serviceType={fence.id}
              />
            ))}
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Навесы</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {canopies.map((canopy) => (
              <ServiceCard 
                key={canopy.id}
                title={canopy.title}
                description={canopy.description}
                price={canopy.price}
                image={canopy.image}
                serviceType={canopy.id}
              />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Ворота</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gates.map((gate) => (
              <ServiceCard 
                key={gate.id}
                title={gate.title}
                description={gate.description}
                price={gate.price}
                image={gate.image}
                serviceType={gate.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
