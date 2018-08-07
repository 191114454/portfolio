function onAddClick() {
    let textbox = document.querySelector("input");

    let todoBtn = document.createElement("button");
    todoBtn.innerText = textbox.value;
    todoBtn.classList.add("todo-btn");
    document.querySelector(".container").appendChild(todoBtn);

    textbox.value = '';

    todoBtn.addEventListener('click', function() {
        todoBtn.parentElement.removeChild(todoBtn);
    });
};
let addBtn = document.querySelector("button");
addBtn.addEventListener('click', onAddClick);

let textbox = document.querySelector("input");
textbox.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        onAddClick();
    }
});