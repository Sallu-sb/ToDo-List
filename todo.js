let addToDoButton = document.getElementById('addTodo');
let toDoContainer = document.getElementById('todocontainer');
let inputField = document.getElementById('inputfield');

addToDoButton.addEventListener('click',function(){
  var paragraph = document.createElement ('p')
  paragraph.classList.add('paragraph-styling');
  paragraph.innerText = inputField.value;
  todocontainer.appendChild(paragraph);
  inputfield.value = "";
  paragraph.addEventListener('click',function(){
    paragraph.style.textDecoration="line-through";
  })
  paragraph.addEventListener('dblclick',function(){
    todocontainer.removeChild(paragraph);
  })
})