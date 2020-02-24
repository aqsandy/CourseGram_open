const home = document.querySelector('#home')
const registration = document.querySelector('#registration')
home.addEventListener('click', goHome)
registration.addEventListener('submit', signUp)

function goHome(e) {
	e.preventDefault()
	window.location.href = 'index.html'
}

function signUp(e) {
	e.preventDefault()
	if (typeof(Storage) !== 'undefined') {
		const username = document.querySelector('#username').value
		const password = document.querySelector('#password').value
		// Validate against username and password on server
		// code below requires server call
		if ((username == 'user' && password == 'user') || 
			(username == 'admin' && password == 'admin')) {
			sessionStorage.setItem('profile', username)
			window.location.href = 'index.html'
		}
	}
}