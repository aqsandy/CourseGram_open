const home = document.querySelector('#home')
const authentication = document.querySelector('#authentication')
const registration = document.querySelector('#signUpButton')
home.addEventListener('click', goHome)
authentication.addEventListener('submit', login)
registration.addEventListener('click', signUp)

function goHome(e) {
	e.preventDefault()
	window.location.href = 'index.html'
}

function Profile(username, email, password) {
	this.username = username
	this.email = email
	this.password = password
}

function login(e) {
	e.preventDefault()
	if (typeof(Storage) !== 'undefined') {
		const username = document.querySelector('#username').value
		const password = document.querySelector('#password').value
		// Validate against profile username and password on server
		// code below requires server call
		const profiles = JSON.parse(sessionStorage.getItem('profiles'))
		if (profiles != null) {
			for (let i = 0; i < profiles.length; i++) {
				if (profiles[i].username == username && profiles[i].password == password) {
					sessionStorage.setItem('profile', JSON.stringify(profiles[i]))
				}
			}
		}
		if ((username == 'user' && password == 'user') || 
			(username == 'admin' && password == 'admin')) {
			const profile = new Profile('user', 'user@user.com', 'user')
			sessionStorage.setItem('profile', JSON.stringify(profile))
			window.location.href = 'index.html'
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