document.addEventListener("DOMContentLoaded", () => {
  toDoList();
});

function toDoList() {
  const form = document.getElementById('create-task-form');
  const input = document.getElementById('new-task-description');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let li = document.createElement('li');
    li.textContent = input.value;
    list.appendChild(li); 
  });
}
