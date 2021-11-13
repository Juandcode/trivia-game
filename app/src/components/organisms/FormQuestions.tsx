import React, {Dispatch, ReactElement, SetStateAction, useState} from 'react'
import {Text} from '../atoms/Text'
import {ButtonAnswer} from "../molecules/ButtonAnswer";
import {useAppState} from "../../state/AppStateContext";
import {setPoints, setTimestamp} from "../../state/actions";
import {gql, useMutation} from "@apollo/client";

type Props = {
    questions: any[]
    questionId: any
    setQuestionId: any
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

export const FormQuestions = ({questions, questionId, setQuestionId, setCompleted}: Props): ReactElement => {

    const {points, name, categoryId, timestamp, dispatch} = useAppState()

    const [addUser, {loading, error, data}] = useMutation(ADD_USER, {
        onCompleted: (data) => {
            console.log(data)
        }
    })

    const finishTrivia = async (correct: boolean) => {
        if (questions.length - 1 == questionId) {
            const totalP = correct ? points + questions[questionId].points : points
            dispatch(setTimestamp(Date.now() - timestamp))
            await addUser({
                variables: {name, categoriaId: categoryId, points: totalP}
            })
            setCompleted(true)
        }
    }
    const onClick = (id: number) => async () => {
        setQuestionId(questionId + 1)
        console.log(id)
        if (id == questions[questionId].correctAnswer) {
            console.log("correct")
            dispatch(setPoints(points + questions[questionId].points))
            await finishTrivia(true)
        } else {
            await finishTrivia(false)
        }
    }

    return (
        <div className={'flex flex-col h-full w-full'}>
            <div className={'flex h-1/4 items-end justify-center'}>
                <Text text={questions[questionId].texto}/>
                <Text style={'absolute right-10 top-10'}
                      text={`Nickname: ${name}, points: ${points}`}/>
            </div>
            <div className={'flex flex-wrap overflow-auto items-center justify-center justify-around w-full h-3/4'}>
                {questions[questionId].answer.map((e: any) => <ButtonAnswer
                    onClick={onClick(e.id)}
                    text={e.text}/>)}
            </div>
        </div>
    )
}
