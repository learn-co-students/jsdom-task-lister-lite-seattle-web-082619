document.addEventListener("DOMContentLoaded", () => {
  function formSubmit(event) {
    event.preventDefault()
    let inputField = document.getElementById('new-task-description');
    let inputText = inputField.value;
    inputField.value = '';
  
    let ul = document.getElementById('tasks');
    let li = document.createElement('li');
    let btn = document.createElement('button');
  
    btn.setAttribute('data-description', inputText);
    btn.innerHTML = 'X';
    li.appendChild(document.createTextNode(inputText));
    li.appendChild(btn);
    ul.appendChild(li);
  }
  
  function deleteLi(event) {
    const ul = document.getElementById('tasks');
    ul.removeChild(event['path'][1])
  }
  
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', formSubmit);
  const ul = document.getElementById('tasks');
  ul.addEventListener('click', deleteLi);
});