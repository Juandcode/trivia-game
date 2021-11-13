import React from 'react';
import {FormRegister} from "../../components/organisms/FormRegister";

export const RegisterUser = () => {
    return (
        <div
            className={"bg-gradient-to-r from-blue-900 to-indigo-900 w-full h-full h-screen flex flex-col items-center justify-center"}>
            <div
                className={'absolute inset-x-0 top-0 flex text-center justify-center text-white font-body font-bold text-5xl pt-4'}>TRIVIA
                GAME
            </div>
            <FormRegister/>
        </div>
    )
}
