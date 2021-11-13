import React, {ReactElement, RefObject, useState} from 'react'
import {Text} from "../atoms/Text";
import {Input} from "../atoms/Input";
import {useFocus} from "../../utils/useFocus";

type props = {
    setText: (text: string) => void
    text: string
    inputRef?: RefObject<HTMLInputElement> | null
    onKeyPress?: (event: any) => void
}
export const InputName = ({setText, text, inputRef, onKeyPress}: props): ReactElement => {
    //const inputRef = useFocus()
    /*const handleAddText = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key == 'Enter') {
            console.log("enter")
        }
    }*/
    return (
        <div className={'self-end flex flex-col items-center'}>
            <Text text={'Nickname'}/>
            <Input text={text} setText={setText} onKeyPress={onKeyPress} inputRef={inputRef} margin={'m-2'}
                   padding={'pl-2'}/>
        </div>
    )
}
