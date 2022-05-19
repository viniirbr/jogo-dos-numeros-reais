import './style.css'


interface CardProps {
    content?: String,
    type: 'number' | 'number-empty' | 'sentence' | 'sentence-empty'
}


export default function Card({ content, type }: CardProps) {
    return (
        <div className="card"
            style={{
                border: `2px ${type.match(/empty/g)?.toString() === 'empty' ? 'dashed' : 'solid'} 
            ${type.match(/sentence/g)?.toString() === 'sentence' ? 'red' : 'blue'}`,
            backgroundColor: `${(type === 'number-empty' || type === 'sentence-empty') && 'transparent'}`
            }}>
            {content}
        </div>
    )
}
