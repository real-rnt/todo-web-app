const addButton = document.getElementById('addTask')
const taskInput = document.getElementById('taskInput')
const taskList = document.getElementById('taskList')
const shrekImg = document.getElementById('shrekImg')
const machoDialogue = document.getElementById('machoDialogue')
const machoSong = document.getElementById('machoSong')

loadTask()

//add task
function addTask() {
  const task = taskInput.value.trim()
  if (task) {
    createTaskElement(task)
    taskInput.value = ''
    saveTask()
  } else{
    alert("Escreve a porra da task animal")
  }
}

addButton.addEventListener('click', addTask)

//create task function 
function createTaskElement(task) {
  const listItem = document.createElement('li') 
  listItem.textContent = task

  if (listItem.textContent == "matar o macho"){
    shrekImg.classList.remove("hiddenMacho")
    machoDialogue.classList.remove("hiddenMacho")
    machoSong.play()
  } else if (listItem.textContent == "ir no encontro com a miss bumbum"){
    alert('Deus tenha misericórdia do seu cu')
  }

  const deleteButton = document.createElement('button')
  deleteButton.textContent = 'x'
  deleteButton.className = 'deleteTask'

  listItem.appendChild(deleteButton)
  taskList.appendChild(listItem)

  deleteButton.addEventListener('click', function(){
    taskList.removeChild(listItem)
    saveTask()
  })
}

//saving and load tasks functions
function saveTask(){ 
  let tasks = []
  taskList.querySelectorAll('li').forEach(function(listItem){
    tasks.push(listItem.textContent.replace('x', '').trim());
  })
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function loadTask() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || []
  tasks.forEach(createTaskElement)
}
