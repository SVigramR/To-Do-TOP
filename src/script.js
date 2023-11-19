import './style.css';
import popupListener from './modules/popup.js';
import createForms from './modules/forms';
import { createProjectDom, createTaskDom, createDeleteProject, dateEventListener, projectEventListener } from './modules/modal';
import { formatDate, formatStringToDate } from './modules/date';
import { retrieveStorage } from './modules/storage';
import { deleteTask, deleteProject} from './modules/delete';
import updateTask from './modules/update';

console.log("Test Run")
export let inboxArray = []
export let inboxObject = {
    inbox: inboxArray,
}
console.log(formatStringToDate('Nov 24th 2023'))

function createObjectTask(title, description, dueDate, priority, project, uniqueId) {
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        project: project,
        checked: false,
        id: uniqueId,
    }
}

function uniqueId() {
    return String(
        Date.now().toString(32) +
          Math.random().toString(16)
      ).replace(/\./g, '')
}

export function validateDate(date) {
    if (date !== '') {
        return formatDate(date);
    } else {
        return date;
    }
}

export function filterTaskArray(projectValue) {
    const filteredInbox = inboxArray.filter((project) => {
        return project.project === projectValue
    })
    return filteredInbox
}

export function createProject(projectName) {
    if (Object.keys(inboxObject) === projectName) {
        return console.log(`Project name (${projectName}) already exists`)
    } else {
        return inboxObject[projectName] = []
    }
}

export function findProjectIndex(mainArray, project) {
    let indexNumber = [];
    mainArray.forEach((element, index) => {
        if (element.project === project) {
            indexNumber.push(index.toString())
        }
    });
    return indexNumber;
}

const myForm = document.getElementById('formOne')

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (document.getElementById('ftitle') !== null) {
        let titleInput = document.getElementById('ftitle').value
        let descriptionInput = document.getElementById('fdescription').value
        let dateInput = document.getElementById('fdate').value
        let priorityInput = document.getElementById('fpriority').value
        let projectInput = document.getElementById('fproject').value
        
        addTask(titleInput, descriptionInput, formatDate(dateInput), priorityInput, projectInput, uniqueId())
        const last = inboxArray[inboxArray.length - 1]
        createTaskDom(last.id, titleInput, formatDate(dateInput), priorityInput)
        localStorage.setItem('task', JSON.stringify(inboxObject))
    } else if (document.getElementById('formProject') !== null) {
        let objectKeyValidate = Object.keys(inboxObject)
        let addProjectInput = document.getElementById('formProject').value
        if (objectKeyValidate.includes(addProjectInput)) {
            alert("This Project Name Already Exists")
        } else {
            createProject(addProjectInput)
            createProjectDom(addProjectInput)
            const filtered = filterTaskArray(addProjectInput)
            if (!filtered.length) {
                document.getElementById('task-container').textContent = ''
                createDeleteProject(addProjectInput)
                deleteProject(addProjectInput)
                projectEventListener()
            }
            localStorage.setItem('task', JSON.stringify(inboxObject))
        }
    }

    myForm.reset();
    console.log('Add Button Clicked');
})

export function appendTasks() {
    for (let index = 0; index < inboxArray.length; index++) {
        const objectValue = Object.values(inboxArray[index])
        createTaskDom(objectValue[6], objectValue[0], objectValue[2], objectValue[3])
    }
}

function addTask(title, description, dueDate, priority, project, uniqueId) {
    let todos = createObjectTask(title, description, dueDate, priority, project, uniqueId)
    inboxArray.push(todos)
    if (project !== 'inbox') inboxObject[project].push(todos);
}

function init() {
    popupListener()
    createForms()
    dateEventListener()
    projectEventListener()
    // updateTask()
}

init()

window.onload = () => {
    retrieveStorage()
    projectEventListener()
    deleteTask()
    updateTask()
} 