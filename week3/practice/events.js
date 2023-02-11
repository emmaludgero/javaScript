// events.js
let tasks = [];

function renderTasks(tasks) {
  const toDoList = document.querySelector("#todoList");
  toDoList.innerHTML = "";

  tasks.forEach((task) => {
    toDoList.innerHTML +=
    `<li ${task.completed ? 'class="strike"' : ""}>
      <p>${task.detail}</p>
      <div>
        <span data-function="delete">❎</span>
        <span data-function="complete">✅</span>
      </div>
    </li>`;  
  });  
}

function newTask() {
  const taskName = document.querySelector("#todo").value;
  tasks.push({ detail: taskName, completed: false});
  renderTasks(tasks);
}

function removeTask(taskElement) {
  tasks = tasks.filter(
    (task) => task.detail != taskElement.childNodes[0].innerText
  );
  taskElement.remove();
}

function completeTask(taskElement) {
  const taskIndex = tasks.findIndex(
    (task) => task.detail === taskElement.childNodes[0].innerText
  );
  tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;
  taskElement.classList.toggle("strike");
  console.log(tasks);
}

function manageTasks(event) {
  console.log(event.target);
  console.log(event.currentTarget);
  const parent = event.target.closest("li");
  if (event.target.dataset.function === "delete") {
    removeTask(parent);
  };
  if (event.target.dataset.function === "complete") {
    completeTask(parent);
  };
}

document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("#todoList").addEventListener("click", manageTasks);

renderTasks(tasks);