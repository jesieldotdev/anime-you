// src/components/CategoryScroll.tsx
import React from 'react';



interface CategoryScrollProps {
}

export const CategoryScroll: React.FC<CategoryScrollProps> = () => {
  const [selected, setSelected] = React.useState<number>(0)
  const categories = [
 {  name: 'Filmes' },
 { name: 'Isekai' },
 {  name: 'Jogos' },
 
 // Adicione mais categorias conforme necessário
].map((item,index) => ({id:index, ...item}))

function selectedClass(sel:number){
  if(sel === selected)return 'bg-zinc-200 text-black'
  else return 'bg-zinc-800 text-white'
}
  
 return (<div className="flex overflow-x-auto gap-2 w-screen ml-8 ">
      {categories.map((category) => (
        <div key={category.id} className="flex-shrink-0 ">
          <button 
          onClick={()=>setSelected(category.id)}
          className={`inline-block  text-sm font-semibold px-4 py-2 rounded-lg ${selectedClass(category.id)}` }>
            {category.name}
          </button>
        </div>
      ))}
    </div>
   
 );
};

export default CategoryScroll;
