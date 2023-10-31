const taskInput = document.getElementById('taskInput');
const pendingTasksList = document.getElementById('pendingTasks');
const completedTasksList = document.getElementById('completedTasks');
const pendingTasksDiv = document.getElementById('pendingTasksDiv');
const completedTasksDiv = document.getElementById('completedTasksDiv');

function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        const completeButton = document.createElement('button');
        const deleteButton = document.createElement('button');
        
        taskItem.textContent = taskText;
        completeButton.textContent = 'Completar';
        deleteButton.textContent = 'Eliminar';
        
        completeButton.addEventListener('click', () => {
            moveTask(taskItem, pendingTasksList, completedTasksList);
        });
        
        deleteButton.addEventListener('click', () => {
            taskItem.remove();
        });
        
        taskItem.appendChild(completeButton);
        taskItem.appendChild(deleteButton);
        
        pendingTasksList.appendChild(taskItem);
        
        taskInput.value = '';
    }
}

function moveTask(taskItem, fromList, toList) {
    fromList.removeChild(taskItem);
    toList.appendChild(taskItem);
}

function showPendingTasks() {
    pendingTasksDiv.style.display = 'block';
    completedTasksDiv.style.display = 'none';
}

function showCompletedTasks() {
    pendingTasksDiv.style.display = 'none';
    completedTasksDiv.style.display = 'block';
}

// Mostrar las tareas pendientes por defecto
showPendingTasks();