/* 
adding button listeners
*/
const authentication = document.querySelector('#authentication');
authentication.addEventListener('submit', login)
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
		if ((username == 'admin' && password == 'admin')) {
			const profile = new Profile('admin', 'admin@admin.com', 'admin')
			sessionStorage.setItem('profile', JSON.stringify(profile))
			window.location.href = './admin.html'
		} else {
			const errorContainer = document.querySelector('#errorContainer')
			const error = document.createElement('p')
			const errorText = document.createTextNode('Invalid username or password.')
			error.appendChild(errorText)
			errorContainer.appendChild(error)
		}
	}
}