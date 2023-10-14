import './style.css';
import popupListener from './modules/popup.js';
import createForms from './modules/forms';
import { createProjectDom, createTaskDom, projectEventListener } from './modules/modal';
import { formatDate } from './modules/date';
import { isToday, parseISO } from 'date-fns';

console.log("Test Run")
console.log(isToday(parseISO("Sep 13th 2023")))
console.log(formatDate('2023-02-12'))

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

function createProject(projectName) {
    if (Object.keys(inboxObject) === projectName) {
        return console.log(`Project name (${projectName}) already exists`)
    } else {
        return inboxObject[projectName] = []
    }
}

function updateProject(updateProjectArray) {
    let updater = filterTaskArray(updateProjectArray)
    for (let index = 1; index < updater.length; index++) {
        const element = updater[index]
        inboxObject[updateProjectArray].push(element)
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

function retrieveStorage() {
    if (localStorage.getItem('task') !== null) {
        const getItem = JSON.parse(localStorage.getItem('task'))
        const inbox = getItem.inbox
        for (let index = 0; index < inbox.length; index++) { 
            inboxArray.push(inbox[index])
        }
        const objectKeys = Object.keys(getItem)
        for (let index = 1; index < objectKeys.length; index++) {
            createProject(objectKeys[index])
            const filterProject = filterTaskArray(objectKeys[index])
            for (let j = 0; j < filterProject.length; j++) {
                inboxObject[objectKeys[index]].push(filterProject[j]);
            }
            createProjectDom(objectKeys[index])
        }
        appendTasks()
        console.log('Storage Retrival')
    }
}

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
    projectEventListener()
}

init()

window.onload = () => {
    retrieveStorage()
} 