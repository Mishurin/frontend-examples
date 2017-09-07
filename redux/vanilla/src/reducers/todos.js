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
    todos: [...MOCK_TODOS],
    filters: 'all'
}

export function todos(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return { ...state, todos: [...state.todos].concat(action.payload) }
        case ACTIONS.TOGGLE_TODO:
            return { ...state, todos: getTodosWithToggledTodo(action.payload.text, state.todos) }
        case ACTIONS.REMOVE_TODO:
            return { ...state, todos: getTodoWithoutRemovedTodo(action.payload.text, state.todos) }
        case ACTIONS.TOGGLE_ALL:
            return { ... state, filters: 'all'}
        case ACTIONS.TOGGLE_ACTIVE:
            return { ... state, filters: 'active'}
        case ACTIONS.TOGGLE_COMPLETED:
            return { ... state, filters: 'completed'}
        default:
            return state
    }
}

function getTodosWithToggledTodo(text, todos) {
    return todos.map(todo => {
        if (todo.text === text) {
            return { text: todo.text, completed: !todo.completed }
        } else {
            return { ...todo }
        }
    })
}

function getTodoWithoutRemovedTodo(text, todos) {
    const res = []
    todos.forEach((todo) =>  {
        if (todo.text !== text) {
            res.push({ ...todo })
        }
    }, this)
    return res
}

