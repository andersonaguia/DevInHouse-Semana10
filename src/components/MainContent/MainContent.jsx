import { Summary } from "../Summary/Summary"
import { Filter } from "../Filter/Filter"
import { TipCard } from "../TipCard/TipCard"
import { CardList } from "../CardList/CardList"

const dica = {
  id: 1,
  titulo: "FrontEnd",
  descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque porro qui ullam cum, eos consequuntur.",
  categoria: "Frameworks",
  linguagem: "JavaScript",
  video: "Sem dados"
}

export const MainContent = () => {
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