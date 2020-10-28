const video = document.querySelector("video");
const btn = document.querySelector(".switch__button");
const preloader = document.querySelector(".preloader");

btn.addEventListener("click", () => {
    !btn.classList.contains("slide")
        ? (btn.classList.add("slide"), video.pause())
        : (btn.classList.remove("slide"), video.play());
});

window.addEventListener("load", () => {
    setTimeout(() => {
        preloader.setAttribute("style", "visibility: hidden");
        video.play();
    }, 1000);
});
