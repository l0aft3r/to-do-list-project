import App from "./modules/app.js";
import loadIcons from "./modules/ui.js";
import { emptyMainInterface, getStarted } from "./modules/ui.js";
import "./styles/styles.css";

const Application = new App();

//Make Application available for testing in web-tools console
window.Application = Application;

loadIcons();

getStarted();