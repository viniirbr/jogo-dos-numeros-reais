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
            rounded-md p-2 min-w-[100px] font-sans text-text font-bold 
            hover:${type === 'normal' ? 'bg-normal-500' : 'bg-report-500'} 
            active:${type === 'normal' ? 'bg-normal-100' : 'bg-report-100'} 
            transition-color duration-500`}
        >{children}
        </button>
    )
}
