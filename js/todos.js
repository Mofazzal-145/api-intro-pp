
function loadTodo() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => displayTodo(data))
}

function displayTodo(todos) {
    const todoContainer = document.getElementById('todos');
    for (const todo of todos){
        const div = document.createElement('div');
        div.classList.add('todos2');
        div.innerHTML = `
            <h2>${todo.title}</h2>
            <p>${todo.completed}</p>
        `;
        todoContainer.appendChild(div);
    }

}
