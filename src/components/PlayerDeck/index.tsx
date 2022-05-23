import { Button } from "../Button"
import Card from "../Card"

interface PlayerDeckProps {
    playerTurn: 1 | 2,
    owner: 1 | 2,
    report: () => void,
    changeTurn: () => void,
    hasDiggedNumber: Boolean,
    hasDiggedSentence: Boolean,
    playerNumbers: String[],
    onCardClicked: (type: String, id: number, owner: 1 | 2 | undefined) => void,
    numberPut: String[];
}


export function PlayerDeck({ playerTurn, report, changeTurn, hasDiggedNumber,
    hasDiggedSentence, playerNumbers, onCardClicked, owner, numberPut }: PlayerDeckProps) {
    return (
        <div className="flex items-center justify-between w-full px-2 p-0">
            <div className="w-[17%] md:w-[20%]">
                {playerTurn === owner && !hasDiggedSentence && numberPut.length !== 0 &&
                    <Button onClick={report} type='report'>Denunciar</Button>}
                {playerTurn === owner && hasDiggedNumber && <Button onClick={changeTurn}>Passar</Button>}
            </div>
            <div className="flex flex-wrap-reverse w-[60%] md:w-[50%]">
                {playerNumbers?.map((number, id) =>
                    <Card content={number} key={id} type='number' onCardClicked={onCardClicked} id={id} 
                    owner={owner} playerTurn={playerTurn}/>)}
            </div>
            <div className="w-[10%] md:w-[20%]">
                {playerTurn === owner && <h3 className="text-green font-bold font-sans text-xl">Sua vez!</h3>}
            </div>
        </div>
    )
}