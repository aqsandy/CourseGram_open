const home = document.querySelector('#home')
const authentication = document.querySelector('#authentication')
const registration = document.querySelector('#signUpButton')
home.addEventListener('click', goHome)
authentication.addEventListener('submit', login)
registration.addEventListener('click', signUp)

const storage = new Storage()

function goHome(e) {
	e.preventDefault()
	window.location.href = 'index.html'
}

function login(e) {
	e.preventDefault()
	if (typeof(Storage) !== 'undefined') {
		const username = document.querySelector('#username').value
		const password = document.querySelector('#password').value
		// Validate against profile username and password on server
		// code below requires server call
		if (username == 'user' && password == 'user') {
			storage.createDefaultUser()
			window.location.href = 'index.html'
		} else if (username == 'admin' && password == 'admin') {
			storage.createDefaultAdmin()
			window.location.href = 'admin.html'
		} else if (storage.login(username, password)){
			if (storage.profile.admin) {
				window.location.href = 'admin.html'
			} else {
				window.location.href = 'index.html'
			}
		} else {
			const errorContainer = document.querySelector('#errorContainer')
			const error = document.createElement('p')
			const errorText = document.createTextNode('Invalid username or password.')
			error.appendChild(errorText)
			errorContainer.appendChild(error)
		}
	}
}

function signUp(e) {
	e.preventDefault()
	window.location.href = 'sign-up.html'
}