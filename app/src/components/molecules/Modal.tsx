import React from 'react'
import './modal.css'
import {Text} from "../atoms/Text";
import {Button} from "../atoms/Button";
import {useFocus} from "../../utils/useFocus";

type Props = {
    name: string
    points: number
}

export const Modal = ({name, points}: Props) => {

    const ref = useFocus()

    const style = {
        backgroundColor: "rgba(0, 0, 0, .7)",
    }
    const onClick = () => {
        ref?.current?.classList.add('hidden')
    }
    return (
        <div ref={ref}
             className="fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
             style={style}>
            <div
                className="border border-green-500 shadow-lg modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <div className="modal-content py-4 text-left px-6">
                    <div className="flex justify-between items-center pb-3">
                        <p className="text-2xl font-bold">Results</p>
                        <div className="modal-close cursor-pointer z-50">
                            <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18"
                                 height="18"
                                 viewBox="0 0 18 18">
                                <path
                                    d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <div className="my-5">
                        <Text text={`Name: ${name}`}/>
                        <Text text={`Total points: ${points}`}/>
                    </div>
                    <div className="flex justify-end pt-2">
                        <Button onClick={onClick} style={'p-3 ml-3 bg-green-400'}>
                            <Text text={'Close'}/>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
