document.addEventListener("DOMContentLoaded", () => {
  todolist();
  deletetask();
  

});

function todolist() {
  let form = document.getElementById("create-task-form");
  let input = document.getElementById("new-task-description"); 
  let button = document.getElementById("new-task-button"); 
  let list =  document.getElementById("tasks"); 

  button.addEventListener('click', (event) => {
    event.preventDefault() // takes you to the server, preventing that from happening

    let text = input.value;
    input.value =''
    console.log("clicked", text);
    let li = document.createElement('li');
    li.textContent = text;
    list.appendChild(li);
    deletetask()
  })
}

function deletetask(){
  event.preventDefault() // did not prevent the x to show up! 
let button = document.createElement('button');
let textInsideButton = document.createTextNode("X");
button.appendChild(textInsideButton);
let insertLocation = document.getElementById("tasks");
insertLocation.appendChild(button);
console.log("created a button")



}