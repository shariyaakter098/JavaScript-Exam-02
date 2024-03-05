
console.log("myWork")
function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTodos(data))
}
loadTodos();


function displayTodos(data){
    const sectionId = document.getElementById('use')
    for(const todos of data){
       
        const div = document.createElement('div');
        div.classList.add('todo-style')
        div.innerHTML = `
        <h2>${todos.completed}</h2>
        <p>${todos.userId}</p>
        <h3>${todos.title}</h3>
     
        `;
        sectionId.appendChild(div);
        console.log(todos);
    }
}

