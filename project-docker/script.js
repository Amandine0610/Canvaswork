const inputbox = document.getElementById("input-box");
const tasklist = document.getElementById("task-list");

function addTask(){
    const li = document.createElement('li');
    li.textContent = taskname;
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });
    tasklist.appendChild(li);

}
taskForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskname = taskInput.value.trim();
    if (taskname !== '') {
        addTask(taskname);
        taskInput.value = '';
    }
});