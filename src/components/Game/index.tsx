import { Sentence } from "../../assets/sentences"
import Card from "../Card";
import './style.css'

interface GameProps {
    sentences: Sentence[] | undefined;
    player1Numbers: String[] | undefined,
    player2Numbers: String[] | undefined,
    numberDig: String[] | undefined,
}


export function Game({ sentences, player1Numbers, player2Numbers, numberDig }: GameProps) {

  
  return (
    <div className="game">
      <div className="cards-deck cards-deck-player2">
        {player2Numbers?.map((number, id) => <Card content={number} key={id} type='number'/>)}
      </div>

      <div className="digs-container">
        <Card type="sentence"/>
        <div className="cards-put">
          <Card type="sentence-empty"/>
          <Card type="number-empty"/>
        </div>
        <Card type="number"/>
      </div>

      <div className="cards-deck cards-deck-player1">
        {player1Numbers?.map((number, id) => <Card content={number} key={id} type='number'/>)}
      </div>
    </div>
  )
}
