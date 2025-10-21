const addBtn = document.getElementById("add-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Add task
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", e => {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");

  // left side: checkbox + text
  const left = document.createElement("div");
  left.classList.add("task-left");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const textSpan = document.createElement("span");
  textSpan.textContent = taskText;

  checkbox.addEventListener("change", () => {
    li.classList.toggle("completed", checkbox.checked);
  });

  left.appendChild(checkbox);
  left.appendChild(textSpan);

  // delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "🗑️";
  delBtn.classList.add("delete-btn");
  delBtn.addEventListener("click", () => li.remove());

  li.appendChild(left);
  li.appendChild(delBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}
