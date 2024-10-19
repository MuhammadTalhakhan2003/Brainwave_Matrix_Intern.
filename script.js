document.getElementById('todo-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const input = document.getElementById('todo-input');
    const task = input.value.trim();
    if (task !== '') {
        addTask(task);
        input.value = '';
        showNotification('Task added successfully!');
    }
});

function addTask(task) {
    const ul = document.getElementById('todo-list');
    const li = document.createElement('li');
    li.textContent = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        ul.removeChild(li);
        showNotification('Task deleted.');
    });

    li.addEventListener('click', () => {
        li.classList.toggle('completed');
        showNotification(li.classList.contains('completed') ? 'Task completed!' : 'Task marked as incomplete.');
    });

    li.appendChild(deleteBtn);
    ul.appendChild(li);
}

document.getElementById('clear-all').addEventListener('click', () => {
    document.getElementById('todo-list').innerHTML = '';
    showNotification('All tasks cleared.');
});

function showNotification(message) {
    const notification = document.querySelector('.notification');
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);
}
