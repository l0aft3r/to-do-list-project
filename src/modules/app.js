import { format } from "date-fns";
export default App

class Project {
    constructor(title, description, dueDate = undefined) {
        this.title = title;
        this.description = description;
        this.todos = [];
        this.dueDate = dueDate;
    }
}

class Todo {
    constructor(title, description, dueDate = undefined, priority = 'Low') {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
        this.checked = false;
    }
}

class App {
    constructor() {
        this.projects = [];
    }

    createProject(title, description = "", dueDate = undefined) {
        if (dueDate) dueDate = format(Date(dueDate), "dd/MM/yyyy");
        this.projects.push(new Project(title, description, dueDate));
    }

    getProjects() {
        return this.projects;
    }

    getProject(index) {
        return this.getProjects()[index];
    }

    updateProject(index, title, description = "", dueDate = undefined) {
        const project = this.projects[index];
        project.title = title;
        project.description = description;
        if (dueDate) dueDate = format(dueDate, "dd/MM/yyyy");
        project.dueDate = dueDate;
    }

    removeProject(index) {
        this.projects.splice(index, 1);
    }

    createTodo(projectIndex, title, description = "", dueDate = undefined, priority = 'low') {
        if (dueDate) dueDate = format(dueDate, "dd/MM/yyyy");
        this.projects[projectIndex].todos.push(new Todo(title, description, dueDate, priority));
    }

    getTodos(projectIndex) {
        return this.projects[projectIndex].todos;
    }

    getTodo(projectIndex, Index) {
        return this.projects[projectIndex].todos[Index];
    }

    updateTodo(projectIndex, index, title, description = "", dueDate = undefined, priority = 'low') {
        const Todo = this.projects[projectIndex].todos[index];
        Todo.title = title;
        Todo.description = description;
        if (dueDate) Todo.dueDate = format(dueDate, "dd/MM/yyyy");
        if (priority) Todo.priority = priority;
    }

    removeTodo(projectIndex, todoIndex) {
        this.projects[projectIndex].todos.splice(todoIndex, 1);
    }
}