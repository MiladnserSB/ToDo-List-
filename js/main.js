import { renderTableLana } from "./lib.js";
import { getTasks } from "./task.service.js";

const tasks = await getTasks();
console.log(tasks);

renderTableLana("taskTable", tasks);
