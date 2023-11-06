import { inboxArray } from "../script"

function deleteFunction() {
    const deleteTask = document.querySelectorAll('.delete')
    deleteTask.forEach(task => {
        task.addEventListener('click', (e) => {
            let taskId = Number(e.target.parentElement.id)
            console.log(taskId)
            inboxArray.splice(taskId,1)
            e.target.parentElement.remove()
            console.log(inboxArray)
        })
    })
}

export { deleteFunction }