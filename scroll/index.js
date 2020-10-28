const links = document.querySelectorAll(".links a");
const btnToggle = document.querySelector(".nav-toggle");
const linkCont = document.querySelector(".links");
const scrollLinks = document.querySelectorAll(".scroll-link");
const topLink = document.querySelector(".top-link");
const nav = document.querySelector("nav");
const date = document.querySelector("#date");

/* Setting the date on the footer */
date.innerHTML = new Date().getFullYear();

/* Functions for togling the nav  */
const toggleNav = () => {
    const linkContHeight = linkCont.getBoundingClientRect().height;
    let linkHeight = 0;
    links.forEach((link) => {
        linkHeight += link.getBoundingClientRect().height;
    });

    linkContHeight === 0
        ? (linkCont.style.height = linkHeight + "px")
        : toggleNavOff();
};
// the content of this function could be implemented in toggleNav directly
// but it is needed in 2 other event listeners for only toggling the nav off
// so it was decided that it would be a standalone function
const toggleNavOff = () => {
    window.innerWidth <= 780
        ? (linkCont.style.height = 0 + "px")
        : (linkCont.style.height = 80 + "px");
};

// event listeners for toggling the nav
//-- toggling the nav on bars click
btnToggle.addEventListener("click", toggleNav);
//-- toggling the nav off on scroll
//-- also toggling the class fixed-nav to the nav element making it fixed and giving it a bg color (it has a position of absolute by default and it is also transparent on larger screens)
window.addEventListener("scroll", () => {
    toggleNavOff();
    const scrollHeight = window.pageYOffset;
    const navHeight = nav.getBoundingClientRect().height;

    // toggles the fixed nav and back-to-top button
    scrollHeight > navHeight
        ? (nav.classList.add("fixed-nav"),
          (topLink.style.visibility = "visible"))
        : (nav.classList.remove("fixed-nav"),
          (topLink.style.visibility = "hidden"));
});

// this set an event listener for all buttons with the class scroll-link
// it makes the page scroll to that link and also toggles the nav off
scrollLinks.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.target.getAttribute("href");
        const element = document.querySelector(id);
        let position = element.offsetTop;
        const navHeight = nav.getBoundingClientRect().height;
        window.scrollTo({
            left: 0,
            top: position - navHeight,
        });
        toggleNavOff();
    });
});
