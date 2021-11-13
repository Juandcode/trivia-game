import React from 'react'
import {Modal} from "../molecules/Modal";
import {useAppState} from "../../state/AppStateContext";
import {ListUsers} from "../molecules/ListUsers";

export const FormResults = () => {
    const {name, points, categoryId, timestamp} = useAppState()
    return (
        <div className={'w-full h-full items-center flex justify-center overflow-y-auto py-4'}>
            <Modal name={name} points={points} time={Math.floor(timestamp / 1000)}/>
            <ListUsers categoryId={categoryId}/>
        </div>
    )
}
