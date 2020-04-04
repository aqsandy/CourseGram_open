const login = document.querySelector('#login')
if (login != null) {
	if (storage.profile != null) {
		const loginHeader = document.querySelector('#loginHeader')
		const loginText = document.createTextNode(storage.getUsername())
		loginHeader.firstChild.remove()
		loginHeader.appendChild(loginText)
		if (storage.profile.admin) {
			login.setAttribute("href", "admin.html")
		} else {
			login.setAttribute("href", "profile.html")
		}
	}
}