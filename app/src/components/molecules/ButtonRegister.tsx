import React from 'react'
import {Text} from '../atoms/Text'
import {Button} from '../atoms/Button'

type Props = {
    text: string
    onClick?: () => void
    style: string
}
export const ButtonRegister = ({text, style, onClick}: Props) => {
    return (
        <Button style={'w-auto h-10 bg-red-700'} onClick={onClick}>
            <p className={'pr-1'}>{text}</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                 fill="currentColor">
                <path fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"/>
            </svg>
        </Button>
    )
}
