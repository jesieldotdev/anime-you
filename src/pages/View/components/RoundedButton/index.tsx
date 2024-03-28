import { LucideIcon } from "lucide-react";

interface ButtonProps {
    label: string
    icon: {
        i: LucideIcon

    }
}

export const RoundedButton = ({ label, icon }: ButtonProps) => {
    return (
        <button className="flex items-center space-x-2 bg-zinc-800 focus:bg-gray-300 text-gray-200 py-2 px-4 rounded-full max-w-min">

            <icon.i width={18} height={18}/>

            <span className="ml-2 text-xs font-semibold ">{label}</span>




        </button>
    );
};