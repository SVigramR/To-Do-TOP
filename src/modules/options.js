const project = document.getElementById('fproject')
function projectOption() {
    const projectOptionStorage = JSON.parse(localStorage.getItem('task'))
    console.log(typeof(projectOptionStorage))
    let projectKeys = Object.keys(projectOptionStorage)
    console.log(projectKeys)
    for (let index = 1; index < projectKeys.length; index++) {
        let element = `<option value="${projectKeys[index]}">${projectKeys[index]}</option>`
        project.innerHTML += element 
    }
}

function projectRemoveOption() {
    const project = document.getElementById('fproject')
    project.innerHTML = ''
    project.innerHTML = `<option value="inbox">Inbox</option>`
}

export {projectOption, projectRemoveOption};