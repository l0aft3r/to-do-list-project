import logoSVG from "../icons/heart-half-outline.svg";
import todaySVG from "../icons/calendar-number-outline.svg";
import upcomingSVG from "../icons/calendar-outline.svg";
import createSVG from "../icons/add-outline.svg";
import getStartedSVG from "../icons/undraw_experience_design_re_dmqq.svg";

export default loadIcons
export {emptyMainInterface, getStarted}

function loadIcons() {
    const logo = document.querySelector("#logo>img");
    logo.src = logoSVG;
    logo.classList.add("svg-logo");
    logo.alt = "Half filled heart icon";

    const todayIcon = document.querySelector("#today>img");
    todayIcon.src = todaySVG;
    todayIcon.classList.add("svg-logo-h2");
    todayIcon.alt = "Calendar displaying 31 icon";

    const upcomingIcon = document.querySelector("#upcoming>img");
    upcomingIcon.src = upcomingSVG;
    upcomingIcon.classList.add("svg-logo-h2");
    upcomingIcon.alt = "Calendar icon";

    const createIcon = document.querySelector("#create>button>img");
    createIcon.src = createSVG;
    createIcon.classList.add("svg-logo-h2");
    createIcon.classList.add("icon");
    createIcon.alt = "Plus symbol icon";
}

function emptyMainInterface() {
    const body = document.querySelector("body");
    const mainInterface = document.querySelector("#main-interface");
    mainInterface.remove();
    mainInterface = document.createElement("div");
    mainInterface.id = "main-interface";
    body.appendChild(mainInterface);
}

function getStarted() {
    const mainInterface = document.querySelector("#main-interface");
    const graphic = document.createElement("img");
    graphic.src = getStartedSVG;

    const quote = document.createElement("h2");
    quote.textContent = "Every journey starts with a single step.";
    quote.classList.add("quote1");
    const quote2 = document.createElement("h2");
    quote2.classList.add("quote2");
    quote2.textContent = "Get Started."

    mainInterface.append(graphic, quote, quote2);

}