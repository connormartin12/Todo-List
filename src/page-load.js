import { allTasks, taskCategories } from './task';

function clearPage(parent) {
    parent.textContent = '';
}

function loadHomePage(parent) {
    // Create sidebar
    let sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    let categories = document.createElement('ul');
    categories.classList.add('list');
    taskCategories.forEach(taskCategory => {
        let newCategory = document.createElement('li');
        newCategory.textContent = taskCategory;
        categories.appendChild(newCategory);
    });
    sidebar.appendChild(categories);
    parent.appendChild(sidebar);

    // Create task list
    let taskListContainer = document.createElement('div');
    taskListContainer.classList.add('task-list');
    parent.appendChild(taskListContainer);
}

function updateHomePage(parent) {
    // Update task list to active category tab
    let taskContainer = document.querySelector('.task-list');
    taskContainer.textContent = '';
    let tasks = document.createElement('ul');
    tasks.classList.add('list');
    allTasks.forEach(task => {
        let newTask = document.createElement('li');
        newTask.textContent = task.title;
        tasks.appendChild(newTask);
    });
    taskContainer.appendChild(tasks);
    parent.appendChild(taskContainer);
}

export { clearPage, loadHomePage, updateHomePage };
