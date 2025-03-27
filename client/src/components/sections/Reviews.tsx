import { useState } from "react";
import { ReviewCard } from "@/components/shared/ReviewCard";
import { reviews } from "@/lib/data";

interface ReviewsProps {
  onOpenReviewForm: () => void;
}

export function Reviews({ onOpenReviewForm }: ReviewsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerView = 3;
  const totalSlides = Math.ceil(reviews.length / reviewsPerView);

  const slidePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const slideNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  // Calculate visible reviews based on current index
  const visibleReviews = () => {
    const startIndex = currentIndex * reviewsPerView;
    return reviews.slice(startIndex, startIndex + reviewsPerView);
  };

  return (
    <section id="reviews" className="py-16 bg-[#F5E6D3]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-2">Отзывы клиентов</h2>
          <p className="text-[#666666] max-w-2xl mx-auto">Что говорят о нас наши клиенты</p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex space-x-6 transition-transform duration-300"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {visibleReviews().map((review, index) => (
                <ReviewCard 
                  key={index}
                  rating={review.rating}
                  text={review.text}
                  author={review.author}
                  location={review.location}
                  initials={review.initials}
                />
              ))}
            </div>
          </div>
          
          <button 
            className="absolute top-1/2 -translate-y-1/2 -left-3 md:left-0 bg-white rounded-full w-10 h-10 shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors z-10"
            onClick={slidePrev}
          >
            <i className="ri-arrow-left-s-line"></i>
          </button>
          
          <button 
            className="absolute top-1/2 -translate-y-1/2 -right-3 md:right-0 bg-white rounded-full w-10 h-10 shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors z-10"
            onClick={slideNext}
          >
            <i className="ri-arrow-right-s-line"></i>
          </button>
        </div>
        
        <div className="mt-10 text-center">
          <button 
            className="border-2 border-primary text-primary font-bold py-3 px-8 rounded-lg hover:bg-primary hover:text-white transition-all inline-flex items-center"
            onClick={onOpenReviewForm}
          >
            <i className="ri-chat-smile-line mr-2"></i>Оставить отзыв
          </button>
        </div>
      </div>
    </section>
  );
}
