import { MainContent } from "../components/MainContent/MainContent"
import { Sidebar } from "../components/Sidebar/Sidebar"

export const Home = () => {
    return(
      <div className="root-container">
        <Sidebar />
        <MainContent />
      </div>
    )
}
  
