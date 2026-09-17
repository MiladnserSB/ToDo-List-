import { renderTableLana } from "./lib.js";
import { getTasks } from "./task.service.js";
import { getUsers } from "./user.service.js";

const users = await getUsers();

// console.log(tasks);

renderTableLana("userTable", users);

