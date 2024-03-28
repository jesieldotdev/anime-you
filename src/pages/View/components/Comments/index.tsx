export const Comments = () => {

    return (
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