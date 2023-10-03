function createForms() {
    const taskButton = document.getElementById('createTask')
    const projectButton = document.getElementById('createProject')
    const forms = document.getElementById('formOne')
    let taskHTML = `<label for="ftitle">Title:</label>
                    <input type="text" id="ftitle" name="title" placeholder="Title" required>
                    <label for="fdescription">Description:</label>
                    <input type="text" id="fdescription" name="description" placeholder="Description">
                    <label for="ftitle">Date:</label>
                    <input type="date" id="fdate" name="date">
                    <label for="fpriority">Priority:</label>
                    <select id="fpriority" name="priority" required>
                        <option value="none">None</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                    <label for="fproject">Project:</label>
                    <select id="fproject" name="project" required>
                        <option value="inbox">Inbox</option>
                    </select> 
                    <button type="submit" id="addSubmit" class="addSubmit">Add Task</button>`

    let projectHTML = `<label for="formProject">Project</label>
                        <input type="text" id="formProject" name="formProject" placeholder="Project: Study-Planner, Gym, Travel" required>
                        <button type="submit" id="addSubmit" class="addSubmit">Add Project</button>`

    taskButton.addEventListener('click', () => {
        forms.innerHTML = ''
        forms.innerHTML += taskHTML
    })

    projectButton.addEventListener('click', () => {
        forms.innerHTML = ''
        forms.innerHTML += projectHTML
    })
}

export default createForms;