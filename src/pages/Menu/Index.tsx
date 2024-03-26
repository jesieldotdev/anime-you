export const Menu = () => {
 return(
    <div className="bg-slate-100 p-4 text-left border-2 rounded-2xl full-w flex flex-col w-9/10 mx-auto"> 
      <p className="text-2xl font-extrabold text-black">
        Histórias de cego
      </p>
      <p className="font-medium text-gray-500">Os três ratos cegos</p>
      <div className="max-w-md mx-auto mt-2">
        <img className="rounded-sm" src="https://static.wikia.nocookie.net/herois/images/7/7b/Three_Blind_Mice_%28Shrek%29.png/revision/latest/thumbnail/width/360/height/360?cb=20221206224341&path-prefix=pt-br" alt="Descrição da imagem"/>
      </div>
      
      <div className="flex">
        <p className="font-medium text-sm text-gray-500 mt-4">111 mil visualizações ° Há 2 anos</p>
      </div>
    </div>
 )
}
