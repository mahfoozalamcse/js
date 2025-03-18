document.addEventListener('DOMContentLoaded', () =>{
   const todoInput = document.getElementById("taskInput");
   const addTaskButton = document.getElementById("addTaskButton");
   const todoList = document.getElementById("taskList");
   
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((task) => renderTask(task))
  
addTaskButton.addEventListener('click' , () => { 
     const taskText = todoInput.value.trim(); 
     if (taskText === "") return;
     const newTask = { 
        id : Date.now(), 
        text : taskText,
        completed : false,
     }
     tasks.push(newTask);
     saveTask();
     renderTask(newTask);
     todoInput.value = ""; // clear value
     console.log(tasks);
     
});


// render task first store in tasks arr and run loop and render one by one
function renderTask(task) {
    const li = document.createElement('li')
    li.setAttribute('data-id', task.id)
    if(task.completed) li.classList.add("completed");

    li.innerHTML = `<span>${task.text}</span>
    <button>Delete</button>`

    li.addEventListener('click', (e) =>{
        if(e.target.tagName  === 'BUTTOn') return;
        task.completed = !task.completed;
        li.classList.toggle('completed')
        saveTask()
    })

    li.querySelector('button').addEventListener('click', (e) =>{
     e.stopPropagation()// prevent toggle from fire
     tasks = tasks.filter(t => t.id !== tasks.id)
     li.remove();
     saveTask();
    })

    todoList.appendChild(li);
}

// save in local storage operation
function saveTask() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
})
