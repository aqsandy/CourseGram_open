const home = document.querySelector('#home')
home.addEventListener('click', goHome)

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

let passwordValid = false

const registration = document.querySelector('#change')
change.addEventListener('change', valid)
change.addEventListener('submit', changePassword)

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
	if (storage.profile != null) {
		if (storage.profile.admin) {
			window.location.href = 'admin.html'
		} else {
			window.location.href = 'profile.html'
		}
	}
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
	if (input == 'Password') {
		// Prohibited password list on server
		const prohibitedPasswordList = ['password', 'mypassword', '123456789', 'au4a83', 'ji32k7au4a83']
		
		passwordValid = false
		if (value == '') {
			box.appendChild(cross)
			const errorText = document.createTextNode('Password cannot be blank.')
			error.appendChild(errorText)
		} else if (value.length < 8) {
			box.appendChild(cross)
			const errorText = document.createTextNode('Password must be at least 8 characters in length.')
			error.appendChild(errorText)
		}
		// Check if password is part of prohibited passwords on server
		// code below requires server call
		else if (value.match(/(.)\1{7,}/) || prohibitedPasswordList.includes(value)) {
			box.appendChild(cross)
			const errorText = document.createTextNode(value + ' is a prohibited password.')
			error.appendChild(errorText)
		} else {
			box.appendChild(checkmark)
			passwordValid = true
		}
	} else if (input == 'Confirm Password') {
		confirmPasswordValid = false
		if (value != document.querySelector('#password').value) {
			box.appendChild(cross)
			const errorText = document.createTextNode('Passwords do not match.')
			error.appendChild(errorText)
		} else {
			box.appendChild(checkmark)
			confirmPasswordValid = true
		}
	}
}

function changePassword(e) {
	e.preventDefault()
	if (typeof(Storage) !== 'undefined') {
		const password = document.querySelector('#password').value
		// Change password on server
		// code below requires server call
		if (passwordValid) {
			storage.changeProfilePasswordSetPush(password)
			window.location.href = 'profile.html'
		}
	}
}