const home = document.querySelector('#home')
const login = document.querySelector('#login')
home.addEventListener('click', goHome)
login.addEventListener('click', goLogin)

function goHome(e) {
	e.preventDefault()
	window.location.href = 'index.html'
}

function goLogin(e) {
	e.preventDefault()
	window.location.href = 'login.html'
}