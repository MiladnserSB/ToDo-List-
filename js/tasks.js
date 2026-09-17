import { renderTableLana } from "./lib.js";
import { getTasks } from "./task.service.js";

const tasks = await getTasks();
renderTableLana("taskTable", tasks);
