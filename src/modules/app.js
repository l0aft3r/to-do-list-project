import { format } from "date-fns";
export default App

function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        e.name === "QuotaExceededError" &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }

class Project {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.todos = [];
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
        if (storageAvailable("localStorage")) {
            if (localStorage.getItem("projects")) {
                this.projects = JSON.parse(localStorage.getItem("projects"));
            }
          }
    }

    saveApp() {
        localStorage.setItem("projects", JSON.stringify(this.projects));
    }

    createProject(title, description = "") {
        this.projects.push(new Project(title, description));
        this.saveApp();
    }

    getProjects() {
        return this.projects;
    }

    getProject(index) {
        return this.getProjects()[index];
    }

    updateProject(index, title, description = "") {
        const project = this.projects[index];
        project.title = title;
        project.description = description;
        this.saveApp();
    }

    removeProject(index) {
        this.projects.splice(index, 1);
        this.saveApp();
    }

    createTodo(projectIndex, title, description = "", dueDate = undefined, priority = 'low') {
        if (dueDate) dueDate = format(dueDate, "dd/MM/yyyy");
        this.projects[projectIndex].todos.push(new Todo(title, description, dueDate, priority));
        this.saveApp();
    }

    getTodos(projectIndex) {
        return this.projects[projectIndex].todos;
    }

    getTodo(projectIndex, Index) {
        return this.projects[projectIndex].todos[Index];
    }

    updateTodo(projectIndex, index, title, description = "", dueDate = undefined, priority = 'low') {
        const todo = this.projects[projectIndex].todos[index];
        todo.title = title;
        todo.description = description;
        if (dueDate) todo.dueDate = format(dueDate, "dd/MM/yyyy");
        if (priority) todo.priority = priority;
        this.saveApp();
    }

    removeTodo(projectIndex, todoIndex) {
        this.projects[projectIndex].todos.splice(todoIndex, 1);
        this.saveApp();
    }
}