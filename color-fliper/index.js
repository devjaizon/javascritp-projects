document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button");
    const body = document.querySelector("body");
    const display = document.querySelector("span");

    const hexaItems = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
    ];

    const hexa = () => {
        const items = [];
        for (let i = 0; i < 6; i++) {
            items.push(hexaItems[Math.floor(Math.random() * hexaItems.length)]);
        }
        body.style.backgroundColor = "#" + items.join("");
        display.textContent = "#" + items.join("");
    };

    hexa();

    button.addEventListener("click", () => {
        hexa();
    });
    /* button.addEventListener("click", () => {
        body.style.backgroundColor = `RGB(${Math.floor(
            Math.random() * 256
        )},${Math.floor(Math.random() * 256)},${Math.floor(
            Math.random() * 256
        )})`;
        display.textContent = body.style.backgroundColor;
    }); */
});
