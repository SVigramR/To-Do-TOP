import { inboxArray, findProjectIndex, filterTaskArray } from "../script"
import { findDateIndex, findTodayIndex, evaluateWeekDays, evaluateUpcomingdays, evaluatePendingDays } from "./date"

function deleteDefaultTask() {
    const deleteTask = document.querySelectorAll('.delete')
    deleteTask.forEach(task => {
        task.addEventListener('click', (e) => {
            let taskId = Number(e.target.parentElement.id)
            console.log(taskId)
            inboxArray.splice(taskId,1)
            e.target.parentElement.remove()
            console.log(inboxArray)
            refreshDefaultIndex()
            refreshProjectIndex()
        })
    })
}

function refreshDefaultIndex() {
    const defaultProjectDiv = document.querySelectorAll('.task-list')
    const taskDiv = document.querySelectorAll('.task-div')
    defaultProjectDiv.forEach(defaultProject => {
            let index;
            if (defaultProject.id === 'inbox') {
                index = 0;
                taskDiv.forEach(task => {
                    task.setAttribute('id', index)
                    index++          
                });
            } else if (defaultProject.id === 'today') {
                index = 0;
                let findTodayIndexFunc = findTodayIndex(inboxArray, defaultProject.id)
                const today = () => {
                    return findTodayIndexFunc[index]
                }
                taskDiv.forEach(task => {
                    task.setAttribute('id', today())
                    index++;
                });
            } else if (defaultProject.id === 'week') {
                index = 0;
                const filteredWeek = evaluateWeekDays(new Date())
                const findWeekIndexFunc = findDateIndex(inboxArray, filteredWeek)
                let weekIndex = findWeekIndexFunc.filter(array => array.length > 0).flat()
                const week = () => {
                    return weekIndex[index]
                }
                taskDiv.forEach(task => {
                    task.setAttribute('id', week())
                    index++;
                });
            } else if (defaultProject.id === 'upcoming') {
                index = 0;
                const sortedUpcoming = evaluateUpcomingdays(new Date(), inboxArray)
                const findUpcomingIndexFunc = findDateIndex(inboxArray, sortedUpcoming)
                let upcomingIndex = findUpcomingIndexFunc.flat()
                const upcoming = () => {
                    return upcomingIndex[index]
                }
                taskDiv.forEach(task => {
                    task.setAttribute('id', upcoming())
                    index++;
                });
            } else if (defaultProject.id === 'pending') {
                index = 0;
                const sortedPending = evaluatePendingDays(new Date(), inboxArray)
                const findPendingIndexFunc = findDateIndex(inboxArray, sortedPending)
                let pendingIndex = findPendingIndexFunc.flat()
                const upcoming = () => {
                    return pendingIndex[index]
                }
                taskDiv.forEach(task => {
                    task.setAttribute('id', upcoming())
                    index++;
                });
            } // else if (defaultProject.id === 'completed') {
            // }
    }); 
}

function refreshProjectIndex() {
    const defaultProjectDiv = document.querySelectorAll('.project-list')
    const taskDiv = document.querySelectorAll('.task-div')
    const getItem = JSON.parse(localStorage.getItem('task'))
    const projectKeys = Object.keys(getItem)
    defaultProjectDiv.forEach(defaultProject => {
        if (projectKeys.includes(defaultProject.id)) {
            let index = 0
            let findTaskIndex = findProjectIndex(inboxArray, defaultProject.id)
            taskDiv.forEach(task => {
                task.setAttribute('id', findTaskIndex[index])
                index++;
            });
        }
    });
}

export { deleteDefaultTask }