const taskList = document.getElementById("task-list");

document.getElementById("add-task").onclick = () => {
  const name = document.getElementById("task-name").value;
  const rate = Number(document.getElementById("task-rate").value);

  if (!name || !rate) return alert("Enter task name & rate");

  const taskEl = document.createElement("div");
  taskEl.className = "task";
  taskEl.innerHTML = `
    <span>${name} - ${rate} coins/min</span>
    <button class="start">Start</button>
  `;

  taskEl.querySelector(".start").onclick = () => {
    let time = 0;
    const interval = setInterval(() => {
      time++;
      updateCoins(rate);
    }, 60000);
  };

  taskList.appendChild(taskEl);
};
