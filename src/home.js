import pizzaHomeImage from "./assets/pizza-home.avif";

export function generateHome() {
    const content = document.getElementById("content");
    
    const container = document.createElement("div");
    container.classList.add("container");
    
    const pizzaHomeImg = document.createElement("img");
    pizzaHomeImg.src = pizzaHomeImage;

    const text = document.createElement("div");
    text.classList.add("text");

    const textTitle = document.createElement("div");
    textTitle.classList.add("title");
    textTitle.textContent = "Pizza Restaurant";

    const textBody = document.createElement("div");
    textBody.classList.add("body");
    textBody.textContent = "Welcome to the homepage of RYZZA! Your local Italian restaurant serving all your pizza needs!";
    
    text.appendChild(textTitle);
    text.appendChild(textBody);

    container.appendChild(pizzaHomeImg);
    container.appendChild(text);
    
    content.appendChild(container);
}