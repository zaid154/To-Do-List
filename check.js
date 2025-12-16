let btn = document.querySelector(".addBtn");
let input = document.querySelector("#Input");
let main = document.querySelector(".main");

let tasks = [];

function show() {
    main.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        main.innerHTML += `
            <div class="item">
                <span>${i + 1}</span>
                <span class="task">${tasks[i]}</span>
                <button  class="delete" onclick="del(${i})">Delete</button>
            </div>
        `;
    }
}


function add() {
    let value = input.value.trim();

    if (value === "") {
        alert("Enter task");
        return;
    }

    tasks.push(value);
    input.value = "";
    show();
}

function del(index) {
    tasks.splice(index, 1);
    show();
}


btn.addEventListener("click", add);

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        add();
    }
});

show();
