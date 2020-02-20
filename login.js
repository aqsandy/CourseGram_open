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
		//TODO: Validate and setItem correctly
		sessionStorage.setItem('profile', 'user')
		window.location.href = 'index.html'
	}
}