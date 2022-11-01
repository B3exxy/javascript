let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', buscarItems);

function addItem(e) {
    e.preventDefault();
    let newItem = document.getElementById('item').value;
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn- float-end delete';deleteBtn.appendChild(document.createTextNode('x'));
    li.appendChild(deleteBtn);
    itemList.appendChild(li); 
    form.reset(); 
}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
    let li = e.target.parentElement;
    itemList.removeChild(li);
    }
}