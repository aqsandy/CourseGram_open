let emailValid = false

const home = document.querySelector('#home')
const registration = document.querySelector('#reset')
home.addEventListener('click', goHome)
reset.addEventListener('change', valid)
reset.addEventListener('submit', resetPassword)

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
		const profiles = JSON.parse(sessionStorage.getItem('profiles'))
		if (profiles != null) {
			for (let i = 0; i < profiles.length; i++) {
				if (profiles[i].email == email) {
					box.appendChild(cross)
					const errorText = document.createTextNode('Email already used.')
					error.appendChild(errorText)
				}
			}
		} else if (value == 'user@user.com' || value == 'admin@admin.com') {
			box.appendChild(cross)
			const errorText = document.createTextNode('Email already used.')
			error.appendChild(errorText)
		} else {
			box.appendChild(checkmark)
			emailValid = true
		}
	}
}

function resetPassword(e) {
	e.preventDefault()
	if (typeof(Storage) !== 'undefined') {
		// Check server for email and send password reset link to email if email is a profile email
		// Password reset link causes password reset and server directs view to reset-password-change
		// code below requires server call
		if (emailValid) {
			const profiles = JSON.parse(sessionStorage.getItem('profiles'))
			if (profiles != null) {
				for (let i = 0; i < profiles.length; i++) {
					if (profiles[i].email == email) {
						sessionStorage.setItem('profile', JSON.stringify(profiles[i]))
					}
				}
			}
			if ((username == 'user' && password == 'user') || 
				(username == 'admin' && password == 'admin')) {
				const profile = new Profile('user', 'user@user.com', 'user')
				sessionStorage.setItem('profile', JSON.stringify(profile))
				window.location.href = 'index.html'
			}
			window.location.href = 'reset-password-change.html'
		}
	}
}