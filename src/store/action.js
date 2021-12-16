//Action type
export const ADD_LINE = 'ADD_LINE'
export const REMOVE_LINE = 'REMOVE_LINE'


//Action Creator
export const addToLine = (content) => ({
    type: ADD_LINE,
    payload: content
})