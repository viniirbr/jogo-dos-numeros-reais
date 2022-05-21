import { Dialog } from "@headlessui/react";
import { useEffect, useState } from "react";
import { numbers } from "../../assets/numbers";
import shuffle from "../../assets/scripts/shuffle";
import { Sentence, sentencesArray } from "../../assets/sentences"
import { Button } from "../Button";
import Card from "../Card";
import { PlayerDeck } from "../PlayerDeck";
import { Report } from "../Report";
import './style.css'

export function Game() {

  const [sentencesDig, setSentencesDig] = useState<Sentence[]>([]);
  const [sentencesPut, setSentencesPut] = useState<Sentence[]>();
  const [numberDig, setNumberDig] = useState<String[]>();
  const [numberPut, setNumberPut] = useState<String[]>([]);
  const [player1Numbers, setPlayer1Numbers] = useState<String[]>([]);
  const [player2Numbers, setPlayer2Numbers] = useState<String[]>([]);
  const [hasDiggedNumber, setHasDiggedNumber] = useState(false);
  const [hasDiggedSentence, setHasDiggedSentence] = useState(false);
  const [playerTurn, setPlayerTurn] = useState<1 | 2>(1);
  let [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setSentencesDig(shuffle(sentencesArray));
    const drawnedNumbers = shuffle<String>(numbers);
    const player1InitialNumbers = [...drawnedNumbers].splice(0, 5) as String[];
    const player2InitialNumbers = [...drawnedNumbers].splice(5, 5) as String[];
    setPlayer1Numbers(player1InitialNumbers);
    setPlayer2Numbers(player2InitialNumbers);
    const numberDig = [...drawnedNumbers].splice(10)
    setNumberDig(numberDig);
  }, []);

  const onCardClicked = (type: String, id: number, owner: 1 | 2 | undefined) => {
    console.log(hasDiggedSentence)
    console.log('owner: ' + owner)
    console.log(playerTurn)
    if (type === 'sentence' && !hasDiggedSentence) { //retirar nova frase
      setSentencesPut([sentencesDig[sentencesDig.length - 1], ...sentencesDig]);
      let sentencesDigTemp = sentencesDig;
      sentencesDigTemp.pop();
      setSentencesDig(sentencesDigTemp);
      setHasDiggedSentence(true);
    }

    if (type === 'number' && hasDiggedSentence) {
      if (playerTurn === 1 && owner === 1) { //carta do jogador 1 foi clicada
        setNumberPut([player1Numbers[id], ...numberPut])
        const player1NumbersTemp = [...player1Numbers];
        player1NumbersTemp.splice(id, 1);
        setPlayer1Numbers(player1NumbersTemp);
        setPlayerTurn(2);
        setHasDiggedSentence(false);

      } else if (playerTurn === 2 && owner === 2) { //carta do jogador 2 foi clicada
        setNumberPut([player2Numbers[id], ...numberPut])
        const player2NumbersTemp = [...player2Numbers];
        player2NumbersTemp.splice(id, 1);
        setPlayer2Numbers(player2NumbersTemp);
        setPlayerTurn(1);
        setHasDiggedSentence(false);

      } else if (owner === undefined && hasDiggedNumber === false) { //carta do cava de números foi clicada
        if (playerTurn === 1) {
          setPlayer1Numbers([...player1Numbers, numberDig ? numberDig[0] : ''])
          const numberDigTemp = [...numberDig as String[]];
          numberDigTemp.splice(0, 1)
          setNumberDig(numberDigTemp);
          setHasDiggedNumber(true);
        }
        if (playerTurn === 2) {
          setPlayer2Numbers([...player2Numbers, numberDig ? numberDig[0] : '0'])
          const numberDigTemp = numberDig;
          numberDigTemp?.splice(0, 1);
          setNumberDig(numberDigTemp);
          setHasDiggedNumber(true);
        }
      }
    }
  }

  function changeTurn() {
    setPlayerTurn(playerTurn === 1 ? 2 : 1);
    setHasDiggedNumber(false);
    setHasDiggedSentence(false);
  }

  return (
    <div className="game">
      <Report isOpen={isOpen} setIsOpen={setIsOpen} />

      <PlayerDeck playerNumbers={player2Numbers} playerTurn={playerTurn} setIsOpen={setIsOpen}
        changeTurn={changeTurn} hasDiggedNumber={hasDiggedNumber} onCardClicked={onCardClicked} owner={2}/>

      <div className="digs-container">

        <Card type="sentence" onCardClicked={onCardClicked} />

        <div className="cards-put">
          <Card type={sentencesPut !== undefined ? 'sentence' : 'sentence-empty'}
            content={sentencesPut !== undefined ? sentencesPut[0].sentence : undefined} onCardClicked={onCardClicked} />

          <Card type={numberPut.length !== 0 ? 'number' : 'number-empty'}
            content={numberPut !== undefined ? numberPut[0] : undefined} onCardClicked={onCardClicked} />
        </div>

        <Card type="number" onCardClicked={onCardClicked} />
      </div>

      <PlayerDeck playerNumbers={player1Numbers} playerTurn={playerTurn} setIsOpen={setIsOpen}
        changeTurn={changeTurn} hasDiggedNumber={hasDiggedNumber} onCardClicked={onCardClicked} owner={1}/>
    </div>
  )
}
