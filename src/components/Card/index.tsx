import './style.css'


interface CardProps {
    content?: String,
    type: 'number' | 'number-empty' | 'sentence' | 'sentence-empty',
    onCardClicked: (type: String, id: number, owner: 1 | 2 | undefined) => void,
    id?: number,
    owner?: 1 | 2 | undefined,
    playerTurn?: 1 | 2
}

export default function Card({ content, type, onCardClicked, id, owner, playerTurn }: CardProps) {

    return (
        <div className={`${type.includes('sentence') ? 'w-24 h-16 md:w-32 md:h-24' : 'w-16 h-24 md:w-24 md:h-32'} 
        bg-transparent rounded-lg border-2 ${!type.includes('empty') && 'shadow-md shadow-black'} flex flex-col items-center justify-center
    ${type.includes('empty') && 'border-dashed'}  ${type.includes('number') && !type.includes('empty') && 'bg-numberCardBg'}
    ${type.includes('sentence') && !type.includes('empty') && 'bg-sentenceCardBg'} 
    ${playerTurn === owner && 'hover:scale-105 transition-transform'}`}
            onClick={() => onCardClicked(type, id as number, owner)}>
            <p className='font-cursive text-xs leading-[0.7rem] md:text-sm lg:text-sm'>{content}</p>
        </div>
    )
}
