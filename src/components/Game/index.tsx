import { useEffect, useState } from "react";
import { numbers } from "../../assets/numbers";
import shuffle from "../../assets/scripts/shuffle";
import { Sentence, sentencesArray } from "../../assets/sentences"
import Card from "../Card";
import './style.css'


export function Game() {

  const [sentencesDig, setSentencesDig] = useState<String[]>();
  const [sentencesPut, setSentencesPut] = useState<String[]>();
  const [numberDig, setNumberDig] = useState<String[]>();
  const [numberPut, setNumberPut] = useState<String[]>();
  const [player1Numbers, setPlayer1Numbers] = useState<String[]>();
  const [player2Numbers, setPlayer2Numbers] = useState<String[]>();


  useEffect(() => {
    setSentencesDig(shuffle(sentencesArray));
    const drawnedNumbers = shuffle<String>(numbers);
    const player1InitialNumbers = [...drawnedNumbers].splice(0, 5) as String[];
    const player2InitialNumbers = [...drawnedNumbers].splice(5, 5) as String[];
    setPlayer1Numbers(player1InitialNumbers);
    setPlayer2Numbers(player2InitialNumbers);
    setNumberDig([...drawnedNumbers].splice(0, 10));
  }, []);

  return (
    <div className="game">
      <div className="cards-deck cards-deck-player2">
        {player2Numbers?.map((number, id) => <Card content={number} key={id} type='number' />)}
      </div>

      <div className="digs-container">
        <Card type="sentence" />
        <div className="cards-put">
          <Card type={numberPut !== undefined ? 'sentence' : 'sentence-empty'}
            content={numberPut !== undefined ? numberPut[0] : undefined} />
          <Card type="number-empty" />
        </div>
        <Card type="number" />
      </div>

      <div className="cards-deck cards-deck-player1">
        {player1Numbers?.map((number, id) => <Card content={number} key={id} type='number' />)}
      </div>
    </div>
  )
}
