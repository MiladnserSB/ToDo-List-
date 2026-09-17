import { renderTableLana, parseForm } from "./lib.js";
import { addUser, deleteUser, getUsers, updateUser } from "./user.service.js";

const users = await getUsers();
renderTableLana("userTable", users);

const addUserBtn = document.getElementById("add-user-btn");
addUserBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const form = document.getElementById("userForm");
  const userData = parseForm("userForm");
  addUser(userData);
  form.reset();
  location.reload();
});

document.addEventListener("click", (e) => {
  if (e.target && e.target.id === "deleteBtn") {
    e.preventDefault();

    const row = e.target.closest("tr");

    if (row) {
      const userIdCell = row.querySelector("td:nth-child(6)");
      const userId = userIdCell.textContent.trim();
      console.log(deleteUser(userId));
      location.reload();
    }
  } else if (e.target && e.target.id === "updateBtn") {
    const modalElement = document.getElementById("addUserModal");

    const myModal = new bootstrap.Modal(modalElement);
    myModal.show();
    document.getElementById("addUserModalLabel").textContent = "Update User";
    document.getElementById("add-user-btn").textContent = "Save Changes";
    // updateUser("updateBtn");
    // console.log(updateUser);
  }
});
