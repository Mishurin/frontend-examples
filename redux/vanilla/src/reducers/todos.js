import { ACTIONS } from '../actions/todos'

const MOCK_TODOS = [
    {
        text: 'Todo 1',
        completed: false
    },
    {
        text: 'Todo 2',
        completed: false,
    }
]

const initialState = {
    todos: [...MOCK_TODOS]
}

export function todos(state = initialState, action) {
    switch(action.type) {
        case ACTIONS.ADD_TODO:
            return { ...state, todos: [...state.todos].concat(action.payload) }
        default:
            return state
    }
}