import reportIcon from '../Icons/report.png'
import detailIcon from '../Icons/text-file.png'
import deleteIcon from '../Icons/delete.png'
import { appendTasks, filterTaskArray, inboxArray } from '../script'
import { evaluatePendingDays, evaluateUpcomingdays, evaluateWeekDays, filterDate, formatDate } from './date'
import { deleteProject, deleteTask } from './delete'
import updateTask from './update'

function createProjectDom(projectName) {
    const projectMenu = document.querySelector('.project-menu')
    const listItem = document.createElement('li')
    listItem.textContent = projectName
    listItem.setAttribute('id', projectName)
    listItem.classList.add('task-list', 'project-list', 'task-hover')
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
    const updateTask = document.createElement('img')
    updateTask.setAttribute('src', detailIcon)
    updateTask.setAttribute('class', 'update')
    const taskDelete = document.createElement('img')
    taskDelete.setAttribute('src', deleteIcon)
    taskDelete.setAttribute('class', 'delete')
    
    taskDiv.append(checkBox, taskTitle, taskDate, changePriority, updateTask, taskDelete)
    taskContainer.appendChild(taskDiv)
}

function createDeleteProject(projectName) {
    const taskContainer = document.getElementById('task-container')
    const taskBtn = document.createElement('button')
    taskBtn.textContent = 'Delete Project'
    // taskBtn.setAttribute('id', projectName)
    taskBtn.setAttribute('class', 'deleteProject')
    taskContainer.appendChild(taskBtn)
}

function dateEventListener() {
    const defaultProjectDiv = document.querySelectorAll('.task-list')
    const taskContainer = document.getElementById('task-container')
    defaultProjectDiv.forEach(defaultProject => {
        defaultProject.addEventListener('click', () => {
            if (defaultProject.id === 'inbox') {
                taskContainer.innerHTML = ''
                appendTasks()
                deleteTask()
                updateTask()
            } else if (defaultProject.id === 'today') {
                taskContainer.innerHTML = ''
                const filteredToday = filterDate(formatDate(new Date()), inboxArray)
                for (let index = 0; index < filteredToday.length; index++) {
                    const filteredTodayValue = Object.values(filteredToday[index])
                    createTaskDom(filteredTodayValue[6], filteredTodayValue[0], filteredTodayValue[2], filteredTodayValue[3])
                }
                deleteTask()
                updateTask()
            } else if (defaultProject.id === 'week') {
                taskContainer.innerHTML = ''
                const filteredWeek = evaluateWeekDays(new Date())
                console.log(filteredWeek)
                for (let index = 0; index < filteredWeek.length; index++) {
                    const weekDay = filterDate(filteredWeek[index], inboxArray)
                    for (let jIndex = 0; jIndex < weekDay.length; jIndex++) {
                        const filteredWeekValue = Object.values(weekDay[jIndex])
                        createTaskDom(filteredWeekValue[6], filteredWeekValue[0], filteredWeekValue[2], filteredWeekValue[3])   
                    }
                }
                deleteTask()
                updateTask()
            } else if (defaultProject.id === 'upcoming') {
                taskContainer.innerHTML = ''
                const sortedUpcoming = evaluateUpcomingdays(new Date(), inboxArray)
                for (let index = 0; index < sortedUpcoming.length; index++) {
                    const filteredUpcoming = filterDate(sortedUpcoming[index], inboxArray)
                    for (let jIndex = 0; jIndex < filteredUpcoming.length; jIndex++) {
                        const filteredUpcomingValue = Object.values(filteredUpcoming[jIndex])
                        createTaskDom(filteredUpcomingValue[6], filteredUpcomingValue[0], filteredUpcomingValue[2], filteredUpcomingValue[3])                       
                    }
                }
                updateTask()
                deleteTask()
            } else if (defaultProject.id === 'pending') {
                taskContainer.innerHTML = ''
                const sortedPending = evaluatePendingDays(new Date(), inboxArray)
                for (let index = 0; index < sortedPending.length; index++) {
                    const filteredPending = filterDate(sortedPending[index], inboxArray)
                    for (let jIndex = 0; jIndex < filteredPending.length; jIndex++) {
                        const filteredPendingValue = Object.values(filteredPending[jIndex])
                        createTaskDom(filteredPendingValue[6], filteredPendingValue[0], filteredPendingValue[2], filteredPendingValue[3])                       
                    }
                }
                deleteTask() 
                updateTask()
            } else if (defaultProject.id === 'completed') {
                taskContainer.innerHTML = ''
            }
        });
    });
}

function projectEventListener() {
    const defaultProjectDiv = document.querySelectorAll('.project-list')
    const taskContainer = document.getElementById('task-container')
    const getItem = JSON.parse(localStorage.getItem('task'))
    const projectKeys = Object.keys(getItem)
    defaultProjectDiv.forEach(defaultProject => {
        defaultProject.addEventListener('click', () => {
            if (projectKeys.includes(defaultProject.id)) {
                taskContainer.innerHTML = ''
                const filtered = filterTaskArray(defaultProject.id)
                if (!filtered.length) {
                    createDeleteProject(defaultProject.id);
                    deleteProject(defaultProject.id)
                } else {
                    for (let index = 0; index < filtered.length; index++) {
                        const filteredValue = Object.values(filtered[index])
                        createTaskDom(filteredValue[6], filteredValue[0], filteredValue[2], filteredValue[3])  
                    }
                }
                deleteTask()
                updateTask()
            }
        });
    });
}

export {createProjectDom, createTaskDom, createDeleteProject, projectEventListener, dateEventListener};