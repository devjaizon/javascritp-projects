const button = document.querySelector("button");
const links = document.querySelector("ul");
const link = document.querySelectorAll("li");

button.addEventListener("click", () => {
    links.classList.toggle("show__links");
});

link.forEach((item) => {
    item.addEventListener("click", () => {
        links.classList.toggle("show__links");
    });
});
