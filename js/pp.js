
function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}


function displayUsers(data) {
    const ul = document.getElementById('users');
    for (const user of data){
        const li = document.createElement('li');
        li.innerText = `name: ${user.name}, user email: ${user.email} user id: ${user.id} , user name: ${user.username} `;
        ul.appendChild(li);
    }
}


