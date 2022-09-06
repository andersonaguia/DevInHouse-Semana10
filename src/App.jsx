import { Home } from './pages/Home'
import { AppContextProvider } from './contexts/app-context'

function App() {

  return (
    <div className="App">
      <AppContextProvider>
        <Home />
      </AppContextProvider>
      
    </div>
  )
}

export default App
