const display = document.querySelector("span");
const buttons = document.querySelectorAll("button");
let counter = 0;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        buttons[i].id === "increase"
            ? counter++
            : buttons[i].id === "decrease"
            ? counter--
            : (counter = 0);

        counter > 0
            ? (display.style.color = "green")
            : counter < 0
            ? (display.style.color = "red")
            : (display.style.color = "black");

        display.innerText = counter;
    });
}
