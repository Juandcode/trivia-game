import React, {ReactElement} from 'react'

type props = {
    text: string
    style?: string
}

export const Text = (props: props): ReactElement => {
    return (
        <p className={`font-bold font-body text-lg ${props.style}`}>{props.text}</p>
    )
}
