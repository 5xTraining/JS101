// 程式碼寫這裡
document.addEventListener("DOMContentLoaded", () => {
  const addTaskBtn = document.querySelector("#addBtn")
  const taskInput = document.querySelector("#taskInput")
  const todoList = document.querySelector(".todo-list")

  const createTaskItem = () => {
    const task = taskInput.value

    if (task != "") {
      const todoItem = `<li class="todo-item">
      <span class="item">${task}</span>
      <button class="closeBtn">X</button>
    </li>`

      todoList.insertAdjacentHTML("afterbegin", todoItem)
      taskInput.value = ""
      taskInput.focus()
    }
  }

  todoList.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
      e.target.parentNode.remove()
    }
  })

  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      createTaskItem()
    }
  })

  addTaskBtn.addEventListener("click", createTaskItem)
})
