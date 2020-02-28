const home = document.querySelector('#home')
home.addEventListener('click', goHome)
const programs = document.querySelector('#programs')
for (const program of programs.children[1].children) {
	const programButton = program.firstElementChild
	programButton.addEventListener('click', goProgram)
}

const storage = new Storage()

if (storage.profile != null) {
	const header = document.querySelector('#header')
	header.firstElementChild.children[2].remove()
	const profileContainer = document.createElement('li')
	profileContainer.setAttribute('id', 'profileContainer')
	const profileButton = document.createElement('button')
	profileButton.setAttribute('id', 'profile')
	const profileButtonText = document.createTextNode(storage.getUsername())
	profileButton.appendChild(profileButtonText)
	profileContainer.appendChild(profileButton)
	header.firstElementChild.appendChild(profileContainer)
	const profile = document.querySelector('#profile')
	profile.addEventListener('click', goProfile)
} else {
	const login = document.querySelector('#login')
	login.addEventListener('click', goLogin)
}

function goHome(e) {
	e.preventDefault()
	window.location.href = 'index.html'
}

function goLogin(e) {
	e.preventDefault()
	window.location.href = 'login.html'
}

function goProfile(e) {
	e.preventDefault()
	window.location.href = 'profile.html'
}

function goProgram(e) {
	e.preventDefault()
	window.location.href = 'program.html'
}
