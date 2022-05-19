import { Sentence } from "../../assets/sentences"

interface GameProps {
    sentences: Sentence[] | undefined;
    player1Numbers: String[] | undefined,
    player2Numbers: String[] | undefined,
    numberDig: String[] | undefined,
}


export function Game({ sentences, player1Numbers, player2Numbers, numberDig }: GameProps) {

  console.log(player1Numbers); 

  return (
    <div>index</div>
  )
}
