import pizzaAboutImage from "./assets/pizza-about.avif"

export function generateAbout() {
    const content = document.getElementById("content");
    
    const container = document.createElement("div");
    container.classList.add("container");
    
    const pizzaAboutImg = document.createElement("img");
    pizzaAboutImg.src = pizzaAboutImage;

    const text = document.createElement("div");
    text.classList.add("text");

    const textTitle = document.createElement("div");
    textTitle.classList.add("title");
    textTitle.textContent = "Contact us";

    const textBody = document.createElement("div");
    textBody.classList.add("body");
    textBody.textContent = "Phone: 1234 5678 Address: 123 Pizza Avenue";
    
    text.appendChild(textTitle);
    text.appendChild(textBody);

    container.appendChild(pizzaAboutImg);
    container.appendChild(text);
    
    content.appendChild(container);
}