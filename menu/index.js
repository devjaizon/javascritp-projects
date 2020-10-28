const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

const all = document.querySelector("#all");
const breakfast = document.querySelector("#breakfast");
const lunch = document.querySelector("#lunch");
const shakes = document.querySelector("#shakes");

const menuItems = document.getElementsByClassName("menu_items")[0];

const showItems = (allItems) => {
    menuItems.innerHTML = "";

    allItems.forEach((item) => {
        const newItem = document.createElement("div");
        newItem.classList.add("item");
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image_container");
        const itemImage = document.createElement("img");
        itemImage.setAttribute("src", item.img);
        itemImage.classList.add("item_image");
        const itemInfo = document.createElement("div");
        itemInfo.classList.add("item_info");
        const itemInfoHeader = document.createElement("div");
        itemInfoHeader.classList.add("item_infoHeader");
        const headerTitle = document.createElement("h3");
        headerTitle.classList.add("header_title");
        headerTitle.innerText = item.title;
        const headerPrice = document.createElement("h3");
        headerPrice.classList.add("header_price");
        headerPrice.innerText = `$${item.price}`;
        const itemInfoText = document.createElement("p");
        itemInfoText.classList.add("item_infoText");
        itemInfoText.innerText = item.desc;

        itemInfoHeader.appendChild(headerTitle);
        itemInfoHeader.appendChild(headerPrice);
        itemInfo.appendChild(itemInfoHeader);
        itemInfo.appendChild(itemInfoText);
        imageContainer.appendChild(itemImage);
        newItem.appendChild(imageContainer);
        newItem.appendChild(itemInfo);

        menuItems.appendChild(newItem);
    });
};

showItems(menu);

all.addEventListener("click", () => {
    showItems(menu);
});

breakfast.addEventListener("click", () => {
    const allBreakfast = menu.filter((item) => item.category === "breakfast");
    showItems(allBreakfast);
});

lunch.addEventListener("click", () => {
    const allLunch = menu.filter((item) => item.category === "lunch");
    showItems(allLunch);
});

shakes.addEventListener("click", () => {
    const allShakes = menu.filter((item) => item.category === "shakes");
    showItems(allShakes);
});
