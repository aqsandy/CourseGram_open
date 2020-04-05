const home = document.querySelector('#home')
const program = document.querySelector('#addProgram')
const userChange = document.querySelector('#changeUser')
const emailChange = document.querySelector('#changeEmail')
const passwordChange = document.querySelector('#changePassword')
const logout = document.querySelector('#logout')
const selectProgramButton = document.querySelector('#selectProgramButton')

home.addEventListener('click', goHome)
userChange.addEventListener('click', changeUser)
emailChange.addEventListener('click', changeEmail)
passwordChange.addEventListener('click', changePassword)
logout.addEventListener('click', signout)
selectProgramButton.addEventListener('click', goProgram)


//document.querySelector('#user').innerHTML = profileName; 

const storage = new Storage()

loadProfilePrograms()

function loadProfilePrograms() {
    console.log('Loading profile programs.')
    const select = document.querySelector('.ui.dropdown')
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
            const option = document.createElement('option')
            option.setAttribute('value', id)
            const optionText = document.createTextNode(programName + ' ' + programType + ' (' + programCode + ', ' + programCampus + ')')
            option.appendChild(optionText)
            select.appendChild(option)
        }
    }
}

function goHome(e) {
	e.preventDefault()
	window.location.href = 'index.html'
}

function goProgram(e) {
    e.preventDefault()
    const select = document.querySelector('.ui.dropdown')
    const id = select.value
    if (id != '' && storage.profile != null && storage.programs != null) {
        storage.setProgram(id)
        window.location.href = 'program.html'
    }
}

function changeUser(e){
    const user = document.querySelector('#changeUserName').value;
    storage.changeProfileUsernameSet(user)
    
    document.querySelector('#user').innerHTML = user; 
    const profile = document.querySelector('#profile');
    profile.innerHTML = user;
}

function changeEmail(e){
    const email = document.querySelector('#changeEmailName').value;
    storage.changeProfileEmailSet(email)
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