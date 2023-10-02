import './style.css';
import popupListener from './modules/popup.js';

console.log("Test Run")

let inboxArray = []
let inboxObject = {
    inbox: inboxArray,
}

function createObjectTask(title, description, dueDate, priority, project) {
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        project: project,
        checked: false,
    }
}

const myForm = document.getElementById('formOne')

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let titleInput = document.getElementById('ftitle').value
    let descriptionInput = document.getElementById('fdescription').value
    let dateInput = document.getElementById('fdate').value
    let priorityInput = document.getElementById('fpriority').value
    let projectInput = document.getElementById('fproject').value

    addTask(titleInput, descriptionInput, dateInput, priorityInput, projectInput)
    localStorage.setItem('task', JSON.stringify(inboxObject))
    myForm.reset();
    console.log(inboxArray);
})

function storage() {
    if (localStorage.getItem('task') !== null) {
        const getItem = JSON.parse(localStorage.getItem('task'))
        const inbox = getItem.inbox
        for (let index = 0; index < inbox.length; index++) {
            inboxArray.push(inbox[index])
        }
    }
}

function addTask(title, description, dueDate, priority, project) {
    let todos = createObjectTask(title, description, dueDate, priority, project)
    inboxArray.push(todos)
}

function init() {
    popupListener()
}

init()

window.onload = () => {
    storage()
} 