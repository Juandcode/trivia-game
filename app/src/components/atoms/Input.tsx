import React, {ReactElement, RefObject} from 'react'

type props = {
    margin: string
    padding: string
    setText: (text: string) => void
    text: string
    inputRef?: RefObject<HTMLInputElement> | null
    onKeyPress?: (event: any) => void
}

export const Input = (props: props): ReactElement => {
    const {margin, padding, inputRef, onKeyPress, setText, text} = props
    return (
        <input ref={inputRef} value={text} onKeyPress={onKeyPress} onChange={e => setText(e.target.value)}
               className={`font-body font-bold shadow-md rounded-md w-64 h-10 ${margin} ${padding}`}/>
    )
}
