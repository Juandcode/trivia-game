import React, {Dispatch, FC, SetStateAction} from 'react'
import {Button} from '../atoms/Button'
import {Text} from '../atoms/Text'
import {useNavigate} from "react-router-dom";
import {useMutation, useApolloClient, gql} from "@apollo/client";
import {useAppState} from "../../state/AppStateContext";
import {setPoints, setTimestamp} from "../../state/actions";

type Props = {
    text: string
    onClick: () => Promise<void>
}

export const ButtonAnswer = ({text, onClick}: Props) => {
    return (
        <Button onClick={onClick} style={'m-2 w-64 h-24 bg-yellow-700'}>
            <Text text={text}/>
        </Button>
    )
}
