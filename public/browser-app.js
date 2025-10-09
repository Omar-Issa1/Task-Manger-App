const tasksDOM = document.querySelector(".tasks");
const loadingDOM = document.querySelector(".loading-text");
const formDOM = document.querySelector(".task-form");
const taskInputDOM = document.querySelector(".task-input");
const formAlertDOM = document.querySelector(".form-alert");

let dragSrcEl = null;

const showTasks = async () => {
  loadingDOM.style.visibility = "visible";
  try {
    const {
      data: { data: tasks },
    } = await axios.get("/api/v1/tasks");

    if (tasks.length < 1) {
      tasksDOM.innerHTML = '<h5 class="empty-list">No tasks in your list</h5>';
      loadingDOM.style.visibility = "hidden";
      return;
    }

    // Sort tasks incomplete first then completed
    tasks.sort((a, b) => a.completed - b.completed);
    const allTasks = tasks
      .map((task, index) => {
        const { completed, _id: taskID, name } = task;
        return `
        <div class="single-task ${
          completed ? "task-completed" : ""
        }" draggable="true" data-id="${taskID}">
          <span class="task-number">${index + 1}.</span>
          <h5 class="task-name" data-id="${taskID}">${name}</h5>

          <div class="task-links">
            <a href="task.html?id=${taskID}" class="edit-link"><i class="fas fa-edit"></i></a>
            <button type="button" class="delete-btn" data-id="${taskID}">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>`;
      })
      .join("");

    tasksDOM.innerHTML = allTasks;
    enableDragAndDrop();
  } catch (error) {
    tasksDOM.innerHTML =
      '<h5 class="empty-list">There was an error, please try later....</h5>';
  }
  loadingDOM.style.visibility = "hidden";
};

showTasks();

// DELETE or UPDATE Task
tasksDOM.addEventListener("click", async (e) => {
  const deleteBtn = e.target.closest(".delete-btn");
  const nameEl = e.target.closest(".task-name");

  if (deleteBtn) {
    const id = deleteBtn.dataset.id;
    loadingDOM.style.visibility = "visible";
    try {
      await axios.delete(`/api/v1/tasks/${id}`);
      await showTasks();
    } catch (error) {
      console.log("❌ Error deleting task:", error);
    }
    loadingDOM.style.visibility = "hidden";
    return;
  }

  if (nameEl) {
    const id = nameEl.dataset.id;
    try {
      const {
        data: { data: task },
      } = await axios.get(`/api/v1/tasks/${id}`);

      await axios.patch(`/api/v1/tasks/${id}`, {
        completed: !task.completed,
      });

      await showTasks();
    } catch (error) {
      console.log("❌ Error updating task:", error);
    }
  }
});

// ADD Task
formDOM.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = taskInputDOM.value.trim();
  if (!name) return;

  try {
    await axios.post("/api/v1/tasks", { name });
    taskInputDOM.value = "";
    formAlertDOM.textContent = "✅ Task added successfully!";
    formAlertDOM.classList.add("text-success");
    showTasks();
  } catch (error) {
    formAlertDOM.textContent = "❌ Error, please try again.";
    formAlertDOM.classList.add("text-danger");
  }

  setTimeout(() => (formAlertDOM.textContent = ""), 2500);
});

// Drag and Drop
function enableDragAndDrop() {
  const tasks = document.querySelectorAll(".single-task");
  tasks.forEach((task) => {
    task.addEventListener("dragstart", handleDragStart);
    task.addEventListener("dragover", handleDragOver);
    task.addEventListener("drop", handleDrop);
    task.addEventListener("dragend", handleDrop);
  });
}

function handleDragStart(e) {
  this.classList.add("dragging");
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = "move";
}

function handleDragOver(e) {
  e.preventDefault();
  const dragging = document.querySelector(".dragging");
  const afterElement = getDragAfterElement(tasksDOM, e.clientY);
  if (!afterElement) {
    tasksDOM.appendChild(dragging);
  } else {
    tasksDOM.insertBefore(dragging, afterElement);
  }
}

function handleDrop() {
  this.classList.remove("dragging");
  updateTaskNumbers();
}

function getDragAfterElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll(".single-task:not(.dragging)"),
  ];
  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}

function updateTaskNumbers() {
  const allTasks = document.querySelectorAll(".single-task");
  allTasks.forEach((task, index) => {
    const number = task.querySelector(".task-number");
    if (number) number.textContent = `${index + 1}.`;
  });
}
