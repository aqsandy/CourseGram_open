const authentication = document.querySelector('div#login')
const registration = document.querySelector('a#signup')
authentication.addEventListener('click', login)
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
		
		storage.login(username, password).then(res => {
			if (res){
				if (storage.profile.admin) {
					window.location.href = 'admin.html'
				} else {
					window.location.href = 'index.html'
				}
			} else {
				
				const errorContainer = document.querySelector(".ui.yellow.message")
				
				// const unlist = document.createElement("ul")
				// unlist.setAttribute("class","list")
				// const error = document.createElement('li')
				// error.appendChild(errorText)
				// unlist.appendChild(error)
				// const errorText = document.createTextNode('')
				
				errorContainer.innerHTML = "Invalid username or password"
			}
		})
		
	}
}

function signUp(e) {
	e.preventDefault()
	window.location.href = 'sign-up.html'
}