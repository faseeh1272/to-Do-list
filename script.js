document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
  
    const addTask = () => {
      if (!taskInput.value.trim()) return alert("Please enter a task.");
  
      const li = document.createElement("li");
      li.innerHTML = `${taskInput.value} <button class="deleteBtn">Delete</button>`;
      li.querySelector(".deleteBtn").onclick = () => li.remove();
      taskList.appendChild(li);
  
      taskInput.value = ""; // Clear input field
    };
  
    addTaskBtn.onclick = addTask;
    taskInput = (e) => e.key === "Enter" && addTask();
  });
  