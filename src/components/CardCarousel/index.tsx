// src/components/CardCarousel.tsx
import React, { useState } from 'react';

interface Card {
 title: string;
 description: string;
 image: string;
}

interface CardCarouselProps {
 cards: Card[];
}

const CardCarousel: React.FC<CardCarouselProps> = ({ cards }) => {
 const [currentIndex, setCurrentIndex] = useState(0);

 const nextCard = () => {
    setCurrentIndex((currentIndex + 1) % cards.length);
 };

 const prevCard = () => {
    setCurrentIndex((currentIndex - 1 + cards.length) % cards.length);
 };

 return (
    <div className="relative">
      <button onClick={prevCard} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
        Anterior
      </button>
      <button onClick={nextCard} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
        Próximo
      </button>
      <div className="flex overflow-x-scroll scrollbar-hide transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {cards.map((card, index) => (
          <div key={index} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3">
            <div className="shadow-lg rounded-lg p-4">
              <img className="h-48 w-full object-cover mb-4 rounded" src={card.image} alt={card.title} />
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p className="">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
 );
};

export default CardCarousel;
