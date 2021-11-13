import {Action, Category} from './actions'

export type AppState = {
    name: string
    points: number
    categories: Category[]
    categoryId: number
    timestamp: number
}

export const appStateReducer = (state: AppState, action: Action): AppState => {
    switch (action.type) {
        case "SET_NAME":
            return {...state, name: action.payload}
        case "SET_POINTS":
            return {...state, points: action.payload}
        case "SET_CATEGORIES":
            return {...state, categories: action.payload}
        case "SET_CATEGORYID":
            return {...state, categoryId: action.payload}
        case "SET_TIMESTAMP":
            return {...state, timestamp: action.payload}
        default:
            return state
    }
}
