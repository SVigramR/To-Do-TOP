import reportIcon from '../Icons/report.png'
import detailIcon from '../Icons/text-file.png'
import deleteIcon from '../Icons/delete.png'
import { appendTasks, filterTaskArray, findProjectIndex, inboxArray, inboxObject } from '../script'
import { filterDate, findDateIndex, formatDate } from './date'

function createProjectDom(projectName) {
    const projectMenu = document.querySelector('.project-menu')
    const listItem = document.createElement('li')
    listItem.textContent = projectName
    listItem.setAttribute('id', projectName)
    listItem.classList.add('task-list', 'task-hover')
    projectMenu.appendChild(listItem)
}

function createTaskDom(index, title, date, priority) {
    const taskContainer = document.getElementById('task-container')
    const taskDiv = document.createElement('div')
    taskDiv.setAttribute('id', index)
    taskDiv.classList.add('task-div', priority)

    const checkBox = document.createElement('input')
    checkBox.setAttribute('type', 'checkbox')
    const taskTitle = document.createElement('p')
    taskTitle.textContent = title
    const taskDate = document.createElement('p')
    taskDate.textContent = date

    const changePriority = document.createElement('img')
    changePriority.setAttribute('src', reportIcon)
    const showDescription = document.createElement('img')
    showDescription.setAttribute('src', detailIcon)
    const taskDelete = document.createElement('img')
    taskDelete.setAttribute('src', deleteIcon)
    
    taskDiv.append(checkBox, taskTitle, taskDate, changePriority, showDescription, taskDelete)
    taskContainer.appendChild(taskDiv)
}

function projectEventListener() {
    const defaultProjectDiv = document.querySelectorAll('.task-list')
    const taskContainer = document.getElementById('task-container')
    const getItem = JSON.parse(localStorage.getItem('task'))
    const projectKeys = Object.keys(getItem)
    defaultProjectDiv.forEach(defaultProject => {
        defaultProject.addEventListener('click', () => {
            if (defaultProject.id === 'inbox') {
                taskContainer.innerHTML = ''
                appendTasks()
            } else if (defaultProject.id === 'today') {
                taskContainer.innerHTML = ''
                const filteredToday = filterDate(formatDate(new Date()), inboxArray)
                let findTodayIndex = findDateIndex(inboxArray, defaultProject.id)
                for (let index = 0; index < filteredToday.length; index++) {
                    const filteredTodayValue = Object.values(filteredToday[index])
                    createTaskDom(findTodayIndex[index], filteredTodayValue[0], filteredTodayValue[2], filteredTodayValue[3])
                }
            } else if (projectKeys.includes(defaultProject.id)) {
                taskContainer.innerHTML = ''
                const filtered = filterTaskArray(defaultProject.id)
                let findTaskIndex = findProjectIndex(inboxArray, defaultProject.id)
                for (let index = 0; index < filtered.length; index++) {
                    const filteredValue = Object.values(filtered[index])
                    createTaskDom(findTaskIndex[index], filteredValue[0], filteredValue[2], filteredValue[3])  
                }
            }
        });
    });
}

export {createProjectDom, createTaskDom, projectEventListener};