const storage = new Storage()


const errorContainer = document.querySelector(".ui.yellow.message")
const registration = document.querySelector('#change')
const button = document.querySelector('#changePasswordButton')

const p1 = document.querySelector('#password')
const p2 = document.querySelector('#confirmPassword')

const prohibitedPasswordList = ['password', 'mypassword', '123456789', 'au4a83', 'ji32k7au4a83']

button.addEventListener('click', changePassword)

function changePassword(e) {
	e.preventDefault()
	
	const password1 = p1.value
	const password2 = p2.value
	console.log(password1 == password2)

	if (typeof(Storage) !== 'undefined') {
		const samePassword = password1 === password2
		const notValid = prohibitedPasswordList.includes(password1)
		if(!samePassword){
			errorContainer.innerHTML = 'Passwords do not match'
		}
		else if(notValid){
			errorContainer.innerHTML = 'This is not a valid password'
		}
		else if(password1.length < 6){
			errorContainer.innerHTML = 'Password is too short'
		}
		else{
			const promise = storage.changeProfilePasswordSet(password1)
			if(promise){
				promise.then(bool =>{
					if(bool){
						window.location.href = 'profile.html'
					}
					else{
						errorContainer.innerHTML = 'Change password failed'
					}
				})
			}
		}
	}
}