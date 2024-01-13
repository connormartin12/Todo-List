import { allTasks, taskCategories } from './task';

function clearPage(parent) {
    parent.textContent = '';
}

function loadHomePage(parent) {
    // Create sidebar
    let sidebar = document.createElement('div');
    sidebar.id = 'sidebar';
    parent.appendChild(sidebar);

    // Create task list
    let taskListContainer = document.createElement('div');
    taskListContainer.id = 'task-list-container';
    parent.appendChild(taskListContainer);
}

function updateTaskCategories(activeCategory) {
    let sidebarContainer = document.getElementById('sidebar');
    sidebarContainer.textContent = '';
    let categories = document.createElement('ul');
    categories.classList.add('list');
    taskCategories.forEach(taskCategory => {
        let newCategory = document.createElement('li');
        newCategory.classList.add('category');
        if (taskCategory === activeCategory)
            newCategory.classList.add('category-active');
        newCategory.textContent = taskCategory;
        categories.appendChild(newCategory);
    });
    sidebarContainer.appendChild(categories);
}

function updateTaskList() {
    // Update task list to active category tab
    let taskListContainer = document.getElementById('task-list-container');
    taskListContainer.textContent = '';
    let taskList = document.createElement('ul');
    taskList.classList.add('list');
    taskList.id = 'task-list';
    allTasks.forEach(task => {
        let newTask = document.createElement('li');
        newTask.classList.add('task');
        newTask.textContent = task.title;
        taskList.appendChild(newTask);
    });
    taskListContainer.appendChild(taskList);
}

export { clearPage, loadHomePage, updateTaskList, updateTaskCategories };
