import { Button } from "../Button"
import Card from "../Card"

interface PlayerDeckProps {
    playerTurn: 1 | 2,
    owner: 1 | 2,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    changeTurn: () => void,
    hasDiggedNumber: Boolean,
    playerNumbers: String[],
    onCardClicked: (type: String, id: number, owner: 1 | 2 | undefined) => void
}


export function PlayerDeck({ playerTurn, setIsOpen, changeTurn, hasDiggedNumber,
    playerNumbers, onCardClicked, owner }: PlayerDeckProps) {
    return (
        <div className="player-area">
            <div>
                {playerTurn !== owner && <Button onClick={() => setIsOpen(true)} type='report'>Denunciar</Button>}
                {playerTurn === owner && hasDiggedNumber && <Button onClick={changeTurn}>Passar</Button>}

            </div>
            <div className="cards-deck cards-deck-player1">
                {playerNumbers?.map((number, id) =>
                    <Card content={number} key={id} type='number' onCardClicked={onCardClicked} id={id} owner={owner} />)}
            </div>
            <div>
                {playerTurn === owner && <h3 className="text-green font-bold font-sans text-xl">Sua vez!</h3>}
            </div>
        </div>
    )
}
