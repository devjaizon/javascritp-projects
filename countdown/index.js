const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const futureDate = new Date(2020, 11, 5, 12, 30, 0);
const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const weekDay = weekDays[futureDate.getDay()];
const date = futureDate.getDate();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const seconds = futureDate.getSeconds();

const cards = document.querySelectorAll(".card");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".card_number");

const addZero = (i) => {
    if (i < 10) {
        return "0" + i.toString();
    }
    return i;
};

document.querySelector(".full-date").innerText = `${weekDay}, ${addZero(
    date
)} ${month} ${year}, ${addZero(hours)}:${addZero(minutes)}`;

const setRemainningTime = () => {
    const current = new Date();
    const t = futureDate.getTime() - current.getTime();

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    const days = Math.floor(t / oneDay);
    const hours = Math.floor((t % oneDay) / oneHour);
    const minutes = Math.floor((t % oneHour) / oneMinute);
    const seconds = Math.floor((t % oneMinute) / 1000);

    const values = [days, hours, minutes, seconds];

    items.forEach((item, index) => {
        item.innerText = addZero(values[index]);
    });

    if (t <= 0) {
        cards.forEach((item) => {
            item.classList.add("hide");
        });
        deadline.classList.add("show");
    }
};

const timer = setInterval(setRemainningTime, 1000);
setRemainningTime();
