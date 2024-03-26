import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Card} from './components/Card/index.tsx'
import {AppBar} from './components/Appbar/index.tsx'
import {CategoryScroll} from './components/CategoryScroll/index.tsx'
import {
useNavigate  
} from "react-router-dom";
import {ImageWithBackground} from "./components/ImageColor/index.tsx"

function App() {
  function calculateYearsDifference(year) {
 const currentDate = new Date();
 const currentYear = currentDate.getFullYear();
 const currentMonth = currentDate.getMonth();
 const currentDay = currentDate.getDate();

 const animeDate = new Date(year, currentMonth, currentDay);

 if (animeDate < currentDate) {
    return currentYear - year;
 } else {
   
    return currentYear - year - 1;
 }
}

 const animes = [
    {
     name: "Shangri-la Frontier",
     subtitle: "Ryosuke Fuji",
     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX14wwnXIoXeOyKJuzeF-pwaMu5j2keg4lVfRhCpJQxWYwvdg9f3clOOKw&s=10",
     seasons: 1,
     year: 2023
   },
   {
     name: "Re:Zero",
     subtitle: "Taippei Nagatsuki ",
     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR988rWGPxfgPYoVY6Na4YYWIYslU2RssqzF1BUWmLvDAI2tdwA-y_aEQe6&s=10",
     episodesLength: 25,
     year: 2016
   },
   {
     name: "Sword Art Online ",
     subtitle: "Reki Kawahara",
     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF3TPjHouPQrb5MubV-WisRpv6z6rK1kDkL-dE6XPju8TSY34sbGORw9Yy&s=10",
     seasons: 4,
     year: 2012
   },
  
   ].map((item,index) => ({id: index, ...item}))




const history = useNavigate();

const link = (slug:string) => {
    history("/"+slug);
};
 return (
   <div className="px-4">
   <AppBar title="AnimeFire"/>
   <div className="h-16"/>
   
  
    <div className="flex flex-col mt-12">
    
      <div className="flex flex-col justify-center w-full gap-y-3 ">
      
      
      {
        !!animes.length && animes.map(anime => <Card key={anime.id}
        title={anime.name}
        subtitle={anime.subtitle}
        image={anime.image}
        seasons={anime?.seasons}
        onClick={link} 
        episodesLength={anime?.episodesLength}
        year={calculateYearsDifference(anime.year)}
      />)
}
      
      </div>
    </div>
    </div>
 )
}

export default App
 