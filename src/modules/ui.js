import logoSVG from "../icons/heart-half-outline.svg"

export default loadIcons

function loadIcons() {
    const logo = document.querySelector("#logo>img");
    logo.src = logoSVG;
    logo.classList.add("svg-logo");
    logo.alt = "Half filled heart icon";

    const todayIcon = document.querySelector("#today>img");
}