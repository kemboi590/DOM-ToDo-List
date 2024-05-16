document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector(".default-todos ul");
  const forms = document.forms;
  const addForm = forms["add-todo-form"];
  //   console.log(addForm);

  // Delete todos
  list.addEventListener("click", (e) => {
    if (e.target.className == "delete-btn") {
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
    }
  });

  // Add todos
  addForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // create elements
    const value = addForm.querySelector('input[type="text"]').value;
    // console.log(value)
    const li = document.createElement("li");
    const todoText = document.createElement("span");
    const deleteBtn = document.createElement("span");
    // add text content
    todoText.textContent = value;
    deleteBtn.textContent = "delete";
    // add classes
    todoText.classList.add("name");
    deleteBtn.classList.add("delete-btn");
    // append to document
    if (value === "") {
      alert("Please enter a valid todo");
      return;
    }

    li.appendChild(todoText);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    // clear input
    addForm.querySelector('input[type="text"]').value = "";
  });
});
