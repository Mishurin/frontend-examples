import { createStore } from 'redux'
import { todos } from './reducers/todos'
import { render, bindEvents } from './view/app'

const appStore = createStore(todos)

bindEvents(appStore)

const root = document.getElementById('root')

function draw(root, store, renderFn) {
    root.innerHTML = renderFn(store)
}

draw(root, appStore, render)


appStore.subscribe(() => draw(root, appStore, render))