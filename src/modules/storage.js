import { createProject, appendTasks, filterTaskArray, inboxArray, inboxObject } from "../script"
import { createProjectDom } from "./modal"

function retrieveStorage() {
    if (localStorage.getItem('task') !== null) {
        const getItem = JSON.parse(localStorage.getItem('task'))
        const inbox = getItem.inbox
        for (let index = 0; index < inbox.length; index++) { 
            inboxArray.push(inbox[index])
        }
        const objectKeys = Object.keys(getItem)
        for (let index = 1; index < objectKeys.length; index++) {
            createProject(objectKeys[index])
            const filterProject = filterTaskArray(objectKeys[index])
            for (let j = 0; j < filterProject.length; j++) {
                inboxObject[objectKeys[index]].push(filterProject[j]);
            }
            createProjectDom(objectKeys[index])
        }
        appendTasks()
        console.log('Storage Retrival')
    }
}

// export {getStorageKeys, getStorageValues};
export { retrieveStorage };