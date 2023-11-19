import { projectOption, projectRemoveOption } from "./options"
import { inboxArray, validateDate } from "../script"
import { formatDate, formatStringToDate } from "./date"

function updateTask() {
        const updateBtn = document.querySelectorAll('.update')
        const popupBackground = document.querySelectorAll('[data-background]')
        const popupClose = document.querySelectorAll('[data-close]')
        const myForm = document.getElementById('formTwo');

        updateBtn.forEach(update => {
            update.addEventListener('click', (e) => {
                document.getElementById('updateTaskPopup').classList.add('active')                     
                projectOption()
                let taskId = e.target.parentElement.id
                formUpdater(taskId)
                submitUpdate(taskId)
            })
        })
    
        popupBackground.forEach(background => {
            background.addEventListener('click', () => {
                document.getElementById('updateTaskPopup').classList.remove('active')
                projectRemoveOption()
            })
        })
        
        popupClose.forEach(close => {
            close.addEventListener('click', () => {
                document.getElementById('updateTaskPopup').classList.remove('active')
                projectRemoveOption()
            })
        })
        console.log(identification)

        const taskObject = (taskId) => {
            let task
            inboxArray.forEach((element) => {
                if (element.id === taskId) return task = element;
            });
            return task
        }

        const taskIndex = (taskId) => {
            let taskIndex;
            inboxArray.forEach((element, index) => {
                if (element.id === taskId) return taskIndex = index;
            });
            return taskIndex;
        }

        const formUpdater = (taskId) => {
            let task = taskObject(taskId)
            const dateUpdater = (date) => {
                const normalDate = new Date(formatStringToDate(date))
                const day = ("0" + normalDate.getDate()).slice(-2);
                const month = ("0" + (normalDate.getMonth() + 1)).slice(-2);
                const year = normalDate.getFullYear() + "-" + month + "-" + day;
                return year
            }
            
            let titleInput = document.getElementById('utitle')
            let descriptionInput = document.getElementById('udescription')
            let dateInput = document.getElementById('udate')
            let priorityInput = document.getElementById('upriority')
            let projectInput = document.getElementById('uproject')
            titleInput.value = task.title
            descriptionInput.value = task.description
            dateInput.value = dateUpdater(task.dueDate)
            priorityInput.value = task.priority
            projectInput.value = task.project
        }

        const submitUpdate = (taskId) => {
        
            const submitHandler = async (event) => {
                event.preventDefault();
                document.getElementById("updateSubmit").disabled = true;
        
                let titleInput = document.getElementById('utitle').value;
                let descriptionInput = document.getElementById('udescription').value;
                let dateInput = document.getElementById('udate').value;
                let priorityInput = document.getElementById('upriority').value;
                let projectInput = document.getElementById('uproject').value;
                
                if (titleInput !== null) {
                    const task = taskObject(taskId);
                    task.title = titleInput;
                    task.description = descriptionInput;
        
                    if (dateInput !== '') {
                        let date = formatDate(dateInput);
                        task.dueDate = date;
                    } else {
                        task.dueDate = dateInput;
                    }
        
                    console.log(task.dueDate);
                    task.priority = priorityInput;
                    task.project = projectInput;
        
                    console.table(task);
                    updateModal(taskId, task.title, task.dueDate, task.priority)
    
                    let Index = taskIndex(taskId);
                    console.log(Index);
                    inboxArray[Index] = task;
                    console.log(inboxArray);
                }
        
                document.getElementById('updateTaskPopup').classList.remove('active');
                projectRemoveOption();
                myForm.reset();
                console.log('Update Button Clicked');
                document.getElementById("updateSubmit").disabled = false;
        
                myForm.removeEventListener('submit', submitHandler);
            };
        
            myForm.addEventListener('submit', submitHandler);
        };

        const updateModal = (taskId, title, date, priority) => {
            const taskDiv = document.getElementById(taskId)
            for (let index = 0; index < 3; index++) {
                taskDiv.removeChild(taskDiv.firstChild)
            }
            taskDiv.classList.remove()
            taskDiv.classList.add('task-div', priority)
            const checkBox = document.createElement('input')
            checkBox.setAttribute('type', 'checkbox')
            const taskTitle = document.createElement('p')
            taskTitle.textContent = title
            const taskDate = document.createElement('p')
            taskDate.textContent = date
        
            taskDiv.prepend(checkBox, taskTitle, taskDate )
        }
}

export default updateTask;