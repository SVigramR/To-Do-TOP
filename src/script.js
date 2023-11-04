import './style.css';
import popupListener from './modules/popup.js';
import createForms from './modules/forms';
import { createProjectDom, createTaskDom, dateEventListener, projectEventListener } from './modules/modal';
import { evaluateUpcomingdays, evaluateWeekDays, formatDate, formatStringToDate } from './modules/date';
import { intlFormatDistance, isToday, parseISO, isAfter, isBefore } from 'date-fns';
import { retrieveStorage } from './modules/storage';

console.log("Test Run")
console.log(isToday(parseISO("Sep 13th 2023")))
console.log(formatDate('2023-02-12'))
console.log(intlFormatDistance( new Date(2023, 10, 19), Date.parse(new Date()), {unit: 'day'}))
console.log(evaluateWeekDays(new Date()))
console.log(isAfter(new Date(1989, 6, 10), new Date(1989, 6, 10)))
console.log(formatStringToDate("Sep 13th 2023"))
console.log(isBefore(new Date(2023, 10, 22), new Date(2023, 10, 22)))
export let inboxArray = []
export let inboxObject = {
    inbox: inboxArray,
}
console.log(evaluateUpcomingdays(new Date(), inboxArray))

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
} 