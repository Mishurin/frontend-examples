export const ACTIONS = {
    ADD_TODO: 'ADD_TODO'
}

export function addTodo(text) {
    return {
        type: ACTIONS.ADD_TODO,
        payload: {
            completed: false,
            text: text
        }
    }
}