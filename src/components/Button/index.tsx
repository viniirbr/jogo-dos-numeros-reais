interface ButtonProps {
    onClick: () => void,
    children: String,
    type?: 'normal'|'report'
}


export function Button({ onClick, children, type='normal' }: ButtonProps) {


    return (
        <button
            onClick={onClick}
            className={`bg-button-${type}-900 rounded-md p-2 min-w-[100px] font-sans text-text font-bold 
            hover:bg-button-${type}-500 active:bg-button-${type}-100 transition-color duration-500`}
        >{children}
        </button>
    )
}
