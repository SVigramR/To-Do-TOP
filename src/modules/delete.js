import { inboxArray } from "../script"
import { findTodayIndex } from "./date"

function deleteFunction() {
    const deleteTask = document.querySelectorAll('.delete')
    deleteTask.forEach(task => {
        task.addEventListener('click', (e) => {
            let taskId = Number(e.target.parentElement.id)
            console.log(taskId)
            inboxArray.splice(taskId,1)
            e.target.parentElement.remove()
            console.log(inboxArray)
            refreshIndex()
        })
    })
}

function refreshIndex() {
    const defaultProjectDiv = document.querySelectorAll('.task-list')
    const taskDiv = document.querySelectorAll('.task-div')
    defaultProjectDiv.forEach(defaultProject => {
            if (defaultProject.id === 'inbox') {
                let index = 0;
                taskDiv.forEach(task => {
                    task.setAttribute('id', index)
                    index++          
                });
            } else if (defaultProject.id === 'today') {
                let index = 0;
                let findTodayIndexFunc = findTodayIndex(inboxArray, defaultProject.id)
                let today = () => {
                    return findTodayIndexFunc[index]
                }
                taskDiv.forEach(task => {
                    task.setAttribute('id', today())
                    index++;
                });
            } // else if (defaultProject.id === 'week') {
            //     for (let index = 0; index < filteredWeek.length; index++) {
            //         for (let jIndex = 0; jIndex < weekDay.length; jIndex++) {
            //         }
            //     }
            // } else if (defaultProject.id === 'upcoming') {
            //     for (let index = 0; index < sortedUpcoming.length; index++) {
            //         for (let jIndex = 0; jIndex < filteredUpcoming.length; jIndex++) {                       
            //         }
            //     }
            // } else if (defaultProject.id === 'pending') {
            //     for (let index = 0; index < sortedPending.length; index++) {
            //         for (let jIndex = 0; jIndex < filteredPending.length; jIndex++) {
            //         }
            //     }
            // } else if (defaultProject.id === 'completed') {
            // }
        // });
    }); 
}

export { deleteFunction }