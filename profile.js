const profileName = sessionStorage.getItem('profile')
const home = document.querySelector('#home')
const program = document.querySelector('#addProgram')
const userChange = document.querySelector('#changeUser')
const emailChange = document.querySelector('#changeEmail')

home.addEventListener('click', goHome)
program.addEventListener('click', addProgram)
userChange.addEventListener('click', changeUser)
emailChange.addEventListener('click', changeEmail)

document.querySelector('#user').innerHTML = profileName; 

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

function goHome(e) {
	e.preventDefault()
	window.location.href = 'index.html'
}

function addProgram(e){
    e.preventDefault()
    const programLst = document.querySelector('#programLst')
    const select = document.querySelector('#programSelect')
    const secondSelect = document.querySelector('#majorSelect')
    const major = secondSelect.options[secondSelect.selectedIndex].value;
    const chosen = select.options[select.selectedIndex].value;
    const newProgram = document.createElement('li')
    console.log(chosen)
    newProgram.innerHTML = chosen + " - " + major;
    programLst.appendChild(newProgram)
}

function changeUser(e){
    const user = document.querySelector('#changeUserName').value;
    sessionStorage.setItem('profile', user)
    
    document.querySelector('#user').innerHTML = user; 
    const profile = document.querySelector('#profile');
    profile.innerHTML = user;
}

function changeEmail(e){
    const email = document.querySelector('#changeEmailName').value;
    sessionStorage.setItem('email', user)
    document.querySelector('#email').innerHTML = email; 
}