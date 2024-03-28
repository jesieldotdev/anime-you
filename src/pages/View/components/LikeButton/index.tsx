import { ThumbsDown, ThumbsUp } from "lucide-react";

interface ButtonProps{
    likes: number
}

export const LikeButton = ({ likes }: ButtonProps) => {
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