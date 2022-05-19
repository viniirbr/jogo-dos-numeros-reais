import { useEffect, useState } from "react";
import { numbers } from "../../assets/numbers";
import shuffle from "../../assets/scripts/shuffle";
import { Sentence, sentencesArray } from "../../assets/sentences"
import Card from "../Card";
import './style.css'


export function Game() {

  const [sentencesDig, setSentencesDig] = useState<Sentence[]>([]);
  const [sentencesPut, setSentencesPut] = useState<Sentence[]>();
  const [numberDig, setNumberDig] = useState<String[]>();
  const [numberPut, setNumberPut] = useState<String[]>();
  const [player1Numbers, setPlayer1Numbers] = useState<String[]>();
  const [player2Numbers, setPlayer2Numbers] = useState<String[]>();
  const [hasDigged, setHasDigged] = useState(false);


  useEffect(() => {
    setSentencesDig(shuffle(sentencesArray));
    const drawnedNumbers = shuffle<String>(numbers);
    const player1InitialNumbers = [...drawnedNumbers].splice(0, 5) as String[];
    const player2InitialNumbers = [...drawnedNumbers].splice(5, 5) as String[];
    setPlayer1Numbers(player1InitialNumbers);
    setPlayer2Numbers(player2InitialNumbers);
    setNumberDig([...drawnedNumbers].splice(0, 10));
  }, []);

  const onCardClicked = (type: String) => {
    if (type === 'sentence' && !hasDigged) {
      setSentencesPut([sentencesDig[sentencesDig.length-1], ...sentencesDig]);
      let sentencesDigTemp = sentencesDig;
      sentencesDigTemp.pop();
      setSentencesDig(sentencesDigTemp);
      setHasDigged(true);
    }
  }

  return (
    <div className="game">
      <div className="cards-deck cards-deck-player2">
        {player2Numbers?.map((number, id) => <Card content={number} key={id} type='number' onCardClicked={onCardClicked}/>)}
      </div>

      <div className="digs-container">
        <Card type="sentence" onCardClicked={onCardClicked}/>
        <div className="cards-put">
          <Card type={sentencesPut !== undefined ? 'sentence' : 'sentence-empty'}
            content={sentencesPut !== undefined ? sentencesPut[0].sentence : undefined} onCardClicked={onCardClicked}/>
          <Card type="number-empty" onCardClicked={onCardClicked}/>
        </div>
        <Card type="number" onCardClicked={onCardClicked}/>
      </div>

      <div className="cards-deck cards-deck-player1">
        {player1Numbers?.map((number, id) => <Card content={number} key={id} type='number' onCardClicked={onCardClicked}/>)}
      </div>
    </div>
  )
}
