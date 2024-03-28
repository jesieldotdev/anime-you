import {Player} from './components/Player/index.tsx'
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
    <Card title="Shangri-la Frontier - Episódio 2" subtitle="Shangri-la Frontier " image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO_z23TO_wSryeZ6xOQ2SZ-ZVnH7ijpJ8cJDDvFFUpdd-gCvPh6ea70jh6&s=10" />
    <div className="h-4"/>
    <Card title="Episódio 3" subtitle="Shangri-la Frontier " image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRublob9B8D2_0N4sCeJmftLBnNSr6D8ro9OrXvb0BpFbVU8Pn2fLqTE83&s=10" />
    </div>
    </>
    )
}