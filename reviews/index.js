// Creating the reviews
const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

//Targetting components
const person = document.querySelector("#review__personName");
const job = document.querySelector("#review__personProfession");
const image = document.querySelector("img");
const text = document.querySelector(".review__body");
//Targetting buttons
const random = document.querySelector("button");
const control = document.querySelectorAll("i");

let count = 0;
//function to render the review in the DOM
const render = () => {
    person.innerText = reviews[count].name;
    job.innerText = reviews[count].job;
    image.setAttribute("src", reviews[count].img);
    text.innerText = reviews[count].text;
};
//Initialize the reviews
window.addEventListener("DOMContentLoaded", render());

for (let i = 0; i < control.length; i++) {
    control[i].addEventListener("click", () => {
        if (control[i].id === "next") {
            count < reviews.length ? count++ : (count = 0);
        } else {
            count >= 1 ? count-- : (count = reviews.length - 1);
        }
        render();
    });
}

random.addEventListener("click", () => {
    let newCount = count;
    while (newCount === count) {
        newCount = Math.floor(Math.random() * reviews.length);
    }
    count = newCount;
    render();
});
