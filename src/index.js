import "./style.css";
import { generateHome } from "./home.js";
import { generateMenu } from "./menu.js";
import { generateAbout } from "./about.js";

generateHome();

const content = document.getElementById("content");

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        clearTab();
        switch (button.className) {
            case "home":
                generateHome();
                break;
            case "menu":
                generateMenu();
                break;
            case "about":
                generateAbout();
                break;
        }
    })
})

function clearTab() {
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }
}