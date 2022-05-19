import { useState } from 'react'
import './App.css'
import { Game } from './components/Game'

function App() {
  const [isStarted, setIsStarted] = useState(false);


  return (
    <div className="App">
      {isStarted ?
        <Game />
        :
        <button onClick={() => setIsStarted(!isStarted)}>Iniciar</button>}
    </div>
  )
}

export default App
