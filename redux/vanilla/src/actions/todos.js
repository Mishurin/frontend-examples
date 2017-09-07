export const ACTIONS = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    REMOVE_TODO: 'REMOVE_TODO',
    TOGGLE_ALL: 'TOGGLE_ALL',
    TOGGLE_ACTIVE: 'TOGGLE_ACTIVE',
    TOGGLE_COMPLETED: 'TOGGLE_COMPLETED'
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

export function removeTodo(text) {
    return {
        type: ACTIONS.REMOVE_TODO,
        payload: {
            text: text
        }
    }
}

export function toggleTodo(text) {
    return {
        type: ACTIONS.TOGGLE_TODO,
        payload: {
            text: text
        }
    } 
}

export function toggleAll() {
    return {
        type: ACTIONS.TOGGLE_ALL
    }
}

export function toggleActive() {
    return {
        type: ACTIONS.TOGGLE_ACTIVE
    }
}

export function toggleCompleted() {
    return {
        type: ACTIONS.TOGGLE_COMPLETED
    }
}