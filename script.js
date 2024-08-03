document. addEventListener('DOMContentLoaded' , function() {

    const taskInput = document.getElementById('taskInput')
    const addTaskBtn = document.getElementById('addTask')
    const taskList = document.getElementById('taskList')

    addTaskBtn.addEventListener('click', function () {
        
        const  taskText = taskInput.value.trim()

        if (taskText !== '') {

            addTask(taskText);

            taskInput.value = '';
        }
    })

    taskInput.addEventListener('keypress', function(e) {

        if (e.key === 'Enter') {

            const taskText = taskInput.value.trim()
           
            if (taskText !== '') {

                addTask(taskText);
    
                taskInput.value = '';
            }
            
        }
    })

});

function addTask(taskText) {
    const li = document.createElement('li')
    li.textContent = taskText

    const deleteBtn = document.createElement('button')

    deleteBtn.textContent = 'Delete'

    deleteBtn.addEventListener( "click", function() {
        taskList.removeChild(li)

    });

    li.appendChild(deleteBtn)

    taskList.appendChild(li)
}


function addTask() {
    // Функция для добавления задачи в список, описанная ранее//
  }
  function setReminder() {
    var reminderInput = document.getElementById('reminderInput').value;
    var timeInput = document.getElementById('timeInput').value;

    if (reminderInput === '' || timeInput === '') {
      alert('Пожалуйста, введите напоминание и время.');
      return;
    }

    setTimeout(function() {
      alert('Напоминаю: ' + reminderInput);
    }, timeInput);
  }

  
