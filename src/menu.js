import hawaiianImage from "./assets/hawaiian-pizza.png";
import pepperoniImage from "./assets/pepperoni-pizza.png";

export function generateMenu() {
    const content = document.getElementById("content");

    const container = document.createElement("div");
    container.classList.add("container");

    generateHawaiian(container);

    generatePepperoni(container);
    
    content.appendChild(container);
}

function generateHawaiian(container) {
    const img = document.createElement("img");
    img.src = hawaiianImage;

    const text = document.createElement("div");
    text.classList.add("text");

    const textTitle = document.createElement("div");
    textTitle.classList.add("title");
    textTitle.textContent = " Pizza";

    const textBody = document.createElement("div");
    textBody.classList.add("body");
    textBody.textContent = "100% Mozzarella Cheese with Succulent Chicken Breast, Chicken Ham and Juicy Pineapple. Surfs Up!";

    text.appendChild(textTitle);
    text.appendChild(textBody);

    container.appendChild(img);
    container.appendChild(text);
}

function generatePepperoni(container) {
    const img = document.createElement("img");
    img.src = pepperoniImage;

    const text = document.createElement("div");
    text.classList.add("text");

    const textTitle = document.createElement("div");
    textTitle.classList.add("title");
    textTitle.textContent = "Pepperoni Pizza";

    const textBody = document.createElement("div");
    textBody.classList.add("body");
    textBody.textContent = "The all time favourite with 100% Mozzarella Cheese and generous portions of Beef Pepperoni";

    text.appendChild(textTitle);
    text.appendChild(textBody);

    container.appendChild(img);
    container.appendChild(text);
}