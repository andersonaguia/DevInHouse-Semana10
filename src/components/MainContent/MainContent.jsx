import { Summary } from "../Summary/Summary"
import { Filter } from "../Filter/Filter"
import { TipCard } from "../TipCard/TipCard"
import { CardList } from "../CardList/CardList"
import { useAppContext } from "../../contexts/app-context"

const dica = {
  id: 1,
  titulo: "FrontEnd",
  descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque porro qui ullam cum, eos consequuntur.",
  categoria: "Frameworks",
  linguagem: "JavaScript",
  video: "Sem dados"
}

export const MainContent = () => {
  const result = useAppContext()
  console.log(result)
  return (
    <>
      <main className="main-container">      
        <Summary />      
        <Filter />
        <CardList>
          <TipCard tip={dica}/> 
          <TipCard tip={dica}/> 
          <TipCard tip={dica}/> 
          <TipCard tip={dica}/> 
          <TipCard tip={dica}/> 
          <TipCard tip={dica}/> 
        </CardList>          
      </main>
    </>
  )
}