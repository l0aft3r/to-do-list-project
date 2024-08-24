import App from "./modules/app.js";
import loadIcons, { todoMainInterfaceSetup } from "./modules/ui.js";
import { emptyMainInterface, getStarted, createProjectDialog, createToDoDialog, closeDialog, getValues, createProject, removeProject, unselect } from "./modules/ui.js";
import "./styles/styles.css";

const Application = new App();

//Make Application available for testing in web-tools console
window.Application = Application;

loadIcons();

getStarted();

const createProjectBtn = document.querySelector("#create-btn");
const cancelDialogBtn = document.querySelector("#project-cancel");
const createDialogBtn = document.querySelector("#createProjectBtn");
const body = document.querySelector("body");
const form = document.querySelector("form");
const projects = document.querySelector("#projects");

createProjectBtn.addEventListener("click", () => {
    createProjectDialog();
})

cancelDialogBtn.addEventListener("click", (e) => {
    e.preventDefault();
    closeDialog();
})

createDialogBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const values = getValues();
    if (form.id == "createProject") {
        Application.createProject(values.title, values.description);
        createProject(Application.getProject(Application.getProjects().length - 1));
    } else if (form.id == "createToDo") {
        Application.createTodo(Array.from(projects.children).indexOf(document.querySelector(".selected"))-1, values.title, values.description, values.dueDate, values.priority);
        emptyMainInterface();
        todoMainInterfaceSetup(Application.getProject(Array.from(projects.children).indexOf(document.querySelector(".selected"))-1));
    }
    closeDialog();
    form.reset();
})

projects.addEventListener("click", (e) => {
    if (e.target.nodeName == "IMG" && e.target.parentElement.id == "") {
        Application.removeProject(Array.from(projects.children).indexOf(e.target.parentElement.parentElement)-1);
        removeProject(e.target.parentElement.parentElement);
        emptyMainInterface();
        getStarted();
        unselect();
    } else if ([...e.target.classList].includes("project")) {
        emptyMainInterface();
        unselect();
        e.target.classList.add("selected");
        todoMainInterfaceSetup(Application.getProject(Array.from(projects.children).indexOf(e.target)-1));
    }
})

body.addEventListener("click", (e) => {
    if (e.target.id == "createTodoBtn") {
        createToDoDialog();
    }
})