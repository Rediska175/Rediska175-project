const btn = document.getElementById('btn')
const body = document.body
let btnClicked = false

body.classList.remove('clicked')

btn.addEventListener('click', function() {
    if(btnClicked) {
        btnClicked = !btnClicked
         setTimeout(function() {
            body.classList.remove('clicked')
         }, 2000)
    } else {
        btnClicked = !btnClicked
        setTimeout(function() {
            body.classList.add('clicked')
         }, 2000)

    }
})


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
