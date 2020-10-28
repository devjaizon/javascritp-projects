const modal = document.querySelector(".modal");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        modal.classList.toggle("none");
    });
});
