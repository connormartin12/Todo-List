let allTasks = [];
let taskCategories = ['All Tasks', 'Today', 'Projects'];

class Task {
    constructor(title) {
        this.title = title;
        this.description = undefined;
        this.dueDate = undefined;
        this.priority = 'normal';
        allTasks.push(this);
    }

    updateTitle(newTitle) {
        this.title = newTitle;
    }

    updateDescription(newDescription) {
        this.description = newDescription;
    }

    updateDueDate(newDueDate) {
        // Check dueDate format
        this.dueDate = newDueDate;
    }

    updatePriority(newPriority) {
        if (newPriority === ('low' || 'normal'|| 'high'))
            this.priority = newPriority;
        else
            console.error('Failed to update priority. Priority must be of type low, normal or high');
    }
}

allTasks = [new Task('Testing'), new Task('another')];

export { Task, allTasks, taskCategories };
