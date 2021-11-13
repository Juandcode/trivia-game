export type Category = {
    id: number
    name: string
}
export type Action = { type: 'SET_NAME', payload: string } | { type: 'SET_POINTS', payload: number } |
    { type: 'SET_CATEGORIES', payload: Category[] } | { type: 'SET_CATEGORYID', payload: number }

export const setName = (name: string): Action => {
    return {type: "SET_NAME", payload: name}
}

export const setCategories = (categories: Category[]): Action => {
    return {type: 'SET_CATEGORIES', payload: categories}
}
export const setPoints = (points: number): Action => {
    return {type: 'SET_POINTS', payload: points}
}
export const setCategoryId = (id: number): Action => {
    return {type: 'SET_CATEGORYID', payload: id}
}
