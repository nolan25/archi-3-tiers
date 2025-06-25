const { contextBridge } = require("electron");
contextBridge.exposeInMainWorld("api", {});

function loadUsers() {
  fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then((data) => {
      const ul = document.getElementById("users");
      ul.innerHTML = "";
      data.forEach((user) => {
        const li = document.createElement("li");
        li.textContent = user.name;
        ul.appendChild(li);
      });
    });
}

loadUsers();

document.getElementById("userForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("username").value;
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  })
    .then((res) => res.json())
    .then(() => {
      document.getElementById("username").value = "";
      loadUsers();
    });
});
