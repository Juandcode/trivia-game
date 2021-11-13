import React, {ReactElement} from 'react'
import {useQuery, useApolloClient, gql} from "@apollo/client";
import {Text} from '../atoms/Text'
import {ButtonCategory} from "../molecules/ButtonCategory";
import {useAppState} from "../../state/AppStateContext";
import {useNavigate} from "react-router-dom";
import {setCategories} from "../../state/actions";

const GET_CATEGORIES = gql`
    query{
        getCategories{
            id
            name
        }
    }
`

export const FormCategories = (): ReactElement => {
    const {dispatch, categories} = useAppState()
    return (
        <div className={'flex flex-wrap overflow-auto items-center justify-around w-full'}>
            {categories.map((e: any) => <ButtonCategory key={e.id} id={e.id} text={e.name}/>)}
        </div>
    )
}
