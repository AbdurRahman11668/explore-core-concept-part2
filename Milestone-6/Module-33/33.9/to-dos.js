function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTodos(data))
}
loadTodos()

function displayTodos(todos){
    const todoContainer = document.getElementById('todo-container');
    for(const todo of todos){
        const todoDiv = document.createElement('div');
        todoDiv.innerHTML = `
            <h3>Title: ${todo.title}</h3>
            <h3>User Id: ${todo.userId}</h3>
            <p>Is completer: ${todo.completed === true ? 'completed': 'not completed'}</p>
        `
        todoContainer.appendChild(todoDiv);
    }
}