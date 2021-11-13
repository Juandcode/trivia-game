import React, {createContext, FC, useContext, Dispatch, useReducer, ReactElement} from 'react'
import {AppState} from "./appStateReducer";
import {appStateReducer} from "./appStateReducer";
import {Action, Category} from "./actions";
import {Categories} from "../pages/categories";

const AppStateContext = createContext({} as AppStateContextProps)

type AppStateContextProps = {
    name: string
    points: number
    categories: Category[]
    categoryId: number
    dispatch: Dispatch<Action>
    timestamp: number
}
export const AppStateProvider: FC = ({children}): ReactElement => {
    const [state, dispatch] = useReducer(appStateReducer, appState)
    const {name, points, categories, categoryId, timestamp} = state
    return (
        <AppStateContext.Provider value={{name, points, categories, categoryId, dispatch, timestamp}}>
            {children}
        </AppStateContext.Provider>
    )
}

export const useAppState = () => {
    return useContext(AppStateContext)
}

const appState: AppState = {
    name: "",
    points: 0,
    categories: [],
    categoryId: 0,
    timestamp: 0
}
