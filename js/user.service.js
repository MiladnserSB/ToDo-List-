import { request } from "./api.js";

export const getUsers = () => {
  return request("users", "GET");
};

export const getUserById = (id) => {
  return request(`users/${id}`, "GET");
};

export const addUser = (user) => {
  return request("users", "POST", user);
};

export const updateUser = (id, user) => {
  return request(`users/${id}`, "PUT", user);
};

export const deleteUser = (id) => {
  return request(`users/${id}`, "DELETE");
};


