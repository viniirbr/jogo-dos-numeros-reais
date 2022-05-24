import { useEffect, useState } from "react";
import { numbers } from "../../assets/numbers";
import shuffle from "../../assets/scripts/shuffle";
import { Sentence, sentencesArray } from "../../assets/sentences"
import Card from "../Card";
import { PlayerDeck } from "../PlayerDeck";
import { Report } from "../Report";
import './style.css'

export function Game() {

  const [sentencesDig, setSentencesDig] = useState<Sentence[]>([]);
  const [sentencesPut, setSentencesPut] = useState<Sentence[]>([]);
  const [numberDig, setNumberDig] = useState<String[]>();
  const [numberPut, setNumberPut] = useState<String[]>([]);
  const [player1Numbers, setPlayer1Numbers] = useState<String[]>([]);
  const [player2Numbers, setPlayer2Numbers] = useState<String[]>([]);
  const [hasDiggedNumber, setHasDiggedNumber] = useState(false);
  const [hasDiggedSentence, setHasDiggedSentence] = useState(false);
  const [playerTurn, setPlayerTurn] = useState<1 | 2>(1);
  const [isOpen, setIsOpen] = useState(false);
  const [reportTitle, setReportTitle] = useState('');
  const [reportText, setReportText] = useState('');

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

    if (type === 'sentence' && !hasDiggedSentence) { //retirar nova frase
      setSentencesPut([sentencesDig[sentencesDig.length - 1], ...sentencesPut]);
      let sentencesDigTemp = sentencesDig;
      let removed = sentencesDigTemp.pop();
      setSentencesDig([removed as Sentence, ...sentencesDigTemp]); //cava de frases não diminui
      setHasDiggedSentence(true);
    }

    if (type === 'number' && hasDiggedSentence) {
      if (playerTurn === 1 && owner === 1) { //carta do jogador 1 foi clicada
        setNumberPut([player1Numbers[id], ...numberPut])
        const player1NumbersTemp = [...player1Numbers];
        player1NumbersTemp.splice(id, 1);
        setPlayer1Numbers(player1NumbersTemp);
        changeTurn();

      } else if (playerTurn === 2 && owner === 2) { //carta do jogador 2 foi clicada
        setNumberPut([player2Numbers[id], ...numberPut])
        const player2NumbersTemp = [...player2Numbers];
        player2NumbersTemp.splice(id, 1);
        setPlayer2Numbers(player2NumbersTemp);
        changeTurn();

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

  function report() {

      if (sentencesPut[0].numbers.includes(numberPut[0] as string)) { //verifica se a carta colocada está correta
        setReportTitle('Denúncia Rejeitada!');
        setReportText(`O jogador ${playerTurn === 1 ? '1' : '2'} deverá recolher todas as cartas da mesa.`)
        if (playerTurn === 1) {
          setPlayer1Numbers([...player1Numbers, ...numberPut]);
          setNumberPut([]);
        } else {
          setPlayer2Numbers([...player2Numbers, ...numberPut]);
          setNumberPut([]);
        }
      } else {
        setReportTitle('Denúncia Aceita!');
        setReportText(`O jogador ${playerTurn === 1 ? '2' : '1'} deverá recolher todas as cartas da mesa.`);
        if (playerTurn === 1) {
          setPlayer2Numbers([...player2Numbers, ...numberPut]);
          setNumberPut([]);
        } else {
          setPlayer1Numbers([...player1Numbers, ...numberPut]);
          setNumberPut([]);
        }
      }
    setIsOpen(true);
  }

  return (
    <div className="flex flex-col h-[100vh] justify-between p-3 gap-4">
      <Report isOpen={isOpen} setIsOpen={setIsOpen} title={reportTitle} text={reportText} />

      {player2Numbers.length === 0
        ? <h1>O jogador 2 venceu!</h1>
        :
        <PlayerDeck playerNumbers={player2Numbers} playerTurn={playerTurn} report={report}
          changeTurn={changeTurn} hasDiggedNumber={hasDiggedNumber} onCardClicked={onCardClicked}
          owner={2} hasDiggedSentence={hasDiggedSentence} numberPut={numberPut}/>}

      <div className="digs-container">

        <Card type="sentence" onCardClicked={onCardClicked} />

        <div className="cards-put">
          <Card type={sentencesPut.length !== 0 ? 'sentence' : 'sentence-empty'}
            content={sentencesPut.length !== 0 ? sentencesPut[0].sentence : undefined} onCardClicked={onCardClicked} />

          <Card type={numberPut.length !== 0 ? 'number' : 'number-empty'}
            content={numberPut !== undefined ? numberPut[0] : undefined} onCardClicked={onCardClicked} />
        </div>

        <Card type="number" onCardClicked={onCardClicked} />
      </div>

      {player1Numbers.length === 0
        ? <h1>O jogador 1 venceu!</h1>
        :
        <PlayerDeck playerNumbers={player1Numbers} playerTurn={playerTurn} report={report}
          changeTurn={changeTurn} hasDiggedNumber={hasDiggedNumber} onCardClicked={onCardClicked}
          owner={1} hasDiggedSentence={hasDiggedSentence} numberPut={numberPut}/>
      }
    </div>
  )
}

/* 
carta correta

*/