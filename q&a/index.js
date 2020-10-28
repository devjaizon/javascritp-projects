const button = document.querySelectorAll("i");
const allAnswers = document.querySelectorAll(".answer");

button.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        //check action to perform
        let action = "";
        e.target.classList.value === "fa fa-plus"
            ? (action = "minus")
            : (action = "plus");
        //target the answer
        const answer = e.target.parentNode.parentNode.children[1];
        //initialize all answers and buttons to their initial value
        allAnswers.forEach((item) => {
            console.log((item.classList = "answer"));
        });
        button.forEach((item) => {
            item.classList = "fa fa-plus";
        });
        //change clicked button
        e.target.classList = `fa fa-${action}`;
        //change answer display accordling
        action === "minus" && answer.classList.add("show");
    });
});
