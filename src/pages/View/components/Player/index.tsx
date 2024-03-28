import { Comments } from "../Comments";
import { ScrollableBadges } from "../ScrollableBadges";

interface CardProps {
   title: string;
   subtitle: string;
   image?: string;
}



export const Player = ({ title}: CardProps) => {
   return (
      <div
         className=" text-left select-none flex flex-col mx-auto w-full"> {/* Ajuste aqui: w-full para ocupar 100% da largura */}

         <div className="flex-shrink-0 h-64 ">

            {/* <iframe id="player" width="640" height="360"
               className="rounded-sm object-cover h-full w-full"
               src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
            ></iframe> */}
            <iframe src="https://mega.nz/embed/F2UUjCpD#HIJjWpSi-hF6HrNp4tw6ySfVGFGlAFIpqb8N_-iz5MM"
               className="rounded-sm object-cover h-full w-full"
               allowFullScreen
               frameBorder={0}
            ></iframe> 

         </div>
         <div className="p-4">
            <p className="text-xl font-extrabold">{title}</p>

            <p className="font-medium text-xs dark:text-gray-400 text-gray-500 mt-2 mb-4">
               5.345 visualizações
            </p>


            <ScrollableBadges />

            <Comments />
         </div>

      </div>
   );
};
