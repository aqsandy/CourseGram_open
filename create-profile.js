const home = document.querySelector('#home')
const authentication = document.querySelector('#authentication')
home.addEventListener('click', goHome)
authentication.addEventListener('submit', login)

function goHome(e) {
	e.preventDefault()
	window.location.href = 'index.html'
}

function login(e) {
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