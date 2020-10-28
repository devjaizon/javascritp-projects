const btn = document.querySelectorAll(".btn");
const articles = document.querySelectorAll(".body__item");

btn.forEach((item) => {
    item.addEventListener("click", (e) => {
        id = e.target.getAttribute("data-id");
        articles.forEach((article) => article.classList.remove("active"));
        btn.forEach((item) => item.classList.remove("btn-active"));
        const article = document.querySelector(`#${id}`);

        e.target.classList.add("btn-active");
        article.classList.add("active");
    });
});
