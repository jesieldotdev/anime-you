import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Card} from './components/Card/index.tsx'
import {AppBar} from './components/Appbar/index.tsx'
import {CategoryScroll} from './components/CategoryScroll/index.tsx'
import  CardCarousel  from './components/CardCarousel/index.tsx';
import {
useNavigate  
} from "react-router-dom";
import {ImageWithBackground} from "./components/ImageColor/index.tsx"
import axios, { AxiosResponse } from 'axios';

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
     image: "https://i.pinimg.com/1200x/25/33/e7/2533e7d3f40e0b117965b6d3ad159db6.jpg",
     episodesLength: 25,
     year: 2016
   },
   {
     name: "Sword Art Online ",
     subtitle: "Reki Kawahara",
     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWebpJrUVHSik5myjQmyeaCpjZbmawq7qneg&usqp=CAU",
     seasons: 4,
     year: 2012
   },
  
   ].map((item,index) => ({id: index, ...item}))



const cards = [
 {
    title: 'Título 1',
    description: 'Descrição 1',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX14wwnXIoXeOyKJuzeF-pwaMu5j2keg4lVfRhCpJQxWYwvdg9f3clOOKw&s=10',
 },
 {
    title: 'Título 2',
    description: 'Descrição 2',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF3TPjHouPQrb5MubV-WisRpv6z6rK1kDkL-dE6XPju8TSY34sbGORw9Yy&s=10',
 },
 // Adicione mais cartões conforme necessário
];


const history = useNavigate();

const link = (slug:string) => {
    history("/"+slug);
};

const apiKey = import.meta.env.VITE_TMDB_API_KEY
const animeName = 'Shangri-la';
const [animeList, setAnimeList] = useState<any[]>([])
console.log(animeList)
React.useEffect(()=>{
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&page=4&with_genres=16&with_keywords=210024|287501&append_to_response=videos`;

axios.get(url)
 .then(response => {
   setAnimeList(response.data.results)
    console.log(response.data);
 })
 .catch(error => {
    console.error('Erro ao buscar animes:', error);
 });

},[])

function getImage(image:string){
  if(!image)return "https://static.wikia.nocookie.net/herois/images/7/7b/Three_Blind_Mice_%28Shrek%29.png/revision/latest/thumbnail/width/360/height/360?cb=20221206224341&path-prefix=pt-br"
 else return `https://image.tmdb.org/t/p/original${image}`
}


 return (
   <div className="px-4">
   <AppBar title="AnimeFire"/>
   <div className="h-8"/>
   
  
    <div className="flex flex-col ">
    
      <div className="flex flex-col justify-center w-full gap-y-3 ">
      
      {
        !!animeList.length && animeList.map(anime => <Card key={anime.id}
        title={anime.title}
        subtitle={anime.overview}
        image={getImage(anime.backdrop_path)}
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
 