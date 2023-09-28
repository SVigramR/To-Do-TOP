import './style.css';

console.log("Test Run")

let inboxArray = []

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
        return taskObject
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
        localStorage.setItem(JSON.stringify("task",inboxArray))
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
        let projects = {
            inbox: inboxArray,
        }
        if (Object.keys(projects) === projectName) {
            return `Project name (${projectName}) already exists`
        } else {
            return projects[projectName] = []
        }
    }
}

const todo = new projects()
console.log(todo.createTaskObject('testtwo', 'testing the code', '09/28/2023', 'Medium'))