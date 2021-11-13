import React, {Dispatch, ReactElement, SetStateAction, useState} from 'react'
import {Text} from '../atoms/Text'
import {ButtonAnswer} from "../molecules/ButtonAnswer";
import {useAppState} from "../../state/AppStateContext";

type Props = {
    questions: any[]
    questionId: any
    setQuestionId: any
    setCompleted: Dispatch<SetStateAction<boolean>>
}

export const FormQuestions = ({questions, questionId, setQuestionId,setCompleted}: Props): ReactElement => {

    const {points, name, categoryId} = useAppState()
    return (
        <div className={'flex flex-col h-full w-full'}>
            <div className={'flex h-1/4 items-end justify-center'}>
                <Text text={questions[questionId].texto}/>
                <Text style={'absolute right-10 top-10'}
                      text={`Nickname: ${name}, points: ${points}`}/>
            </div>
            <div className={'flex flex-wrap overflow-auto items-center justify-center justify-around w-full h-3/4'}>
                {questions[questionId].answer.map((e: any) => <ButtonAnswer
                    setCompleted={setCompleted}
                    questionLength={questions.length - 1}
                    pointsQ={questions[questionId].points}
                    correctAnswer={questions[questionId].correctAnswer} key={e.id}
                    setQuestionId={setQuestionId} questionId={questionId} text={e.text}
                    id={e.id}/>)
                }
            </div>
        </div>
    )
}
