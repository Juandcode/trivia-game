import React, {ReactElement, RefObject, FC, ReactNode} from 'react';

type props = {
    style: string
    onClick?: () => void
}
type Props2 = { children: ReactNode } & props

export const Button = ({onClick, style, children}: Props2): ReactElement => {
    return (
        <button onClick={onClick}
                className={`px-2 ${style} transition duration-500 ease-in-out transform hover:scale-110 hover:bg-red-800 shadow-md rounded-md font-body font-bold flex items-center justify-center text-white`}>
            {children}
        </button>
    )
}
