import { useState } from 'react'
import './App.css'
import { numbers } from './assets/numbers';
import shuffle from './assets/scripts/shuffle';
import { Sentence, sentencesArray } from './assets/sentences';
import { Game } from './components/Game'

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [sentences, setSentences] = useState<Sentence[]>();
  const [numberDig, setNumberDig] = useState<String[]>();
  const [player1Numbers, setPlayer1Numbers] = useState<String[]>();
  const [player2Numbers, setPlayer2Numbers] = useState<String[]>();

  function startGame() {
    setSentences(shuffle(sentencesArray));
    const drawnedNumbers = shuffle<String>(numbers);
    const player1Numbers = drawnedNumbers.splice(0, 5) as String[];
    const player2Numbers = drawnedNumbers.splice(0, 5) as String[];

    setNumberDig(drawnedNumbers);
    setPlayer1Numbers(player1Numbers);
    setPlayer2Numbers(player2Numbers);
    setIsStarted(!isStarted);
  }

  return (
    <div className="App">
      {isStarted ?
        <Game sentences={sentences} numberDig={numberDig} player1Numbers={player1Numbers}
          player2Numbers={player2Numbers} />
        :
        <button onClick={startGame}>Iniciar</button>}
    </div>
  )
}

export default App
