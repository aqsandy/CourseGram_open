const home = document.querySelector('#home')
const program = document.querySelector('#addProgram')
const userChange = document.querySelector('#changeUser')
const emailChange = document.querySelector('#changeEmail')
const passwordChange = document.querySelector('#changePassword')
const logout = document.querySelector('#logout')

home.addEventListener('click', goHome)
program.addEventListener('click', addProgram)
userChange.addEventListener('click', changeUser)
emailChange.addEventListener('click', changeEmail)
passwordChange.addEventListener('click', changePassword)
logout.addEventListener('click', signout)


//document.querySelector('#user').innerHTML = profileName; 

const storage = new Storage()

loadProfilePrograms()

function loadProfilePrograms() {
    console.log('Loading profile programs.')
    const programList = document.querySelector('#programList')
    if (storage.profile != null) {
        for (const id of storage.profile.programs) {
            const programName = storage.getProgramName(id)
            const programType = storage.getProgramType(id)
            const programCode = storage.getProgramCode(id)
            let programCampus = storage.getProgramCampus(id)
            if (programCampus == 'stg') {
                programCampus = 'St. George'
            } else if (programCampus == 'eri') {
                programCampus = 'UTM'
            }
            const profileProgramText = document.createTextNode(programName + ' ' + programType + ' (' + programCode + ', ' + programCampus + ')')
            const profileProgramButton = document.createElement('button')
            profileProgramButton.setAttribute('value', id)
            const profileProgram = document.createElement('li')
            profileProgramButton.appendChild(profileProgramText)
            profileProgram.appendChild(profileProgramButton)
            programList.appendChild(profileProgram)
            profileProgramButton.addEventListener('click', goProgram)
        }
    }
}

function goHome(e) {
	e.preventDefault()
	window.location.href = 'index.html'
}

function goProgram(e) {
    e.preventDefault()
    if (storage.profile != null && storage.programs != null) {
        storage.setProgram(e.target.value)
        window.location.href = 'program.html'
    }
}

function addProgram(e){
    e.preventDefault()
    const programList = document.querySelector('#programList')
    const select = document.querySelector('#programSelect')
    const id = select.selectedIndex
    if (!storage.checkProfileForProgram(id)) {
        storage.programToProfile(id)
        const chosen = select.options[id].value
        const newProgram = document.createElement('li')
        console.log(chosen)
        newProgram.innerHTML = chosen;
        programList.appendChild(newProgram)
    } else {
        alert('Program already added to profile.')
    }
}

function changeUser(e){
    const user = document.querySelector('#changeUserName').value;
    storage.changeProfileUsernameSetPush(user)
    
    document.querySelector('#user').innerHTML = user; 
    const profile = document.querySelector('#profile');
    profile.innerHTML = user;
}

function changeEmail(e){
    const email = document.querySelector('#changeEmailName').value;
    storage.changeProfileEmailSetPush(email)
    document.querySelector('#email').innerHTML = email; 
}

function changePassword(e) {
    e.preventDefault()
    window.location.href = 'change-password.html'
}

function signout(e) {
    e.preventDefault()
    storage.logout()
    window.location.href = 'index.html'
}