interface PortfolioItemProps {
  image: string;
  title: string;
  location: string;
  onClick: () => void;
}

export function PortfolioItem({ image, title, location, onClick }: PortfolioItemProps) {
  return (
    <div 
      className="group relative rounded-lg overflow-hidden shadow-md cursor-pointer" 
      onClick={onClick}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" 
      />
      <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
          <i className="ri-zoom-in-line text-3xl mb-2"></i>
          <p className="font-bold">{title}</p>
          <p className="text-sm">{location}</p>
        </div>
      </div>
    </div>
  );
}
