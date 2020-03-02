const profileData = JSON.parse(sessionStorage.getItem('profile'))
const profileName = profileData.username
const home = document.querySelector('#home')
const program = document.querySelector('#addProgram')
const userChange = document.querySelector('#changeUser')
const emailChange = document.querySelector('#changeEmail')

home.addEventListener('click', goHome)
program.addEventListener('click', addProgram)
userChange.addEventListener('click', changeUser)
emailChange.addEventListener('click', changeEmail)

document.querySelector('#user').innerHTML = profileName; 

const storage = new Storage()

if (profileName != null){
	const header = document.querySelector('#header')
	header.firstElementChild.children[2].remove()
	const profileContainer = document.createElement('li')
	profileContainer.setAttribute('id', 'profileContainer')
	const profileButton = document.createElement('button')
	profileButton.setAttribute('id', 'profile')
	const profileButtonText = document.createTextNode(profileName)
	profileButton.appendChild(profileButtonText)
	profileContainer.appendChild(profileButton)
	header.firstElementChild.appendChild(profileContainer)
} else {
	const login = document.querySelector('#login')
	login.addEventListener('click', goLogin)
}

loadProfilePrograms()

function loadProfilePrograms() {
    const programList = document.querySelector('#programLst')
    const select = document.querySelector('#programSelect')
    if (storage.profile != null) {
        for (let id = 0; id < storage.profile.programs.length; id++) {
            const profileProgramText = select.options[id].value
            const profileProgram = document.createElement('li')
            profileProgram.innerHTML = profileProgramText
            programList.appendChild(profileProgram)
        }
    }
}

function goHome(e) {
	e.preventDefault()
	window.location.href = 'index.html'
}

function addProgram(e){
    e.preventDefault()
    const programLst = document.querySelector('#programLst')
    const select = document.querySelector('#programSelect')
    const id = select.selectedIndex
    if (!storage.checkProfileForProgram(id)) {
        storage.programToProfile(id)
        const chosen = select.options[id].value
        const newProgram = document.createElement('li')
        console.log(chosen)
        newProgram.innerHTML = chosen;
        programLst.appendChild(newProgram)
    } else {
        alert('Program already added to profile.')
    }
}

function changeUser(e){
    const user = document.querySelector('#changeUserName').value;
    profileData.username = user
    sessionStorage.setItem('profile', profileData)
    
    document.querySelector('#user').innerHTML = user; 
    const profile = document.querySelector('#profile');
    profile.innerHTML = user;
}

function changeEmail(e){
    const email = document.querySelector('#changeEmailName').value;
    profileData.email = email
    sessionStorage.setItem('profile', profileData)
    document.querySelector('#email').innerHTML = email; 
}