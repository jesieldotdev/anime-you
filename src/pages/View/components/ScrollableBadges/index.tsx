import { ArrowDownToLine, Bookmark, Forward } from "lucide-react";
import { LikeButton } from "../LikeButton";
import { RoundedButton } from "../RoundedButton";

export const ScrollableBadges = () => {
    return (
       <div className="flex overflow-x-scroll w-100 scrollbar-hide">
          <div className="flex gap-2  scrollbar-hide ">
             <LikeButton likes={1001} />
             <RoundedButton icon={{ i: Forward }} label='Compartilhar' />
             <RoundedButton icon={{ i: ArrowDownToLine }} label='Download' />
             <RoundedButton icon={{ i: Bookmark }} label='Salvar' />
 
          </div>
 
 
       </div>
    );
 };