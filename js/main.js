const parsetasktable = (id, data) => {
  const taskTable = document.getElementById(id);
  taskTable.innerHTML = "";

  data.forEach((task, index) => {
    const row = document.createElement("tr");
    const taskCell = document.createElement("td");
    taskCell.textContent = task.task;
    row.appendChild(taskCell);
    taskTable.appendChild(row);
  });
//   console.log(taskTable);

};


