// src/components/ImageWithBackground.tsx
import React, { useEffect, useState } from 'react';
import {FastAverageColor } from 'fast-average-color';

interface ImageWithBackgroundProps {
 src: string;
}

const ImageWithBackground: React.FC<ImageWithBackgroundProps> = ({ src }) => {
 const [backgroundColor, setBackgroundColor] = useState('bg-white'); // Cor padrão até a imagem ser carregada

 useEffect(() => {
    const fac = new FastAverageColor();
    fac.getColorAsync(src, { algorithm: 'sqrt' })
      .then((color) => {
        setBackgroundColor(color.hex);
      })
      .catch((error) => console.error('Erro ao obter a cor predominante:', error));
 }, [src]);


console.log(backgroundColor)
 return (
    <div style={{
      backgroundColor: backgroundColor
    }} className={`p-4 rounded-lg`}>
      {/* Conteúdo do componente */}
      <img src={src} alt="Imagem" className="w-full h-auto rounded-lg" />
    </div>
 );
};

export { ImageWithBackground}
