import { inboxArray } from "../script"

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

export { deleteTask }