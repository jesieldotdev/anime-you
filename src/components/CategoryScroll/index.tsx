// src/components/CategoryScroll.tsx
import React from 'react';

interface Category {
 id: number;
 name: string;
}

interface CategoryScrollProps {
 categories: Category[];
}

export const CategoryScroll: React.FC<CategoryScrollProps> = () => {
  const categories = [
 { id: 1, name: 'Filmes' },
 { id: 2, name: 'Isekai' },
 { id: 3, name: 'Jogos' },
 // Adicione mais categorias conforme necessário
];
  
 return (
    <div className="flex overflow-x-scroll scrollbar-hide ">
      {categories.map((category) => (
        <div key={category.id} className="flex-shrink-0 mr-2">
          <span className="inline-block bg-zinc-800 text-white text-sm font-semibold px-4 py-2 rounded-lg ">
            {category.name}
          </span>
        </div>
      ))}
    </div>
 );
};

export default CategoryScroll;
