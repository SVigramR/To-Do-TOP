import { projectOption, projectRemoveOption } from "./options"

function updatePopup() {
    const forms = document.getElementById('addTaskPopup')
    const updateBtn = document.querySelectorAll('.update')
    const popupBackground = document.querySelectorAll('[data-background]')
    const popupClose = document.querySelectorAll('[data-close]')

        updateBtn.forEach(update => {
            update.addEventListener('click', () => {
                document.getElementById('updateTaskPopup').classList.add('active') 
                projectOption()
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
        
}

export default updatePopup;