import './style.css';
import popupListener from './modules/popup.js';
import createForms from './modules/forms';
import { createProjectDom, createTaskDom, dateEventListener, projectEventListener } from './modules/modal';
import { formatDate } from './modules/date';
import { retrieveStorage } from './modules/storage';
import { deleteFunction} from './modules/delete';

console.log("Test Run")
export let inboxArray = []
export let inboxObject = {
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
    
        addTask(titleInput, descriptionInput, formatDate(dateInput), priorityInput, projectInput)
        createTaskDom(inboxArray.length.toString(), titleInput, formatDate(dateInput), priorityInput)
        localStorage.setItem('task', JSON.stringify(inboxObject))
    } else if (document.getElementById('formProject') !== null) {
        let addProjectInput = document.getElementById('formProject').value
        createProject(addProjectInput)
        createProjectDom(addProjectInput)
        localStorage.setItem('task', JSON.stringify(inboxObject))
    }

    myForm.reset();
    console.log('Add Button Clicked');
})

export function appendTasks() {
    for (let index = 0; index < inboxArray.length; index++) {
        const objectValue = Object.values(inboxArray[index])
        createTaskDom(index.toString(), objectValue[0], objectValue[2], objectValue[3])
    }
}

function addTask(title, description, dueDate, priority, project) {
    let todos = createObjectTask(title, description, dueDate, priority, project)
    inboxArray.push(todos)
    if (project !== 'inbox') inboxObject[project].push(todos);
}

function init() {
    popupListener()
    createForms()
    dateEventListener()
    projectEventListener()
}

init()

window.onload = () => {
    retrieveStorage()
    projectEventListener()
    deleteFunction()
} 