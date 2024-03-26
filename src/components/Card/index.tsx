import React, { useEffect, useState } from 'react';
import {FastAverageColor } from 'fast-average-color';

interface CardProps {
 title: string;
 subtitle: string;
 image?: string;
 episodesLength?: number
 seasons?: number
 year: number 
 onClick: (slug:string)=>void
}

export const Card = ({ title, subtitle, image , episodesLength , year, seasons, onClick}: CardProps) => {
  
  const [backgroundColor, setBackgroundColor] = useState('#282828'); // Cor padrão até a imagem ser carregada
const [textColor, setTextColor] = useState('text-black');

 useEffect(() => {
    const fac = new FastAverageColor();
    fac.getColorAsync(image, { algorithm: 'sqrt' })
      .then((color) => {
        setBackgroundColor(color.hex);
        const textColor = fac.getColorFromArray([color.hex], { algorithm: 'sqrt', mode: 'dark' });
        setTextColor(textColor.hex);
      })
      .catch((error) => console.error('Erro ao obter a cor predominante:', error));
 }, [image]);

  
 return (
    <div
    onClick={()=>onClick(title)}
    style={{
      backgroundColor: backgroundColor,
      
    }} 
    className=" p-4 text-left border-2 dark:border-0 rounded-xl flex flex-col mx-auto w-full"> {/* Ajuste aqui: w-full para ocupar 100% da largura */}
      <p
      style={{
        color: textColor 
      }}
      className="text-xl font-extrabold">{title}</p>
      <p className="font-medium text-sm text-gray-500 dark:text-gray-300">
        {subtitle}
      </p>
      <div className="flex-shrink-0 h-56 mt-2 shadow-2xl ">
        <img
          className="rounded-sm object-cover h-full w-full "
          src={
            image ||
            "https://static.wikia.nocookie.net/herois/images/7/7b/Three_Blind_Mice_%28Shrek%29.png/revision/latest/thumbnail/width/360/height/360?cb=20221206224341&path-prefix=pt-br"
          }
          alt="Descrição da imagem"
        />
      </div>

      <div className="flex">
        <p className="font-medium text-xs dark:text-gray-300 text-gray-500 mt-4">
          12345 visualizações 
        </p>
      </div>
    </div>
 );
};
