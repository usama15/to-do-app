

var todoList = document.getElementById('todoList');
var deleteAllBtn = document.getElementById('deleteAllBtn');

deleteAllBtn.onclick = () => {
    todoList.innerHTML = "";
}

function deleteTodoItem(id){
    var todoItem = document.getElementById(id);
    todoList.removeChild(todoItem);
}

function addTodo(){
    var todoText = document.getElementById('todoText');
    if (todoText.value.trim()) {
        var todoItem = document.createElement('li');
        var todoItemId = 'list-item-' + todoList.childNodes.length
        todoItem.setAttribute('id', todoItemId);
        todoItem.style.backgroundColor = "white";
        todoItem.style.listStyle = 'none';
        todoItem.style.marginTop = "10px";
        todoItem.style.fontFamily = "san"
        

        
        var editItemBtn = document.createElement('button');
        editItemBtn.innerText = 'Edit'
        editItemBtn.style.borderColor = "#007bff";
        editItemBtn.style.color = "#007bff";
        editItemBtn.style.padding = '0.375rem 0.75rem';
        editItemBtn.style.borderRadius = "0.25rem";
        editItemBtn.style.transition = "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out";
        editItemBtn.style.backgroundColor = "transparent";
        editItemBtn.style.boder = "1px solid transparent";
        editItemBtn.style.verticalAlign = "middle";
        editItemBtn.style.textAlign = "center";
        editItemBtn.style.float = "right";
        

        var deleteItemBtn = document.createElement('button');
        deleteItemBtn.innerText = 'Delete'
        deleteItemBtn.style.borderColor = '#dc3545';
        deleteItemBtn.style.color = '#dc3545';
        deleteItemBtn.style.padding = "0.375rem 0.75rem"
        deleteItemBtn.style.borderRadius = "0.25rem"
        deleteItemBtn.style.transition = "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out";
        deleteItemBtn.style.backgroundColor = "transparent";
        deleteItemBtn.style.boder = "1px solid transparent";
        deleteItemBtn.style.verticalAlign = "middle";
        deleteItemBtn.style.textAlign = "center";
        deleteItemBtn.style.float = "right";
        deleteItemBtn.onclick = function(){
            return deleteTodoItem(todoItemId);
        }

        todoItem.innerText = todoText.value;
        todoItem.appendChild(editItemBtn);
        todoItem.appendChild(deleteItemBtn);
        todoList.appendChild(todoItem);

        todoText.value = "";
    }
}