import React, {Dispatch, FC, SetStateAction} from 'react'
import {Button} from '../atoms/Button'
import {Text} from '../atoms/Text'
import {useNavigate} from "react-router-dom";
import {useMutation, useApolloClient, gql} from "@apollo/client";
import {useAppState} from "../../state/AppStateContext";
import {setPoints} from "../../state/actions";

type Props = {
    text: string
    id: number
    setQuestionId: Dispatch<SetStateAction<number>>
    questionId: number
    correctAnswer: number
    pointsQ: number
    questionLength: number
    setCompleted: Dispatch<SetStateAction<boolean>>
}

const ADD_USER = gql`
    mutation($name: String!, $categoriaId: Int!, $points: Int!){
        addUser(name: $name, categoriaId: $categoriaId, points: $points) {
            categoriaId
            name
            totalPoints
        }
    }`

export const ButtonAnswer = ({
                                 text,
                                 id,
                                 setQuestionId,
                                 questionId,
                                 correctAnswer,
                                 questionLength,
                                 pointsQ,
                                 setCompleted,
                             }: Props) => {

    const {points, name, categoryId, dispatch} = useAppState()

    const [addUser, {loading, error, data}] = useMutation(ADD_USER, {
        onCompleted: (data) => {
            console.log(data)
        }
    })

    const finishTrivia = async (correct: boolean) => {
        if (questionLength == questionId) {
            const totalP = correct ? points + pointsQ : points
            await addUser({
                variables: {name, categoriaId: categoryId, points: totalP}
            })
            setCompleted(true)
        }
    }

    const onClick = async () => {
        setQuestionId(questionId + 1)
        console.log(id)
        if (id == correctAnswer) {
            console.log("correct")
            dispatch(setPoints(points + pointsQ))
            await finishTrivia(true)
        } else {
            await finishTrivia(false)
        }
    }
    return (
        <Button onClick={onClick} style={'m-2 w-64 h-24 bg-yellow-700'}>
            <Text text={text}/>
        </Button>
    )
}
