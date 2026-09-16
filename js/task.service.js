import { request } from "./api.js";

const getTasks = async () => {
  return await request("tasks", "GET");
};

const getTaskById = (id) => {
  return request(`tasks/${id}`, "GET");
};

const addTask = (task) => {
  return request("tasks", "POST", task);
};

const updateTask = (id, task) => {
  return request(`tasks/${id}`, "PUT", task);
};

const deleteTask = (id) => {
  return request(`tasks/${id}`, "DELETE");
};

