function createProjectDom(projectName) {
    const projectMenu = document.querySelector('.project-menu')
    const listItem = document.createElement('li')
    listItem.textContent = projectName
    listItem.classList.add('task-list', 'task-hover')
    projectMenu.appendChild(listItem)
}

function createTaskDom() {

}

export {createProjectDom, createTaskDom};