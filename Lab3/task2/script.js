const form = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const todoList = document.getElementById('todo-list');
const emptyState = document.getElementById('empty-state');

const updateEmptyState = () => {
  emptyState.style.display = todoList.children.length ? 'none' : 'block';
};

const createTodoItem = (text) => {
  const li = document.createElement('li');

  const left = document.createElement('div');
  left.className = 'item-left';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const span = document.createElement('span');
  span.className = 'item-text';
  span.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn-delete';
  deleteBtn.textContent = '🗑';

  checkbox.addEventListener('change', () => {
    span.classList.toggle('is-done');
  });

  deleteBtn.addEventListener('click', () => {
    todoList.removeChild(li);
    updateEmptyState();
  });

  left.appendChild(checkbox);
  left.appendChild(span); 

  li.appendChild(left);
  li.appendChild(deleteBtn);

  return li;
};


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const value = taskInput.value.trim();
  if (!value) return;

  const item = createTodoItem(value);
  todoList.appendChild(item);

  taskInput.value = '';
  updateEmptyState();
});


updateEmptyState();