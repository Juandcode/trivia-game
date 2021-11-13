import React, {FC} from 'react'
import {Button} from '../atoms/Button'
import {Text} from '../atoms/Text'
import {useNavigate} from "react-router-dom";
import {useQuery, useApolloClient, gql} from "@apollo/client";
import {useAppState} from "../../state/AppStateContext";
import {setCategoryId, setPoints, setTimestamp} from "../../state/actions";

type Props = {
    text: string
    id: number
}
const GET_QUESTIONS = gql`
    query Query($getQuestionsId2: Int!) {
        getQuestions(id: $getQuestionsId2) {
            id
            texto
            points
            correctAnswer
            answer{
                id
                text
            }
        }
    }
`

export const ButtonCategory = ({text, id}: Props) => {
    const {dispatch, points} = useAppState();
    const navigate = useNavigate()
    const client = useApolloClient()
    const onClick = async () => {
        dispatch(setPoints(0))
        dispatch(setCategoryId(parseInt(String(id))))
        dispatch(setTimestamp(Date.now()))
        const questions = (await client.query({
            query: GET_QUESTIONS, variables: {
                getQuestionsId2: parseInt(String(id))
            }
        })).data.getQuestions
        console.log("onclick")
        console.log(questions)
        navigate(`/${text}`, {state: questions})
    }
    return (
        <Button onClick={onClick} style={'m-2 w-64 h-24 bg-green-700'}>
            <Text text={text}/>
        </Button>
    )
}
