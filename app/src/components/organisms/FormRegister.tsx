import React, {ReactElement, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {InputName} from "../molecules/InputName";
import {Button} from "../atoms/Button";
import {useFocus} from "../../utils/useFocus";
import {useAppState} from "../../state/AppStateContext";
import {setName} from "../../state/actions";
import {ButtonRegister} from "../molecules/ButtonRegister";

export const FormRegister = (): ReactElement => {
    const {dispatch} = useAppState()
    const navigate = useNavigate()
    const inputRef = useFocus()
    const [text, setText] = useState("")
    const handleAddText = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key == 'Enter') {
            console.log(text)
            if (text != "") {
                dispatch(setName(text))
                navigate('/categories')
            }
        }
    }
    const onClick = (): void => {
        if (text != "") {
            dispatch(setName(text))
            navigate('/categories')
        }
    }
    return (
        <div className={'flex flex-col sm:flex-row items-center justify-center'}>
            <InputName setText={setText} text={text} inputRef={inputRef} onKeyPress={handleAddText}/>
            <div className={'flex sm:flex-col items-center'}>
                <p className={'font-bold font-body text-lg'}><br/></p>
                <ButtonRegister style={'w-auto h-10'} onClick={onClick} text={'Start'}/>
            </div>
        </div>
    )
}
