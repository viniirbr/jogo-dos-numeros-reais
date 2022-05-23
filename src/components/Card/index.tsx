import './style.css'


interface CardProps {
    content?: String,
    type: 'number' | 'number-empty' | 'sentence' | 'sentence-empty',
    onCardClicked: (type: String, id: number, owner: 1 | 2 | undefined) => void,
    id?: number,
    owner?: 1 | 2 | undefined;
}

export default function Card({ content, type, onCardClicked, id, owner }: CardProps) {

    return (
        <div className={`card ${type.includes('sentence') && type.includes('empty') ?
            'w-24 h-15 md:w-32 md:h-24' : 'w-15 h-24 md:w-24 md:h-32'} 
        bg-transparent rounded-lg border-2 shadow-m flex flex-col items-center justify-center
    ${type.includes('empty') && 'border-dashed'}  ${type.includes('number') && !type.includes('empty')&&'bg-numberCardBg'}
    ${type.includes('sentence') && !type.includes('empty') && 'bg-sentenceCardBg'}`}
            onClick={() => onCardClicked(type, id as number, owner)}>
            <p className='font-cursive text-xs md:text-sm lg:text-lg'>{content}</p>
        </div>
    )
}
