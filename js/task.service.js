import { request } from "./api.js";

export const getTasks = async () => {
  return await request("tasks", "GET");
};

export const getTaskById = (id) => {
  return request(`tasks/${id}`, "GET");
};

export const addTask = (task) => {
  return request("tasks", "POST", task);
};

export const updateTask = (id, task) => {
  return request(`tasks/${id}`, "PUT", task);
};

export const deleteTask = (id) => {
  return request(`tasks/${id}`, "DELETE");
};
