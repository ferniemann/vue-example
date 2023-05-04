// State der App
// const todos = ["Einkaufen", "Schlafen"];
const todos = [
  {
    id: 0,
    description: "Einkaufen",
    done: false,
  },
  {
    id: 1,
    description: "Schlafen",
    done: true,
  },
];

const newTodo = document.querySelector("#new-todo");
const addButton = document.querySelector("#add-button");
const list = document.querySelector("#list");

function addTodo(todo) {
  const newTodo = {
    id: Date.now(),
    description: todo,
    done: false,
  };
  todos.push(newTodo);
}

// Zeige den aktuellen State im DOM an
function renderTodos() {
  list.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];

    const li = document.createElement("li");
    const text = document.createTextNode(todo.description);
    li.append(text);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;
    li.append(checkbox);

    // checkbox.addEventListener("change", function () {
    //   console.log(checkbox.checked);
    //   console.log(todo);
    //   todo.done = checkbox.checked;
    // });

    list.append(li);
  }
}

addButton.addEventListener("click", function () {
  const newTodoText = newTodo.value;
  addTodo(newTodoText); // update des states
  renderTodos(); // state rendern
});

list.addEventListener("change", function (e) {
  console.log("change event in liste: ", e.target);
});

renderTodos();
