import { 
    addTodo as addTodoActionCreator, 
    toggleTodo as toggleTodoActionCreator,
    removeTodo as removeTodoActionCreator,
    toggleAll as toggleAllActionCreator,
    toggleActive as toggleActiveActionCreator,
    toggleCompleted as toggleCompletedActionCreator
} from '../actions/todos'

function renderList(list, filters) {
    const result = [];
    list.forEach(item => {
        switch(filters) {
            case 'active':
                if(!item.completed) result.push(renderItem(item))
                break
            case 'completed':
                if(item.completed) result.push(renderItem(item))
                break
            default:
                result.push(renderItem(item))
        }
    })
    return `<ul class="todos">${result.join('')}</ul>`;
}

function renderItem(item) {
    return `
        <li class="todo${item.completed? ' is-completed' : ''}" 
            data-text="${item.text}">
            <input type="checkbox" class="todo-check"
            ${item.completed? 'checked' : ''} />
            ${item.text}
            <button type="button" class="del-btn">-</button>
        </li>
    `
}

function renderInput() {
    return `
        <div class="input-group">
            <input type="text" id="add-text" autofocus />
            <button type="button" id="add-btn">+</button>
        </div>
    `
}

function renderFilters(filters) {
    return `
        <div class="filters">
            <label for="completed">All</label>
            <input type="checkbox" 
                id="all"
                ${filters === 'all' ? 'checked' : ''} />
            <label for="active">Active</label>
            <input type="checkbox" 
                id="active" 
                ${filters === 'active' ? 'checked' : ''} />
            <label for="all">Completed</label>
            <input type="checkbox" 
                id="completed" 
                ${filters === 'completed' ? 'checked' : ''} />
        </div>
    `
}

export function render(store) {
    const state = store.getState();
    return [renderInput(), renderList(state.todos, state.filters), renderFilters(state.filters)].reduce((pr, cur) => pr + cur)
}

export function bindEvents(store) {
    const EVENT_LIST = ['click', 'change', 'keydown']
    
    EVENT_LIST.forEach((event) => {
        document.body.addEventListener(event, (e) => {

            if(e.target.id === 'add-btn') {
                addTodo(store)
            }

            if(e.target.id === 'add-text' && e.type == 'keydown' && e.key == 'Enter') {
                addTodo(store)
            }

            if(e.target.classList.contains('del-btn') && e.type == 'click') {
                removeTodo(e.target, store)
            }

            if(e.target.classList.contains('todo-check') && e.type == 'change') {
                toggleTodo(e.target, store)
            }

            if(e.target.id === 'all' && e.type == 'change') {
                toggleAll(store)
            }

            if(e.target.id === 'active' && e.type == 'change') {
                toggleActive(store)
            }

            if(e.target.id === 'completed' && e.type == 'change') {
                toggleCompleted(store)
            }
    
        })
    }, this)
}

function addTodo(store) {
    const input = document.getElementById('add-text')
    store.dispatch(addTodoActionCreator(input.value))
}

function removeTodo(el, store) {
    store.dispatch(removeTodoActionCreator(el.closest('li').getAttribute('data-text')))
}

function toggleTodo(el, store) {
    store.dispatch(toggleTodoActionCreator(el.closest('li').getAttribute('data-text')))
}

function toggleAll(store) {
    store.dispatch(toggleAllActionCreator())
}

function toggleActive(store) {
    store.dispatch(toggleActiveActionCreator())
}

function toggleCompleted(store) {
    store.dispatch(toggleCompletedActionCreator())
}
