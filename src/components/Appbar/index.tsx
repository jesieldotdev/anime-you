// AppBar.tsx
import React from 'react';
import { Search } from 'lucide-react';
import { Bell } from 'lucide-react';
import {CategoryScroll} from "../../components/CategoryScroll/index.tsx"
interface AppBarProps {
 title: string;
}

export const AppBar: React.FC<AppBarProps> = ({ title }) => {
 return (
   <>
    <div className="bg-zinc-900 text-white px-4 py-2 fixed top-0 left-0 right-0 z-50 flex  flex-col items-center justify-left">
    <div className="flex  justify-between w-full ">
      <div className="text-lg font-extrabold font-sans">{title}</div>
      <div className="flex space-x-4">
       
        <button className="p-2 rounded-full bg-transparent hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          {/* Ícone de notificação */}
          <Bell width={18} height={18} />
        </button>
        <button className="p-2 rounded-full bg-transparent hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          {/* Ícone de notificação */}
          <Search width={18} height={18} />
        </button>
        </div>
      </div>
      <CategoryScroll />
    </div>
    </>
 );
};
