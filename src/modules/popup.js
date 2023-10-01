function popupListener() {
    const openTaskForm = document.querySelector('#addTask')
    const popupBackground = document.querySelectorAll('[data-background]')
    const popupClose = document.querySelectorAll('[data-close]')

    openTaskForm.addEventListener('click', () => {
        document.getElementById('addTaskPopup').classList.add('active')
    })

    popupBackground.forEach(background => {
        background.addEventListener('click', () => {
            document.getElementById('addTaskPopup').classList.remove('active')
        })
    })

    popupClose.forEach(close => {
        close.addEventListener('click', () => {
            document.getElementById('addTaskPopup').classList.remove('active')
        })
    })

}

export default popupListener;