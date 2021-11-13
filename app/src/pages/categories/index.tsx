import React, {ReactElement, useEffect} from 'react'
import {useAppState} from "../../state/AppStateContext";
import {useNavigate} from "react-router-dom";
import {useQuery, useApolloClient, gql} from "@apollo/client";
import {FormCategories} from "../../components/organisms/FormCategories";


export const Categories = (): ReactElement => {
    const {name, points, dispatch} = useAppState();
    const navigate = useNavigate()
    useEffect(() => {
        if (name == "") {
            navigate('/')
        }
    }, [])
    return (
        <div
            className={"bg-gradient-to-r from-blue-900 to-indigo-900 w-full h-full h-screen flex flex-col items-center justify-center"}>
            <FormCategories/>
        </div>
    )
}
