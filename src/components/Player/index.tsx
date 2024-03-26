import { ThumbsUp, ThumbsDown, Forward, ArrowDownToLine, Bookmark } from 'lucide-react';

interface CardProps {
 title: string;
 subtitle: string;
 image?: string;
 onClick: (slug:string)=>void
}

const LikeButton = ({ likes }) => {
 return (
    <div className="flex items-center space-x-2 bg-zinc-800 focus:bg-gray-300 text-gray-200 py-2 px-4 rounded-full max-w-min">
    <button className="flex">
     <ThumbsUp width={18} height={18}/>
     
      <span className="ml-2 text-xs font-semibold">{likes}</span>
      </button>
      <span>|</span>
      <button>
         <ThumbsDown className="ml-2" width={18} height={18}/>
         </button>
    </div>
 );
};

const ShareButton = () => {
 return (
    <button className="flex items-center space-x-2 bg-zinc-800 focus:bg-gray-300 text-gray-200 py-2 px-4 rounded-full max-w-min">
  
     <Forward width={18} height={18}/>
     
      <span className="ml-2 text-xs font-semibold ">Compartilhar</span>
     
      
   
   
    </button>
 );
};
const DownloadButton = () => {
 return (
    <button className="flex items-center space-x-2 bg-zinc-800 focus:bg-gray-300 text-gray-200 font-semibold py-2 px-4 rounded-full max-w-min">
  
   <ArrowDownToLine width={18} height={18}/>
     
      <span className="ml-2 text-xs ">Download</span>
     
      
   
   
    </button>
 );
};

const SaveButton = () => {
 return (
    <button className="flex items-center space-x-2 bg-zinc-800 focus:bg-gray-300 text-gray-200 font-semibold py-2 px-4 rounded-full max-w-min">
  
   <Bookmark width={18} height={18}/>
     
      <span className="ml-2 text-xs ">Salvar</span>
     
      
   
   
    </button>
 );
};

const ScrollableBadges = () => {
 return (
    <div className="flex overflow-x-scroll w-100 scrollbar-hide">
         <div className="flex gap-2  scrollbar-hide ">
           <LikeButton  likes={1001}/>
           <ShareButton/>
           <DownloadButton/>
           <SaveButton/>
          
           </div>
   
     
    </div>
 );
};

const Comments = () =>{
  
  return(
    <div className="py-4 px-3 bg-zinc-800 rounded-2xl select-none mt-4 flex flex-col justify-center hover:bg-zinc-600 ">
   <div className="flex items-center ">
    <p className="text-sm font-semibold ">Comentários</p><span className="text-xs font-semibold text-gray-500 ml-2">11</span>
    </div>
    
    <div className="flex mt-2 items-center ">
    <div className="flex justify-center items-center  bg-blue-500 py-2 px-4 rounded-full text-sm w-8 h-8"><span>A</span>
    
    </div>
    <p className="flex text-xs font-regular ml-2 w-full">Muto bom o anime, e ola que aina é o preir ffw gsgso kk</p>
    </div>
    </div>
    )
}

export const Player = ({ title, subtitle, image , episodesLength , year, seasons, onClick}: CardProps) => {
 return (
    <div
    onClick={()=>onClick()}
    className=" text-left select-none flex flex-col mx-auto w-full"> {/* Ajuste aqui: w-full para ocupar 100% da largura */}
   
      <div className="flex-shrink-0 h-64 ">
     
        <iframe src="https://mega.nz/embed/F2UUjCpD#HIJjWpSi-hF6HrNp4tw6ySfVGFGlAFIpqb8N_-iz5MM"
        className="rounded-sm object-cover h-full w-full"
        frameborder="0" allowfullscreen></iframe>
        
      </div>
      <div className="p-4">
         <p className="text-xl font-extrabold">{title}</p>
    
       <p className="font-medium text-xs dark:text-gray-400 text-gray-500 mt-2 mb-4">
          5.345 visualizações 
        </p>
  
           
           <ScrollableBadges />
           
           <Comments/>
</div>

    </div>
 );
};
