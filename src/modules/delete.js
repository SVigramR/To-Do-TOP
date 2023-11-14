import { inboxArray, inboxObject } from "../script"

function deleteTask() {
    const deleteTask = document.querySelectorAll('.delete')
    deleteTask.forEach(task => {
        task.addEventListener('click', (e) => {
            let taskId = e.target.parentElement.id
            console.log(taskId)
            inboxArray.forEach((element, index) => {
                if (element.id === taskId) return taskId = index;
            });
            inboxArray.splice(taskId,1)
            e.target.parentElement.remove()
            console.log(inboxArray)
        })
    })
}

function deleteProject(project) {
    const deleteProject = document.querySelector('.deleteProject')
    const projectDiv = document.getElementById(project)
    deleteProject.addEventListener('click',(e) => {
        delete inboxObject[project]
        projectDiv.remove()
        deleteProject.remove()
        localStorage.setItem('task', JSON.stringify(inboxObject))
        document.getElementById('inbox').click()
        let projectKeys = Object.keys(inboxObject)
        console.log(projectKeys)
    })
}

export { deleteTask, deleteProject }