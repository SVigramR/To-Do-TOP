import './style.css';

console.log("Test Run")

let inboxArray = []
let inboxObject = {
    inbox: inboxArray,
}

class todos {

    createTaskObject(title, description, dueDate, priority, project="inbox", checked=false) {
        let taskObject = {
            title: title,
            description: description,
            dueDate: dueDate,
            priority: priority,
            project: project,
            checked: checked,
        }
        return inboxArray.push(taskObject)
    }

    filterTaskArray(projectValue) {
        const filteredInbox = inboxArray.filter((project) => {
            return project.project === projectValue
        })
        return filteredInbox
    }
}

class storage extends todos {
    
    constructor() {
        super()
    }

    updateStorage() {
        localStorage.setItem("task", JSON.stringify(inboxObject))
    }

    retrieveStorage() {
        JSON.parse(localStorage.getItem("task"))
    }
}

class projects extends storage {
    constructor() {
        super()
    }

    createProject(projectName) {
        if (Object.keys(inboxObject) === projectName) {
            return `Project name (${projectName}) already exists`
        } else {
            return inboxObject[projectName] = []
        }
    }

    updateProject(updateProjectArray) {
        let updater = this.filterTaskArray(updateProjectArray)
        for (let index = 0; index < updater.length; index++) {
            const element = updater[index]
            inboxObject[updateProjectArray].push(element)
        }
    }
}

function init() {
    const todo = new projects()
    todo.createTaskObject('testtwo', 'testing the code', '09/28/2023', 'Medium')
    todo.createTaskObject('testOne', 'testing the code', '09/28/2023', 'Medium')
    todo.createTaskObject('testthree', 'testing the code', '09/28/2023', 'High', 'hello')
    todo.createTaskObject('testfour', 'testing the code', '09/28/2023', 'Low', 'hello')
    todo.createTaskObject('testfive', 'testing the code', '09/28/2023', 'Medium')
    console.log(todo.filterTaskArray('hello'))
    todo.createProject("hello")
    todo.updateProject("hello")
    todo.updateStorage()
    console.log(inboxArray)
    console.log(inboxObject)
}

const openTaskForm = document.querySelector('#addTask')
const popupBackground = document.querySelectorAll('[data-background]')

openTaskForm.addEventListener('click', () => {
    document.getElementById('addTaskPopup').classList.add('active')
})

popupBackground.forEach(background => {
    background.addEventListener('click', () => {
        background.classList.remove('active')
    })
})

init()