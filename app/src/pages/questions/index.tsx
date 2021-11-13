import React, {ReactElement, useEffect, useState} from 'react'
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {FormQuestions} from "../../components/organisms/FormQuestions";
import {useAppState} from "../../state/AppStateContext";
import {Modal} from "../../components/molecules/Modal";
import {useFocus} from "../../utils/useFocus";
import {FormResults} from "../../components/organisms/FormResults";

export const Questions = (): ReactElement => {
    const [questionId, setQuestionId] = useState<number>(0)
    const [completed, setCompleted] = useState(false)
    const ref1 = useFocus()
    const questions = useLocation().state
    const navigate = useNavigate()
    const {name, points} = useAppState()
    useEffect(() => {
        ref1?.current?.classList.add("diego")
        if (!questions || name == "") {
            navigate('/')
        }
    }, [])
    return (
        <div ref={ref1}
             className={"bg-gradient-to-r from-blue-900 to-indigo-900 w-full h-full h-screen flex flex-col items-center justify-center"}>
            {questions && !completed && questions.length > questionId ?
                <FormQuestions questionId={questionId} setQuestionId={setQuestionId}
                               questions={questions} setCompleted={setCompleted}/> :
                <FormResults/>}
        </div>
    )
}
