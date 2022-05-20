import { useState } from 'react'
import './App.css'
import { Game } from './components/Game'
import { Instructions } from './components/Instructions';

function App() {
  const [isStarted, setIsStarted] = useState(false);


  return (
    <div className="App">
      {isStarted ?
        <Game />
        :
        <Instructions startGame={() => setIsStarted(!isStarted)} />
      }
    </div>
  )
}

export default App
