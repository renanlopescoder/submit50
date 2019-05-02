const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");

function createCheckboxButton() {
  const input = document.createElement("input");
  input.className = "mr-3";
  input.setAttribute("type", "checkbox");
  input.setAttribute("onClick", "count()");
  return input;
}

function createTodoContainer(todo) {
  const container = document.createElement("div");
  container.setAttribute("id", "division");
  container.appendChild(todo);
  return container;
}

function formatTodoContent(content) {
  const container = document.createElement("strong");
  container.className = "text-wrap text-monospace";

  const todoContent = document.createTextNode(content);
  container.appendChild(todoContent);

  return container;
}

function buildTodoElement(description) {
  const todo = document.createElement("li");
  todo.className = "list-group-item";

  const input = this.createCheckboxButton();
  todo.appendChild(input);

  const content = this.formatTodoContent(description);
  todo.appendChild(content);

  const container = this.createTodoContainer(todo);
  return container;
}

function count() {
  const inputs = document.querySelectorAll("input");
  let checked = 0;
  let unchecked = 0;
  inputs.forEach(input => {
    if (input.checked) {
      checked += 1;
    } else {
      unchecked += 1;
    }
  });
  uncheckedCountSpan.innerHTML = unchecked;
  itemCountSpan.innerHTML = checked;
}

function newTodo() {
  const description = prompt("Please enter your new todo");
  const todoElement = this.buildTodoElement(description);
  list.appendChild(todoElement);
  this.count();
}

function clearList() {
  const listItems = document.querySelectorAll(".list-group-item");
  listItems.forEach(listItem => {
    const item = listItem.querySelectorAll("input");
    if (item[0].checked) {
      listItem.remove();
    }
  });
  this.count();
}
