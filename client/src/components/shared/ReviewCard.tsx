interface ReviewCardProps {
  rating: number;
  text: string;
  author: string;
  location: string;
  initials: string;
}

export function ReviewCard({ rating, text, author, location, initials }: ReviewCardProps) {
  // Generate star rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="ri-star-fill"></i>);
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<i key="half" className="ri-star-half-fill"></i>);
    }
    
    // Add empty stars to complete 5 stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="ri-star-line"></i>);
    }
    
    return stars;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md min-w-[300px] md:min-w-[350px] flex-shrink-0">
      <div className="flex items-center mb-4">
        <div className="text-yellow-400 flex">
          {renderStars()}
        </div>
        <span className="ml-2 text-[#666666] text-sm">{rating.toFixed(1)}</span>
      </div>
      <p className="text-[#666666] mb-4">"{text}"</p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
          {initials}
        </div>
        <div className="ml-3">
          <p className="font-bold text-primary">{author}</p>
          <p className="text-sm text-[#666666]">{location}</p>
        </div>
      </div>
    </div>
  );
}
