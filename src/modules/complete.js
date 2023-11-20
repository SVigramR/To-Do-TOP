import { taskObject, taskIndex } from "./update"
import { inboxArray, inboxObject } from "../script"

function togglecheck() {
    const checkbox = document.querySelectorAll('.check-box')
    checkbox.forEach(box => {
        box.addEventListener('change', (event) => {
            const objectId = event.target.parentElement.parentElement.id
            const getDiv = document.getElementById(objectId)
            if (box.checked) {
                let task = taskObject(objectId)
                let Index = taskIndex(objectId);
                getDiv.classList.add('task-complete')
                task.checked = true
                inboxArray[Index] = task;
                console.log(inboxArray);
            } else {
                let task = taskObject(objectId)
                let Index = taskIndex(objectId);
                getDiv.classList.remove('task-complete')
                task.checked = false
                inboxArray[Index] = task;
                console.log(inboxArray);
            }
            localStorage.clear()
            localStorage.setItem('task', JSON.stringify(inboxObject))
        })
    })
}

export default togglecheck;