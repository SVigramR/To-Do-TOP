
function projectOption() {
    const project = document.getElementById('fproject')
    const projectTwo = document.getElementById('uproject')
    const projectOptionStorage = JSON.parse(localStorage.getItem('task'))
    console.log(typeof(projectOptionStorage))
    let projectKeys = Object.keys(projectOptionStorage)
    console.log(projectKeys)
    for (let index = 0; index < projectKeys.length; index++) {
        let element = `<option value="${projectKeys[index]}">${projectKeys[index]}</option>`
        project.innerHTML += element 
        projectTwo.innerHTML += element
    }
}

function projectRemoveOption() {
    const project = document.getElementById('fproject')
    const projectTwo = document.getElementById('uproject')
    while (project.hasChildNodes()) {
    project.removeChild(project.firstChild)
    };
    while (projectTwo.hasChildNodes()) {
    projectTwo.removeChild(projectTwo.firstChild)
    }
}

export {projectOption, projectRemoveOption};