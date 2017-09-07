import { addTodo } from '../actions/todos'

function renderList(list) {
    const result = [];
    list.forEach(item => result.push(renderItem(item)))
    return result.join("");
}

function renderItem(item) {
    return `
        <li class="todo">
        ${item.text}
        <input type="checkbox" class="todo-check" />
        </li>
    `
}

function renderInput() {
    return `
        <input type="text" id="add-text" />
        <button type="button" id="add-btn">+</button>
    `
}

function renderFilters() {
    return `
        <label for="completed">Completed</label>
        <input type="checkbox" class="show-completed" id="completed" />
        <label for="active">Active</label>
        <input type="checkbox" class="show-active" id="active" />
        <label for="all">All</label>
        <input type="checkbox" class="show-all"  id="all" />
    `
}

export function render(store) {
    return [renderInput(), renderList(store.getState().todos), renderFilters()].reduce((pr, cur) => pr + cur)
}

export function bindEvents(store) {
    const EVENT_LIST = ['click', 'change']
    
    EVENT_LIST.forEach((event) => {
        document.body.addEventListener(event, (e) => {
            if(e.target.classList.contains('todo') && e.type == 'click') {
                alert('Click')
            }
    
            if(e.target.classList.contains('todo-check') && e.type == 'change') {
                alert('Change')
            }
    
            if(e.target.id === 'add-btn') {
                addTodoHandler(store)
            }
    
        })
    }, this)
}

function addTodoHandler(store) {
    const input = document.getElementById('add-text')
    store.dispatch(addTodo(input.value))
}

