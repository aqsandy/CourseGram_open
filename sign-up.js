let usernameValid = false
let emailValid = false
let passwordValid = false
let confirmPasswordValid = false

const invalidPasswordList = ['password', 'mypassword', '123456789', 'au4a83', 'ji32k7au4a83']

const home = document.querySelector('#home')
const registration = document.querySelector('#registration')
home.addEventListener('click', goHome)
registration.addEventListener('change', valid)
registration.addEventListener('submit', signUp)

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
	if (input == 'Username') {
		value = value.trim()
		usernameValid = false
		if (value == '') {
			box.appendChild(cross)
			const errorText = document.createTextNode('Username cannot be blank.')
			error.appendChild(errorText)
		} 
		// Check if username already exists on server
		// code below requires server call
		if (value == 'user' || value == 'admin') {
			box.appendChild(cross)
			const errorText = document.createTextNode('Username already used.')
			error.appendChild(errorText)
		} else {
			box.appendChild(checkmark)
			usernameValid = true
		}
	} else if (input == 'Email') {
		value = value.trim()
		emailValid = false
		if (value == '') {
			box.appendChild(cross)
			const errorText = document.createTextNode('Email cannot be blank.')
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
	} else if (input == 'Password') {
		passwordValid = false
		if (value == '') {
			box.appendChild(cross)
			const errorText = document.createTextNode('Password cannot be blank.')
			error.appendChild(errorText)
		} else if (value.length < 8) {
			box.appendChild(cross)
			const errorText = document.createTextNode('Password must be at least 8 characters in length.')
			error.appendChild(errorText)
		} else if (value.match(/(.)\1{7,}/) || invalidPasswordList.includes(value)) {
			box.appendChild(cross)
			const errorText = document.createTextNode(value + ' is not a valid password.')
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

function signUp(e) {
	e.preventDefault()
	if (typeof(Storage) !== 'undefined') {
		const username = document.querySelector('#username').value
		const password = document.querySelector('#password').value
		// Set profile data on server
		// code below requires server call
		if (usernameValid && emailValid && passwordValid && confirmPasswordValid) {
			sessionStorage.setItem('profile', username)
			window.location.href = 'index.html'
		}
	}
}