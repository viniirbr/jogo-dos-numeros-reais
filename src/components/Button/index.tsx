interface ButtonProps {
    onClick: () => void,
    children: String,
    type?: 'normal' | 'report'
}


export function Button({ onClick, children, type = 'normal' }: ButtonProps) {


    return (
        <button
            onClick={onClick}
            className={`${type === 'normal' ? 'bg-normal-900' : 'bg-report-900'} 
            w-full rounded-md p-2 font-sans text-text font-bold text-xs 
            ${type === 'normal' ? 'hover:bg-normal-500' : 'hover:bg-report-500'} 
            ${type === 'normal' ? 'active:bg-normal-100' : 'active:bg-report-100'} 
            transition-color duration-500`}
        >{children}
        </button>
    )
}
