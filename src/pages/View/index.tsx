import {Player} from '../../components/Player/index.tsx'
import {Card} from '../../components/Card/index.tsx'
export const ViewPage = () =>{
  return (
    <>
    
    <Player 
    title="Shangri-la Frontier - Episódio 1"
    subtitle="teste"
    />
    
  
    <div className="px-4 py-2 ">
     <p className="text-bold mb-2">Outros episódios </p>
    <Card title="Episódio 2" subtitle="Shangri-la Frontier " />
    </div>
    </>
    )
}