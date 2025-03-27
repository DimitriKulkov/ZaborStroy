import { useState } from "react";
import { PortfolioItem } from "@/components/shared/PortfolioItem";
import { portfolioItems } from "@/lib/data";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [openGallery, setOpenGallery] = useState(false);

  const openPortfolioDetail = (index: number) => {
    setSelectedItem(index);
  };

  const closePortfolioDetail = () => {
    setSelectedItem(null);
  };

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-2">Наши работы</h2>
          <p className="text-[#666666] max-w-2xl mx-auto">
            Примеры реализованных проектов заборов, навесов и ворот
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.slice(0, openGallery ? portfolioItems.length : 6).map((item, index) => (
            <PortfolioItem 
              key={index}
              image={item.image} 
              title={item.title} 
              location={item.location}
              onClick={() => openPortfolioDetail(index)}
            />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <button 
            className="bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-opacity-90 transition-all inline-flex items-center"
            onClick={() => setOpenGallery(!openGallery)}
          >
            <i className="ri-gallery-line mr-2"></i>
            {openGallery ? "Скрыть" : "Смотреть все работы"}
          </button>
        </div>
      </div>

      {/* Portfolio Detail Modal */}
      {selectedItem !== null && (
        <Dialog open={selectedItem !== null} onOpenChange={() => closePortfolioDetail()}>
          <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden bg-white rounded-lg">
            <div className="relative">
              <img 
                src={portfolioItems[selectedItem].image} 
                alt={portfolioItems[selectedItem].title} 
                className="w-full h-auto max-h-[500px] object-cover"
              />
              <div className="absolute top-2 right-2">
                <button 
                  onClick={closePortfolioDetail}
                  className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-[#666666] hover:text-primary"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-2">{portfolioItems[selectedItem].title}</h3>
              <p className="text-[#666666] mb-4">{portfolioItems[selectedItem].location}</p>
              <p className="text-[#666666]">{portfolioItems[selectedItem].description}</p>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
