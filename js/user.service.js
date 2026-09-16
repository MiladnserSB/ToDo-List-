import { request } from "./api.js";

const getUsers = async () => {
  return await request("users", "GET");
};

const getUserById = (id) => {
  return request(`users/${id}`, "GET");
};

const addUser = (user) => {
  return request("users", "POST", user);
};

const updateUser = (id, user) => {
  return request(`users/${id}`, "PUT", user);
};

const deleteUser = (id) => {
  return request(`users/${id}`, "DELETE");
};

// const res = await getUsers();
// addUser({ name: "mowafak", family: "Arida", age: 22 });
console.log(await getUserById("409Bhr5yi-g"));
