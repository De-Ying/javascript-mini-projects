const inputBox = $('#input-box');
const addBtn = $('#add-btn');
const todoList = $('#todo-list');
const clearBtn = $('#clear-btn');

function showAlert(message) {
    alert(message);
}

function createTodoItem(task) {
    const li = $('<li>').text(task);
    const span = $('<span>').text("\u00d7").appendTo(li);
    return li;
}

function saveData() {
    localStorage.setItem("data", todoList.html());

    toggleClearButton();
}

function showTask() {
    todoList.html(localStorage.getItem("data") || "");
}

addBtn.on('click', () => {
    addTask();
});

inputBox.on('keydown', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

clearBtn.on('click', () => {
    clearTasks();
});

function addTask() {
    const task = inputBox.val().trim();

    if (!task) {
        showAlert("Bạn phải viết thứ gì đó!");
        return;
    }

    const todoItem = createTodoItem(task);
    todoList.append(todoItem);
    
    inputBox.val("");
    saveData();
}

function clearTasks() {
    todoList.empty(); 
    saveData();
}

function toggleClearButton() {
    clearBtn.toggle(todoList.children().length > 0);
}

todoList.on("click", (e) => {
    const target = $(e.target);

    if (target.is("li")) {
        target.toggleClass("checked");
        saveData();
    } else if (target.is("span")) {
        target.closest("li").remove();
        saveData();
    }
});

showTask();