const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function addTodo() {
  
  var tarea = prompt('Ingrese la tarea', 'Completar');
  
  while (tarea == null || tarea == ''){
    var tarea = prompt('Error! Ingrese la tarea', 'Completar')
  };
  li = document.createElement('li');
  checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.value = 1;
  checkbox.name = "test";
  checkbox.onclick = contador;
  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(tarea));  
  list.appendChild(li);
  contador();
  
};
function contador(){
  
  var checkLength = 0;
  var boxes = list.getElementsByTagName("input");
  for (var i = 0; i < boxes.length; i++)
  {
      boxes[i].checked ? checkLength++ : null;
      
  };
  itemCountSpan.innerHTML = checkLength;
  
  uncheckedCountSpan.innerHTML = boxes.length-checkLength;
  
}