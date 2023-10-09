import reportIcon from '../Icons/report.png'
import detailIcon from '../Icons/text-file.png'
import deleteIcon from '../Icons/delete.png'
import { appendTasks } from '../script'


function createProjectDom(projectName) {
    const projectMenu = document.querySelector('.project-menu')
    const listItem = document.createElement('li')
    listItem.textContent = projectName
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

function toggleCheck() {

}

function updatePriority() {

}

function deleteTaskDom() {

}

function projectEventListener() {
    const projectDiv = document.querySelectorAll('.task-list')
    const taskContainer = document.getElementById('task-container')
    projectDiv.forEach(project => {
        project.addEventListener('click', () => {
            if (project.id === 'inbox') {
                taskContainer.innerHTML = ''
                appendTasks()
            }
        })
    });
}

export {createProjectDom, createTaskDom, projectEventListener};