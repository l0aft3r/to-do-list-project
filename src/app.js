import { format } from "date-fns";

class Project {
    constructor(title, description, dueDate = none) {
        this.title = title;
        this.description = description;
        this.todos = [];
        this.dueDate = dueDate;
    }
}

class Todo {
    constructor(title, description, dueDate = none, notes = '', priority = 1) {
        this.title = title;
        this.description = description;
        this.notes = notes;
        this.priority = priority;
        this.dueDate = dueDate;
        this.checked = false;
    }
}

class App {
    constructor() {
        this.projects = [];
    }

    createProject(title, description, dueDate = none) {
        if (dueDate) dueDate = format(dueDate, "dd/MM/yyyy");
        this.projects.append(new Project(title, description, dueDate));
    }

    getProjects() {
        return this.projects;
    }

    getProject(index) {
        return this.getProjects()[index];
    }

    updateProject(index, title, description, dueDate = none) {
        const project = this.projects[index];
        project.title = title;
        project.description = description;
        if (dueDate) dueDate = format(dueDate, "dd/MM/yyyy");
        project.dueDate = dueDate;
    }

    removeProject(index) {
        this.projects.splice(index, 1);
    }

    createTodo(projectIndex, title, description, dueDate = none, notes = '', priority = 1) {
        if (dueDate) dueDate = format(dueDate, "dd/MM/yyyy");
        this.projects[projectIndex].todos.append(new Todo(title, description, dueDate, notes, priority));
    }

    getTodos(projectIndex) {
        return this.projects[projectIndex].todos;
    }

    getTodo(projectIndex, Index) {
        return this.projects[projectIndex].todos[Index];
    }

    updateTodo(projectIndex, index, title, description, dueDate = none, notes = none, priority = none) {
        const Todo = this.projects[projectIndex].todos[index];
        Todo.title = title;
        Todo.description = description;
        if (dueDate) Todo.dueDate = format(dueDate, "dd/MM/yyyy");
        if (notes) Todo.notes = notes;
        if (priority) Todo.priority = priority;
    }

    removeTodo(projectIndex, todoIndex) {
        this.projects[projectIndex].todos.splice(todoIndex, 1);
    }
}