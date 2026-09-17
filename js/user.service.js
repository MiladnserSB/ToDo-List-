import { request } from "./api.js";

export const getUsers = async () => {
  return await request("users", "GET");
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

// const res = await getUsers();
// addUser({ name: "mowafak", family: "Arida", age: 22 });
console.log(await getUserById("409Bhr5yi-g"));
