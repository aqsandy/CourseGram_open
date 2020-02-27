let emailValid = false

const home = document.querySelector('#home')
const registration = document.querySelector('#recover')
home.addEventListener('click', goHome)
recover.addEventListener('change', valid)
recover.addEventListener('submit', recoverUsername)

function goHome(e) {
	e.preventDefault()
	window.location.href = 'index.html'
}

function valid(e) {
	e.preventDefault()
	const box = e.target.parentElement.children[2]
	const checkmark = document.createTextNode('\u2713')
	const cross = document.createTextNode('\u2717')
	const error = e.target.parentElement.children[3]
	const input = e.target.name
	let value = e.target.value
	box.childNodes[0].remove()
	if (error.childNodes[0] != null) {
		error.childNodes[0].remove()
	}
	if (input == 'Email') {
		value = value.trim()
		emailValid = false
		if (value == '') {
			box.appendChild(cross)
			const errorText = document.createTextNode('Email cannot be blank.')
			error.appendChild(errorText)
		} else if (!value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
			box.appendChild(cross)
			const errorText = document.createTextNode('Email is not valid.')
			error.appendChild(errorText)
		}
		// Check if email already exists on server
		// code below requires server call
		else if (value == 'user@user.com' || value == 'admin@admin.com') {
			box.appendChild(cross)
			const errorText = document.createTextNode('Email already used.')
			error.appendChild(errorText)
		} else {
			box.appendChild(checkmark)
			emailValid = true
		}
	}
}

function recoverUsername(e) {
	e.preventDefault()
	if (typeof(Storage) !== 'undefined') {
		// Check server for email and send username to email if email is a profile email
		// code below requires server call
		if (emailValid) {
			window.location.href = 'login.html'
		}
	}
}